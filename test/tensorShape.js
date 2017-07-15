var should = require('chai').should();

describe('Unit testing TensorShape module', function () {
  var tf = require('../index.js').default; //TODO

  describe('Test simple TensorShape [1, 1]', function () {
    var shape;
    var data = [1, 1];

    beforeEach(function () {
      shape = new tf.TensorShape(data)
    })

    it('Create', function () {
      should.exist(shape);
    });

    it('Check asList', function () {
      shape.asList().should.to.be.an('array');
      shape.asList().should.to.deep.equal(data);
    });

    it('Check length', function () {
      shape.length.should.to.equal(2);
    });
  });

  describe('Test TensorShape as [3, 5, null, undefined, 10]', function () {
    var shape;
    var data = [3, 5, null, undefined, 10];

    beforeEach(function () {
      shape = new tf.TensorShape(data)
    })

    it('Create', function () {
      should.exist(shape);
    });

    it('Check asList', function () {
      shape.asList().should.to.be.an('array');
      shape.asList().should.to.deep.equal([3, 5, 0, 0, 10]);
    });

    it('Check length', function () {
      shape.length.should.to.equal(5);
    });
  });
});
