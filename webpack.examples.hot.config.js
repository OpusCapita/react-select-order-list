const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const params = {
  root: __dirname,
  buildPath: 'examples-build',
  output: {
    path: path.join(__dirname, '/examples-build'),
    filename: 'examples.js',
  },
  entry: {
    app: path.join(__dirname, '/examples/index.jsx'),
  },
};

const getBaseConfiguration = require('./webpack/base.config.js');

const plugins = [
  new HtmlWebpackPlugin({ filename: 'index.html', template: 'examples/index.html' }),
  new webpack.HotModuleReplacementPlugin(),
  new WriteFilePlugin({ log: false }),
  new ProgressBarPlugin({ clear: false }),
];

const config = merge(getBaseConfiguration(params), {
  plugins,
});

config.devServer = {
  noInfo: true,
  quiet: false,
  port: 5555,
  historyApiFallback: true,
  clientLogLevel: 'error',
  hot: true,
  stats: { colors: true },
};

module.exports = config;
