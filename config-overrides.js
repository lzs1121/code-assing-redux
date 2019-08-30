const { override, addDecoratorsLegacy } = require("customize-cra");

// override creates the plugin for webpack
module.exports = override(
  addDecoratorsLegacy() // set up the decorator
);