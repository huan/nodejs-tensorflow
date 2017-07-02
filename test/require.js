var should = require('chai').should();

describe('Requiring nodejs-tensorflow', function () {
  var tensorflow = require('../index.js');
  it('Should returns right version', function () {
    tensorflow.version().should.equal('1.2.0-rc2');
  });
})
