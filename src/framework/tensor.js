import tf_ from './build/Release/tensorflow.node'
import {DataType as dtypes} from './dtypes';

class Tensor {
  /**
   * @param {ArrayBuffer} data
   * @param {DataType} dtype
   * @param {Number} dims
   * @param {Number} numDims
   * @param {Number} length
   */

  constructor(data, dtype, dims, numDims, length) {
    if (!dtype)
      dtype = dtypes.DT_INVALID;

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

    this._self = new tf_.Tensor(dtype.value, dims, numDims, length);
  }

  toString() {
  }
}


export default Tensor
