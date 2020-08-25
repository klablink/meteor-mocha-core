Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Fibers aware mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '8.1.2',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
});

Npm.depends({
  mocha: '8.1.2'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.6');

  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
