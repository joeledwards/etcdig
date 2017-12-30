const {blue, yellow} = require('@buzuli/color')
const etcd = require('../lib/etcd')

module.exports = {
  command: 'grep <pattern>',
  desc: 'list files with content matching the pattern',
  builder,
  handler
}

function builder (yargs) {
  return yargs
  .positional('pattern', {
    describe: 'file content pattern',
    demandOption: true
  })
}

function handler ({nodes, store, pattern}) {
  const client = etcd({nodes})
  console.log(blue('grep'), yellow(pattern), ': implementation not complete')
}
