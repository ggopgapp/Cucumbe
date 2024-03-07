const { addFixtureFakerPlugin } = require('cypress-fixture-faker');

module.exports = (on, config) => {
  addFixtureFakerPlugin(on, config);
};
