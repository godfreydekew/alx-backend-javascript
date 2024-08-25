var assert = require('assert');
const calculateNumber = require('./0-calcul.js')

describe("Test addtion", function() {
    it("should return the sum of two numbers", function() {
      assert.equal(calculateNumber(1, 3), 4);
    });

    it("should round the sum to the nearest integer", function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });

    it("should round sum to the nearest integer", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });  

    it("should handle negative numbers", function() {
      assert.equal(calculateNumber(-1, -3), -4);
    });

    it("should handle zero", function() {
      assert.equal(calculateNumber(0, 0.3), 0);
    });

    it("should handle decimal numbers", function() {
          assert.equal(calculateNumber(1.12312, 2.3), 3);
    });

});