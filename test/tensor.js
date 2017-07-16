var should = require('chai').should();

describe('Unit testing Tensor module', function () {
  var tf = require('../index.js').default; //TODO

  describe('MArray', function () {
    it('Create simple MArray', function () {
      var marray = new tf.MArray([1, 2], 'int', [2])
      should.exist(marray);
    });

  });

  describe('Constant', function () {
    describe('Constant([0.1, 1], [2])', function () {
      var constant = {};

      beforeEach(function () {
        constant = new tf.Constant([0.1, 1], 'int8', [2])
      });

      it('Create simple', function () {
        should.exist(constant);
      });
    });
  });
});
