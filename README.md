# NodeJS Tensorflow binding

[![Build Status](https://travis-ci.org/JIoJIaJIu/nodejs-tensorflow.svg?branch=master)](https://travis-ci.org/JIoJIaJIu/nodejs-tensorflow)

## Build

### Build Tensorflow

Dependencies:
* `bazel >=v0.5.1`

Steps:
* `git submodule --init update`
* `cd third-party/tensorflow`
* `./configure`
* `bazel build //tensorflow:libtensorflow.so`

### Build addon

Dependencies:
* `node >=v6.11.0`

Steps:
* `npm i`
* `npm run build`

## RTFM

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
