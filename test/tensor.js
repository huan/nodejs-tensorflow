var should = require('chai').should();

describe('Unit testing Tensor module', function () {
  var tf = require('../index.js').default; //TODO

  describe('MArray', function () {
    /*
    it('Create simple MArray', function () {
      var marray = new tf.MArray([1, 2], [2])
      should.exist(marray);
    });
    */


    it('Iterate 2d MArray', function () {
      var arr =  [
        [ 1, 2,
          3, 4 ],

        [ 1, 2,
          3, 4 ],

        [ 3, 5,
          7, 9 ]
      ];
      var marray = new tf.MArray(arr, [3, 4]);

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

    it('Iterate 3d MArray', function () {
      var arr = [
        [
          [ 1, 2, 3 ],
          [ 11, 12, 13 ]
        ],

        [
          [ 1, 2, 3 ],
          [ 11, 12, 13 ]
        ]
      ];
      var marray = new tf.MArray(arr, [2, 2, 3]);

      marray[0].should.to.equal(1);
      marray[1].should.to.equal(2);
      marray[2].should.to.equal(3);
      marray[3].should.to.equal(11);
      marray[4].should.to.equal(12);
      marray[5].should.to.equal(13);

      marray[6].should.to.equal(1);
      marray[7].should.to.equal(2);
      marray[8].should.to.equal(3);
      marray[9].should.to.equal(11);
      marray[10].should.to.equal(12);
      marray[11].should.to.equal(13);
    });
  });

  describe('Constant', function () {
    describe('Constant([0.1, 1], [2])', function () {
      var constant = {};

      beforeEach(function () {
        constant = tf.Constant([0.1, 1], null, [2])
      });

      it('Create simple', function () {
        should.exist(constant);
      });
    });
  });
});
