const {blue, yellow} = require('@buzuli/color')

function listDir ({store, pattern}) {
  // TODO: perform glob matching on etcd directory paths
  //       will need to walk the directory structure looking for the pattern
  // store.getAsync('/')
  // .then(v => console.log(`v: ${JSON.stringify(v)}`))
  // .catch(error => console.error(`Error communicating with etcd cluster:`, error))
  console.log(blue('ls'), yellow(pattern), ': implementation not complete')
}

module.exports = {
  def: 'ls <pattern>',
  desc: 'list the content of directories matching the pattern',
  args: (yargs) => yargs.positional('pattern', {
    describe: 'path pattern',
    demandOption: true
  }),
  action: listDir
}
