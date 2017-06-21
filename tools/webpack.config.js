var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['./index'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  target: 'node',
  externals: [
    /_tensorflow\.node$/,
    function (context, request, cb) {
      var isExternal = /^[a-z]/.test(request);
      cb(null, isExternal);
    }
  ],
  plugins: []
}
