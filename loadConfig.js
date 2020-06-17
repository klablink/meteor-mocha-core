import fs from 'fs';

const pwd = process.env.PWD;

let config = {};

// Attempt to load .mocharc.json
if (fs.existsSync(`${pwd}/.mocharc.json`)) {
  try {
    const configFile = fs.readFileSync(`${pwd}/.mocharc.json`);
    config = { ...config, ...JSON.parse(configFile.toString()) };
  } catch (error) {
    console.error(`Error parsing ${pwd}/.mocharc.json:\n`, error);
  }
}

// Attempt to load .mocharc.js
if (fs.existsSync(`${pwd}/.mocharc.js`)) {
  try {
    const configFile = fs.readFileSync(`${pwd}/.mocharc.js`);
    config = { ...config, ...eval(configFile.toString()) };
  } catch (error) {
    console.error(`Error parsing ${pwd}/.mocharc.js:\n`, error);
  }
}

__meteor_runtime_config__['meteortesting:mocha-core_config'] = JSON.stringify(
  config,
);

export default config;
