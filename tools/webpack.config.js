var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['./index.ts'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../'),
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [{
      test: /\.proto$/,
      loader: 'pbf-loader'
    }, {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      options: {
        transpileOnly: true
      }
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  target: 'node',
  externals: [
    /tensorflow\.node$/,
    function (context, request, cb) {
      var isExternal = /^[a-z]/.test(request);
      cb(null, isExternal);
    }
  ],
  plugins: []
}
