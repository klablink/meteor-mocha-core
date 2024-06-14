/* global Package Npm */

Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '8.3.1-rc300.1',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
})

Npm.depends({
  mocha: '10.2.0'
})

Package.onUse(function (api) {
  api.versionsFrom(['2.8.0', '3.0-rc.4'])
  api.use('ecmascript')

  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')

  api.export(['mochaInstance', 'setupGlobals'], 'server')
})
