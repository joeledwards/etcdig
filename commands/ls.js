const {blue, yellow} = require('@buzuli/color')
const etcd = require('../lib/etcd')

module.exports = {
  def: 'ls <pattern>',
  desc: 'list the content of directories matching the pattern',
  builder,
  handler
}

function builder (yargs) {
  return yargs
  .positional('pattern', {
    describe: 'path pattern',
    demandOption: true
  })
}

function handler ({nodes, store, pattern}) {
  const client = etcd({nodes})
  // TODO: perform glob matching on etcd directory paths
  //       will need to walk the directory structure looking for the pattern
  // store.getAsync('/')
  // .then(v => console.log(`v: ${JSON.stringify(v)}`))
  // .catch(error => console.error(`Error communicating with etcd cluster:`, error))
  console.log(blue('ls'), yellow(pattern), ': implementation not complete')
}
