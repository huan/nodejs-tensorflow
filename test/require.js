var should = require('chai').should();

describe('Requiring nodejs-tensorflow', function () {
  var tensorflow = require('../index.js').default; //TODO

  it('Should returns right version', function () {
    tensorflow.version().should.equal('1.2.0-rc2');
  });

  it('Should create TensorShape without error', function (done) {
    try {
      var shape = new tensorflow.TensorShape();
      should.exist(shape);
      done();
    } catch (e) {
      done(e);
    }
  });
})
