#!/usr/bin/env node
const yargs = require('yargs')

function run () {
  const argv = yargs
  .env('ETCDIG')
  .option('nodes', {
    configParser: nodes => nodes.split(',').map(s => s.trim()).filter(s => s !== ''),
    description: 'List of etcd cluster nodes',
    default: 'localhost:2379'
  })
  .commandDir('../commands')
  .demandCommand()
  .argv

  return argv
}

run()
