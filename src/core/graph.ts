import * as tf_ from 'tensorflow.node';

/**
 * Based on python [object](https://www.tensorflow.org/api_docs/python/tf/Graph)
 */
class Graph {
  private _self: object;

  constructor() {
    this._self = new tf_.Graph();
  }
}

export default Graph
