/* global Package Npm */

Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '8.2.1',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
})

Npm.depends({
  mocha: '10.2.0',
  'mocha-junit-reporter': '2.2.1'
})

Package.onUse(function (api) {
  api.versionsFrom(['2.8.0', '3.0'])
  api.use('ecmascript')

  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')

  api.export(['mochaInstance', 'setupGlobals'], 'server')
})
