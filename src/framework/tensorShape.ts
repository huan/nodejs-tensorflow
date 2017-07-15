import * as _ from 'lodash'

/**
 * Built similar python [TensorShape](https://www.tensorflow.org/api_docs/python/tf/TensorShape)
 */
class TensorShape {
  private _data: TensorDimension[];

  static create(shape?: number[] | TensorShape): TensorShape {
    if (!shape) {
      return new TensorShape();
    } else if (_.isArray(shape)) {
      return new TensorShape(shape);
    }

    return shape;
  }

  /**
   * @param {Array} data
   */
  constructor(data?: number[]) {
    this._data = _.map(data || [], value => {
      return new TensorDimension(value);
    });
  }

  /**
   * Returns TensorShape as an Array
   */
  asList(): number[] {
    return _.map(this._data, dims => dims.power);
  }

  get length() {
    return this._data.length;
  }

  get dims() : TensorDimension[] {
    return this._data;
  }

  get ndims() {
    return this.length;
  }
}

class TensorDimension {
  private _power = 0;

  constructor(power?: any) {
    this._power = _.toNumber(power) || 0;
  }

  get power() {
    return this._power;
  }
}


export default TensorShape
