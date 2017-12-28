const {blue, yellow} = require('@buzuli/color')
const etcd = require('../etcd')

function find({pattern}) {
  console.log('args:', args)
  console.log(blue('find'), yellow(pattern), ': implementation not complete')
}

module.exports = {
  def: 'find <pattern>',
  desc: 'list files with a name matching the pattern',
  args: (yargs) => yargs.positional('pattern', {
    describe: 'file path pattern',
    demandOption: true
  }),
  action: find
}
