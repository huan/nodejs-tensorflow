import tf_ from './build/Release/tensorflow.node';
import dtypes from './framework/dtypes';

const Tensorflow = {
  version() {
    return tf_.version()
  },

  Tensor: tf_.Tensor,

  //dtypes: dtypes
}
export default Tensorflow
