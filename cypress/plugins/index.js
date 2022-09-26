// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // https://github.com/cypress-io/cypress-grep
  require('cypress-grep/src/plugin')(on, config)

  on('task', {
    getNumber() {
      return 42
    },
  })

  // make sure to return the config object
  // as it might have been modified by the plugin
  return config
}
