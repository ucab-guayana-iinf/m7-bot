const { login } = require('../')

const getConferences = async () => {
  const { session, browser } = await login()
  const conferences = []
  // go to conferences
  // get conferences
  return conferences
}

module.exports = { getConferences }
