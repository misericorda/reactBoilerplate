const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function buildConfig(configDirs) {
  return {
    entry: configDirs.APP_DIR + "/index.js",
    output: {
      path: configDirs.BUILD_DIR,
      filename: "bundle.js",
      chunkFilename: "[name]-[hash].chunk.js",
      publicPath: ""
    },
    //These options determine how the different types of modules within a project will be treated.
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules|packages/,
          use: "babel-loader"
        },
        {
          test: /\.scss?$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "postcss-loader"},
            {loader: "sass-loader",}
          ]
        },
        {test: /\.(png|jpg)$/, loader: "url-loader?limit=8000"},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"},
        {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"}
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        // $: "jquery",
        // jQuery: "jquery",
        // "window.jQuery": "jquery",
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: configDirs.APP_DIR  + "/index.html",
        title: "React Boilerplate"
      }),
      //!DEV This plugin will cause the relative path of the module to be displayed when HMR is enabled. Suggested for use in development.
      new webpack.NamedModulesPlugin()
    ],
    //These options change how modules are resolved
    resolve: {
      //Create aliases to import or require certain modules more easily.
      // alias: {
      //   Utilities: APP_DIR + "/utilities/",
      // },

      //Tell webpack what directories should be searched when resolving modules.
      modules: [
        __dirname,
        "node_modules"
      ],

      //Automatically resolve certain extensions. This defaults to:
      extensions: [".js", ".jsx"]
    },
    devtool: process.env.NODE_ENV === "development"
      ? "cheap-module-eval-source-map"
      : undefined
  };
}

module.exports = buildConfig;
