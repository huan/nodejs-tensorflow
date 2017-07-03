import tf_ from './build/Release/tensorflow.node';
import dtypes from './framework/dtypes';

const Tensorflow = {
  version() {
    return tf_.version()
  },

  Tensor: tf_.Tensor,
  TensorShape: tf_.TensorShape

  //dtypes: dtypes
}
export default Tensorflow
