import tensorflow from './build/Release/tensorflow.node';
import dtypes from './framework/dtypes';

const Tensorflow = {
  version() {
    return tensorflow.version()
  },

  dtypes: dtypes
}
export default Tensorflow
