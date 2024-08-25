var assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber tests', function() {
    describe('SUM', function() {
        describe("Test addition", function() {
            it("should return the sum of two integers", function() {
                assert.equal(calculateNumber('SUM', 1, 3), 4);
            });

            it("should round the first number and sum correctly", function() {
                assert.equal(calculateNumber('SUM', 1.2, 3), 4);
            });

            it("should round the second number and sum correctly", function() {
                assert.equal(calculateNumber('SUM', 1, 3.7), 5);
            });

            it("should round both numbers and sum correctly", function() {
                assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
            });

            it("should handle negative numbers", function() {
                assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
            });

            it("should handle sum when one number is zero", function() {
                assert.equal(calculateNumber('SUM', 0, 3.7), 4);
            });

            it("should handle sum when both numbers are zero", function() {
                assert.equal(calculateNumber('SUM', 0, 0), 0);
            });

            it("should handle decimal numbers with many digits", function() {
                assert.equal(calculateNumber('SUM', 1.12312, 2.34567), 3);
            });
        });
    });

    describe('SUBTRACT', function() {
        describe("Test subtraction", function() {
            it("should return the difference of two integers", function() {
                assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
            });

            it("should round the first number and subtract correctly", function() {
                assert.equal(calculateNumber('SUBTRACT', 5.7, 3), 3);
            });

            it("should round the second number and subtract correctly", function() {
                assert.equal(calculateNumber('SUBTRACT', 5, 3.7), 1);
            });

            it("should round both numbers and subtract correctly", function() {
                assert.equal(calculateNumber('SUBTRACT', 5.7, 3.2), 3);
            });

            it("should handle negative numbers", function() {
                assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
            });

            it("should handle subtraction when one number is zero", function() {
                assert.equal(calculateNumber('SUBTRACT', 0, 3.7), -4);
            });

            it("should handle subtraction when both numbers are zero", function() {
                assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
            });

            it("should handle decimal numbers with many digits", function() {
                assert.equal(calculateNumber('SUBTRACT', 1.12312, 2.34567), -1);
            });
        });
    });

    describe('DIVIDE', function() {
        describe("Test division", function() {
            it("should return the quotient of two integers rounded to 1 decimal place", function() {
                assert.equal(calculateNumber('DIVIDE', 10, 3), 3.3);
            });
    
            it("should round the first number and divide correctly", function() {
                assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            });
    
            it("should round the second number and divide correctly", function() {
                assert.equal(calculateNumber('DIVIDE', 10, 3.7), 2.5);
            });
    
            it("should round both numbers and divide correctly", function() {
                assert.equal(calculateNumber('DIVIDE', 10.7, 2.3), 5.5);
            });
    
            it("should handle negative numbers and round to 1 decimal place", function() {
                assert.equal(calculateNumber('DIVIDE', -10.2, -2.3), 5);
            });
    
            it("should handle division by zero and return an error", function() {
                assert.equal(calculateNumber('DIVIDE', 10, 0), "Error");
            });
    
            it("should handle division when the result is zero", function() {
                assert.equal(calculateNumber('DIVIDE', 0, 5.7), 0.0);
            });
    
            it("should handle division when both numbers are zero and return an error", function() {
                assert.equal(calculateNumber('DIVIDE', 1.4, 0), "Error");
            });
        });
    });
    
});
