import * as _ from 'lodash'

import * as tf_ from './build/Release/tensorflow.node'
import DataType from './dtypes'
import TensorShape from './tensorShape'

/**
 * Based on python [object](https://www.tensorflow.org/api_docs/python/tf/Tensor)
 */
class Tensor {
  private _self: object;
  private _shape: TensorShape;

  /**
   * @param {ArrayBuffer|MArray} data
   * @param {DataType} dtype
   * @param {TensorShape} shape
   */

  constructor(data: ArrayBuffer | MArray, dtype: string | DataType, shape: TensorShape) {
    if (!(dtype instanceof DataType))
      dtype = new DataType(dtype);

    this._shape = shape;
    this._self = new tf_.Tensor(dtype.getValue(), shape.dims, shape.ndims, shape.length);
  }
}

/**
 * Create constant tensor
 * @param {any} data, required
 * @param {DataType} dtype, required
 * @param {TensorShape} shape, required
 * @param {String} name
 */
class Constant extends Tensor {
  constructor(data: any, dtype: string | DataType, shape: TensorShape | number[]) {
    shape = TensorShape.create(shape);

    if (data instanceof Tensor) {
      // TODO: not implemented
      data = new ArrayBuffer(1);
    } else if (!(data instanceof MArray)) {
      data = new MArray(data, shape);
    }
    super(data, dtype, shape);
  }
}

/**
 * Support class for iterating multi-dim array
 */
class MArray {
  [index: number] : any;

  private _data: any[];
  private _shape: TensorShape;

  constructor(data: any[], shape: number[] | TensorShape) {
    this._data = data;
    this._shape = TensorShape.create(shape);

    let length = _.reduce(this._shape.asList(), (mult, p) => mult * p, 1);
    for (let i = 0; i < length; i++) {
      this[i] = this.getValue(i);
    }
  }

  private getValue(index: number): any {
    let pws = this._shape.asList();
    let data = this._data;
    _.forEach(pws, (power, i) => {
      // * cardinality of every array = how many instances maximum it can contains
      var card = _.reduce(pws.slice(i + 1), (mult, p) => mult * p, 1);
      var outerIndex = Math.floor(index / card);

      data = data[outerIndex];
      index = index - (outerIndex * card);
    })
    return  data;
  }
}

export {Constant, MArray}
export default Tensor
