const { getConferences } = require('../../helpers')

module.exports = {
  name: 'conferencias',
  run: async toolbox => {
    console.log(await getConferences())
    await toolbox.showMenu()
  }
}
