# (WIP) NodeJS Tensorflow

[![Build Status](https://travis-ci.org/nodejs-tensorflow/nodejs-tensorflow.svg?branch=master)](https://travis-ci.org/nodejs-tensorflow/nodejs-tensorflow)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Installation

```sh
npm install --save-dev https://github.com/nodejs-tensorflow/nodejs-tensorflow/releases/download/v0.0.1/nodejs-tensorflow-0.0.1.tgz
```
Supports only `linux_x64`

## Usage

```javascript
var tf = require('nodejs-tensorflow');
console.log(tf.version())
```

## Contributing

TODO

### RTFM

#### Docs
* [How to build Tensorflow](./docs/01-building_tensorflow.md)
* [How to build addon](./docs/02-building_addon.md)

#### Resources

* [N-API](https://nodejs.org/api/n-api.html)
* [Node addons](https://nodejs.org/api/addons.html)
* [V8 doc](https://v8docs.nodesource.com/)
* [V8 Guide](https://github.com/v8/v8/wiki/Embedder's%20Guide)

Useful links:
* [node-gyp projects](https://github.com/nodejs/node-gyp/wiki/%22binding.gyp%22-files-out-in-the-wild)

Links:
* [Related project](https://github.com/node-tensorflow/node-tensorflow)
* [Discussion topic](https://github.com/tensorflow/tensorflow/issues/37)
* [SWIG](https://github.com/node-tensorflow/node-tensorflow/pull/13)
