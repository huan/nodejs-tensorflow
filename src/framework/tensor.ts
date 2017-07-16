import * as _ from 'lodash'

import * as tf_ from 'tensorflow.node'
import DataType from './dtypes'
import TensorShape from './tensorShape'

/**
 * Based on python [object](https://www.tensorflow.org/api_docs/python/tf/Tensor)
 */
class Tensor {
  private _self: object;
  private _shape: TensorShape;
  private _dtype: DataType;

  /**
   * @param {ArrayBuffer} data
   * @param {DataType} dtype
   * @param {TensorShape} shape
   */

  constructor(data: ArrayBuffer, dtype: DataType, shape: TensorShape) {
    this._dtype = dtype;
    this._shape = shape;
    this._self = new tf_.Tensor(dtype.value, shape.dims, shape.ndims, shape.length, data);
  }

  /**
   * Returns TensorShape
   */
  get shape() : TensorShape {
    return this._shape;
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
      let marr = new MArray(data, dtype, shape);
      data = marr.buffer;
      dtype = marr.dtype;
    }

    dtype = DataType.create(dtype);
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
  private _dtype: DataType;
  private _buffer: ArrayBuffer;

  constructor(data: any[], dtype: any, shape: number[] | TensorShape) {
    this._data = data;
    this._shape = TensorShape.create(shape);
    this._dtype = DataType.create(dtype);

    let length = _.reduce(this._shape.asList(), (mult, p) => mult * p, 1);
    for (let i = 0; i < length; i++) {
      this[i] = this.getValue(i);
    }
  }

  get dtype() {
    return this._dtype;
  }

  get buffer() {
    if (this._buffer)
      return this._buffer;

    let c = this._dtype.getArrayBufferView();
    let view = new c(this);
    this._buffer = view.buffer;

    return this._buffer;
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

  [Symbol.iterator] = () => {
    let self = this;
    let i = 0;
    let length = _.reduce(this._shape.asList(), (mult, p) => mult * p, 1);

    return {
      next() {
        if (i == length)
          return {done: true, value: null}

        let value = self.getValue(i);
        i++;
        return {
          done: false,
          value: value
        }
      }
    }
  }
}

export {Constant, MArray}
export default Tensor
