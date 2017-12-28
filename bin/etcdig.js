#!/usr/bin/env node

const {find, grep, ls} = require('../lib/commands')
const etcd = require('../etcd')

let cmdInvoked = false
const cmdObserver = action => {
  return (...args) => {
    console.log('args:', args)
    cmdInvoked = true
    action(...args)
  }
}
const argular = ({def, desc, args = yargs => yargs, action}) => {
  const storeInjector = options => {
    const store = etcd.getStore(options)
    return action({store, ...options})
  }

  return [def, desc, args, cmdObserver(storeInjector)]
}

const yargs = require('yargs')

function run () {
  const argv = yargs
  .env('ETCDIG')
  .option('nodes', {
    configParser: nodes => nodes.split(',').map(s => s.trim()).filter(s => s !== ''),
    description: 'List of etcd cluster nodes',
    default: 'localhost:2379'
  })
  .command(...argular(find))
  .command(...argular(grep))
  .command(...argular(ls))
  .argv

  if (!cmdInvoked) {
    yargs.showHelp()
  }

  return argv
}

run()
