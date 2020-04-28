module.exports = {
  name: 'logout',
  run: async toolbox => {
    toolbox.setUser(null)

    await toolbox.showMenu()
  }
}
