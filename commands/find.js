const {blue, yellow} = require('@buzuli/color')
const etcd = require('../lib/etcd')

module.exports = {
  command: 'find <pattern>',
  desc: 'list files with a name matching the pattern',
  builder,
  handler
}

function builder (yargs) {
  return yargs
  .positional('pattern', {
    describe: 'file path pattern',
    demandOption: true
  })
}

function handler ({nodes, store, pattern}) {
  const client = etcd({nodes})
  console.log(blue('find'), yellow(pattern), ': implementation not complete')
}
