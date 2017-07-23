import * as tf_ from 'tensorflow.node';

import DataType, * as dtypes from './framework/dtypes';
import Graph from './core/graph';
import Operation from './framework/ops';
import Session from './core/session';
import Tensor, {Constant, MArray} from './framework/tensor';
import TensorShape from './framework/tensorShape';

const Tensorflow: Object = {
  version() {
    return tf_.version()
  },

  Constant: Constant,
  Graph: Graph,
  Operation: Operation,
  Session: Session,
  Tensor: Tensor,
  TensorShape: TensorShape,
  DataType: DataType,
  MArray: MArray,
}

export default Tensorflow
