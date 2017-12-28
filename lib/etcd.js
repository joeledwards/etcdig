const P = require('bluebird')
const etcd = require('etcdjs')

const options = { json: false }
let store

function getStore ({nodes}) {
  if (!store) {
    store = P.promisifyAll(etcd(nodes, options))
  }

  return store
}

module.exports = getStore
