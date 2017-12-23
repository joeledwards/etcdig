#!/usr/bin/env node

const P = require('bluebird')
const etcd = require('etcdjs')
const argv = require('yargs')
  .env('ETCDIG')
  .option('nodes', {
    configParser: value => {
      if (!value)
        return new Error('Invalid node format')

      const nodes = value.split(',').map(s => s.trim()).map(s => s !== '')

      return (nodes.length > 0) ? nodes : new Error('Invalid node format')
    },
    description: 'List of etcd cluster nodes',
    default: 'localhost:2379'
  })
  .showHelp()
  .argv

console.log("Arguments:", argv)

const nodes = argv.nodes.split(',').map(s => s.trim()).filter(s => s !== '')
console.log("Nodes:", nodes)

const options = { json: false }
const store = P.promisifyAll(etcd(nodes, options))

/**
 * Commands:
 *
 * keys <pattern> - locate keys which match the pattern
 * paths <pattern> - locate paths which contain the pattern
 * values <pattern> - locate values match the pattern
 *
 * grok [p/path-pattern/] [v/value-pattern/] [x/extractor-pattern/]
 *
 **/

//store.mkdirAsync('/d', {prevExist: false})
P.resolve()
.then(r => {
  console.log(`r: ${JSON.stringify(r)}`)
  return store.setAsync('/d/a', '2')
})
.then(r => {
  console.log(`r: ${JSON.stringify(r)}`)
  return store.getAsync('/d')
})
.then(v => {
  console.log(`v: ${JSON.stringify(v)}`)
})
.catch(error => console.error(`Error communicating with etcd cluster:`, error))

