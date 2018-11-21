// We need to import the "mocha.js" file specifically because that is the browser entry point.
import 'mocha/mocha.js';

// This defines "describe", "it", etc.
const options = {
  ui: 'bdd',
};

if (Meteor.settings.public["MOCHA_TIMEOUT"]) {
  options.timeout = Meteor.settings.public["MOCHA_TIMEOUT"];
}


mocha.setup(options);

export { mocha };
