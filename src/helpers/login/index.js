const {
  launchBrowser,
  waitForNavigation,
  click,
  type
} = require('puppeteer-utilz')
const { URLS, SELECTORS } = require('../../constants')

const login = async ({ email, password }) => {
  const { browser, session } = await launchBrowser()

  await waitForNavigation()

  await type({})

  await type({})

  await click({})

  await waitForNavigation()

  return { browser, session }
}

module.exports = { login }
