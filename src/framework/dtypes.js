import {DataType as proto} from '../../third-party/tensorflow/tensorflow/core/framework/types.proto';
console.log(proto);

class DataType {
  constructor(alias) {
    switch (alias && alias.toLowerCase()) {
      case 'float':
        this._value = proto.DT_FLOAT.value;
        break;
      case 'double':
        this._value = proto.DT_DOUBLE.value;
        break;
      case 'int8':
        this._value = proto.DT_INT8.value;
        break;
      case 'int16':
        this._value = proto.DT_INT16.value;
        break;
      case 'int32':
        this._value = proto.DT_INT32.value;
        break;
      case 'int64':
        this._value = proto.DT_INT64.value;
        break;
      case 'uint8':
        this._value = proto.DT_UINT8.value;
        break;
      case 'uint16':
        this._value = proto.DT_UINT16.value;
        break;
      default:
        this._value = proto.DT_INVALID.value;
    }

    this._alias = alias;
  }

  getValue() {
    this._value;
  }
}

export const FLOAT = new DataType('float');
export const DOUBLE = new DataType('double');

export const INT8 = new DataType('int8');
export const INT16 = new DataType('int16');
export const INT32 = new DataType('int32');
export const INT64 = new DataType('int64');

export const UINT8 = new DataType('uint8');
export const UINT16 = new DataType('uint16');

export const STRING = new DataType('string');

export default DataType
