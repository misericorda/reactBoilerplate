const path = require("path");
const webpack = require('webpack');
const config = require('./webpack.base.js');

config.mode = 'development';
config.devtool = 'cheap-eval-source-map ';

module.exports = config;