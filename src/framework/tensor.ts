import * as tf_ from './build/Release/tensorflow.node'
import DataType from './dtypes';

class Tensor {
  _self: Object;

  /**
   * @param {ArrayBuffer} data
   * @param {DataType} dtype
   * @param {Number} dims
   * @param {Number} numDims
   * @param {Number} length
   */

  constructor(data: any, dtype: any, dims?: any, numDims?: number, length?: number) {
    if (!dtype)
      dtype = new DataType();

    if (!dims) {
      if (data) {
      } else {
        dims = 0;
      }
    }

    if (!numDims) {
      if (data) {
      } else {
        numDims = 0;
      }
    }

    if (!length) {
      if (data) {
      } else {
        length = 0;
      }
    }

    this._self = new tf_.Tensor(dtype.getValue(), dims, numDims, length);
  }

  toString() {
  }
}

/**
 * Create constant tensor
 * @param {Array|ArrayBuffer} data
 * @param {DataType} dtype
 */
class Constant extends Tensor {
  constructor(data: any, dtype: any) {

    super(data, dtype);
  }
}


export {Constant}
export default Tensor
