import {expect} from 'chai';

import tf from '../src/index';

describe('Operations', function () {
  it('Should create Operation without error', function () {
    let op = new tf.Operation();
    expect(op).to.exist;
  });
})
