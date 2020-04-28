module.exports = {
  name: 'login',
  run: async toolbox => {
    const askEmail = {
      type: 'input',
      name: 'email',
      message: 'correo eléctronico'
    }
    const askPassword = {
      type: 'password',
      name: 'password',
      message: 'contraseña'
    }
    const questions = [askEmail, askPassword]
    const { email, password } = await toolbox.prompt.ask(questions)

    if (!!email && !!password) {
      toolbox.setUser({ email, password })
    }

    await toolbox.showMenu()
  }
}
