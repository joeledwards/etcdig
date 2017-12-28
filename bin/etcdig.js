#!/usr/bin/env node

const {find, grep, ls} = require('../lib/commands')

let cmdInvoked = false
const cmdObserver = (action) => {
  return (...args) => {
    console.log('args:', args)
    cmdInvoked = true
    action(...args)
  }
}
const argular = ({def, desc, args = (yargs) => yargs, action}) => {
  return [def, desc, args, cmdObserver(action)]
}

const yargs = require('yargs')

yargs
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

if (!cmdInvoked)
  yargs.showHelp()

