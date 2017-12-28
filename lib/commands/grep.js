const {blue, yellow} = require('@buzuli/color')
const etcd = require('../etcd')

function grep({pattern}) {
  console.log(blue('grep'), yellow(pattern), ': implementation not complete')
}

module.exports = {
  def: 'grep <pattern>',
  desc: 'list files with content matching the pattern',
  args: (yargs) => yargs.positional('pattern', {
    describe: 'file content pattern',
    demandOption: true
  }),
  action: grep
}
