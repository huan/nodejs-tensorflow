import * as tf_ from 'tensorflow.node';

/**
 * Based on python [object](https://www.tensorflow.org/api_docs/python/tf/Session)
 */
class Session {
  private _self: object;

  constructor() {
    this._self = new tf_.Session();
  }
}

export default Session
