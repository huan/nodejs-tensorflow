# (WIP) NodeJS Tensorflow

[![Build Status](https://travis-ci.org/nodejs-tensorflow/nodejs-tensorflow.svg?branch=master)](https://travis-ci.org/nodejs-tensorflow/nodejs-tensorflow)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Current version is based on [c_api](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/c/c_api.h)  
Next (`>=0.10.0`) should be integrated with all Tensorflow stack

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

Welcome to the project

Steps:
* Find the issue with `contributers-welcome` or create your own
* Mark as you are working on it
* Code, fun and create PR

### Slack

Connect to the [slack](https://tensor-flow-talk-invite.herokuapp.com/) and join to [#nodejs](https://tensorflowtalk.slack.com/messages/C0E9KBG95/) channel  
You can find me there as `jiojiajiu`

### RTFM

* [How to build Tensorflow](./docs/01-building_tensorflow.md)
* [How to build addon](./docs/02-building_addon.md)
* [Useful resources](./docs/03-resources.md)

