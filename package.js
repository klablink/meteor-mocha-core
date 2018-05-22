Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Fibers aware mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '1.0.2',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
});

Npm.depends({
  mocha: '5.2.0'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.5');

  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
