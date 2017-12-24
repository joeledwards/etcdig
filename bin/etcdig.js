#!/usr/bin/env node

const {find, grep, ls} = require('../lib/commands')

const argv = require('yargs')
  .env('ETCDIG')
  .option('nodes', {
    parseFunction: nodes => nodes.split(',').map(s => s.trim()).filter(s => s !== ''),
    description: 'List of etcd cluster nodes',
    default: 'localhost:2379'
  })
  .command(find.def, find.desc, find.func)
  .command(grep.def, grep.desc, grep.func)
  .command(ls.def, ls.desc, ls.func)
  .showHelp()
  .argv

