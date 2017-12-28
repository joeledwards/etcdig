const {blue, yellow} = require('@buzuli/color')

function find ({store, pattern}) {
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
