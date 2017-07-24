import {expect} from 'chai';

import tf from '../src/index';

describe('Sessions', function () {
  it('Should create Session without error', function () {
    let session = new tf.Session();
    expect(session).to.exist;
  });
})
