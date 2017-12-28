const {blue, yellow} = require('@buzuli/color')
const etcd = require('../etcd')

function listDir({pattern}) {
  // TODO: perform glob matching on etcd directory paths

  /*
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
  */

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
