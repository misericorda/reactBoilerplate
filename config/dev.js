const commonConfig = require("./common");

module.exports = function(configDirs) {
  // Adds everything from `common.js` to a new object called prodConfig
  let config = Object.assign({}, commonConfig(configDirs));
  // Change configs here
  config.mode = "development";
  config.devtool = "cheap-eval-source-map ";

  console.log("\x1b[36m%s\x1b[0m", "Building for development ...");
  return config;
};