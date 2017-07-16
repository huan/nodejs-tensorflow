import * as tf_ from 'tensorflow.node';

import Tensor, {Constant, MArray} from './framework/tensor';
import TensorShape from './framework/tensorShape';
import DataType, * as dtypes from './framework/dtypes';

const Tensorflow: Object = {
  version() {
    return tf_.version()
  },

  Tensor: Tensor,
  TensorShape: TensorShape,
  Constant: Constant,
  DataType: DataType,
  MArray: MArray
}

export default Tensorflow
