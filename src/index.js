import tf_ from './build/Release/tensorflow.node';

import Tensor, {Constant} from './framework/tensor';
import DataType, * as dtypes from './framework/dtypes';

const Tensorflow = {
  version() {
    return tf_.version()
  },

  Tensor: Tensor,
  TensorShape: tf_.TensorShape,
  Constant: Constant,
  DataType: DataType,
}

for (let i in dtypes) {
  Tensorflow[i] = dtypes[i];
}

export default Tensorflow
