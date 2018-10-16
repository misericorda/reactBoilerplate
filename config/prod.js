const webpack = require("webpack");
const commonConfig = require("./common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function(configDirs) {
  // Adds everything from `common.js` to a new object called prodConfig
  let config = Object.assign({}, commonConfig(configDirs));

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
        "BABEL_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // new BundleAnalyzerPlugin()
  ]);
  config.stats = {
    all: false,
    errors: true,
    errorDetails: true,
    assets: true,
    builtAt: true,
    chunkModules: true
  };
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin()
    ]
  };

  console.log("\x1b[36m%s\x1b[0m", "Building for production ...");
  return config;
};