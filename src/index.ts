import * as tf_ from 'tensorflow.node';

import Operation from './framework/ops';
import Tensor, {Constant, MArray} from './framework/tensor';
import TensorShape from './framework/tensorShape';
import DataType, * as dtypes from './framework/dtypes';

const Tensorflow: Object = {
  version() {
    return tf_.version()
  },

  Constant: Constant,
  Operation: Operation,
  Tensor: Tensor,
  TensorShape: TensorShape,
  DataType: DataType,
  MArray: MArray,
}

export default Tensorflow
