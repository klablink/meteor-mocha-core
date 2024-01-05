/* global Package Npm */

Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '8.3.0-beta300.0',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
})

Npm.depends({
  mocha: '10.2.0'
})

Package.onUse(function (api) {
  api.use('ecmascript@0.16.8-alpha300.11')

  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')

  api.export(['mochaInstance', 'setupGlobals'], 'server')
})
