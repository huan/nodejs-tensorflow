import tf_ from './build/Release/tensorflow.node';

import Tensor from './framework/tensor';
import {DataType as dtypes} from './framework/dtypes';

const Tensorflow = {
  version() {
    return tf_.version()
  },

  Tensor: Tensor,
  TensorShape: tf_.TensorShape,
  dtypes: dtypes
}
export default Tensorflow
