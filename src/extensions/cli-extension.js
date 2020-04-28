const { MENU_CONFIG } = require('../constants')

let localStorage

if (typeof localStorage === 'undefined' || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage
  localStorage = new LocalStorage('./db')
}

module.exports = toolbox => {
  toolbox.foo = () => {
    toolbox.print.info('called foo extension')
  }

  toolbox.getUser = () => JSON.parse(localStorage.getItem('user'))

  toolbox.setUser = user => localStorage.setItem('user', JSON.stringify(user))

  toolbox.showMenu = async () => {
    let user = toolbox.getUser()

    if (user) {
      await toolbox.menu.showMenu('logged-in', MENU_CONFIG)
    } else {
      await toolbox.menu.showMenu('logged-out', MENU_CONFIG)
    }
  }
}
