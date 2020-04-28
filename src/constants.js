const URLS = {
  login: 'https://m7.ucab.edu.ve/login/ldap',
  home: 'https://m7.ucab.edu.ve/'
}

const SELECTORS = {
  loginEmailInput: '#pseudonym_session_unique_id',
  loginPasswordInput: '#pseudonym_session_password',
  loginSubmitInput:
    '.ic-Form-control.ic-Form-control--login > .Button.Button--primary.Button--login',
  getCourses: '.ic-DashboardCard__header_content',
  goToCourse: course => `a[value="${course}]"`,
  goToAssignments: 'a[aria-label="Tareas del curso"]',
  goToDiscussions: 'a[aria-label="Discusiones del curso"]',
  goToConferences: '.conferences',
  getConferences: '.ig-row__layout',
  getConferenceURL: 'a[href*="/join"]',
  getConferenceTitle: '.ig-title.ellipses' // innertext
}

const MENU_CONFIG = {
  showHelp: false,
  setCache: true,
  headline: 'Menú',
  hideBack: true,
  exitLabel: '🚪 Salir ',
  backLabel: '↩️  Atrás ',
  cancelLabel: '🚪 Salir '
}

module.exports = {
  SELECTORS,
  MENU_CONFIG
}
