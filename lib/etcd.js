const P = require('bluebird')
const etcd = require('etcdjs')

const options = { json: false }
let store

getStore = options => {
  if (!store)
    store = P.promisifyAll(etcd(nodes, options))
  return store
}

module.exports = getStore

