import {expect} from 'chai';

import tf from '../src/index';

describe('Graph', function () {
  it('Should create Graph without error', function () {
    let graph = new tf.Graph();
    expect(graph).to.exist;
  });
})
