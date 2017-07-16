var should = require('chai').should();

var matrixes = require('./matrixes.js');

describe('Unit uint8 Tensor', function () {
  var tf = require('../../index.js').default; //TODO

  describe('2D Marray', function () {
    var arr = matrixes.Array2D;
    var marray;

    beforeEach(function () {
      marray = new tf.MArray(arr, 'uint8', [3, 4]);
    });
    
    it('Iterate 2D MArray', function () {
      marray[0].should.to.equal(1);
      marray[1].should.to.equal(2);
      marray[2].should.to.equal(3);
      marray[3].should.to.equal(4);

      marray[4].should.to.equal(1);
      marray[5].should.to.equal(2);
      marray[6].should.to.equal(3);
      marray[7].should.to.equal(4);

      marray[8].should.to.equal(3);
      marray[9].should.to.equal(5);
      marray[10].should.to.equal(7);
      marray[11].should.to.equal(9);
    });

    it('Check buffer', function () {
      marray.buffer.should.be.an('arraybuffer');
      marray.buffer.byteLength.should.equal(12);
    });
  });

  describe('3D Marray', function () {
    var arr = matrixes.Array3D;
    var marray;

    beforeEach(function () {
      marray = new tf.MArray(arr, 'uint8', [2, 2, 3]);
    });

    it('Iterate 3D MArray', function () {
      marray[0].should.to.equal(1);
      marray[1].should.to.equal(2);
      marray[2].should.to.equal(3);
      marray[3].should.to.equal(11.1);
      marray[4].should.to.equal(12);
      marray[5].should.to.equal(13);

      marray[6].should.to.equal(1);
      marray[7].should.to.equal(2);
      marray[8].should.to.equal(3);
      marray[9].should.to.equal(11);
      marray[10].should.to.equal(12);
      marray[11].should.to.equal(13);
    });
    
    it('Check buffer', function () {
      marray.buffer.should.be.an('arraybuffer');
      marray.buffer.byteLength.should.equal(12);
    });
  });
});
