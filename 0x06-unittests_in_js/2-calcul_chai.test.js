const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber tests', function() {
    describe('SUM', function() {
        describe("Test addition", function() {
            it("should return the sum of two integers", function() {
                expect(calculateNumber('SUM', 1, 3)).to.equal(4);
            });

            it("should round the first number and sum correctly", function() {
                expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
            });

            it("should round the second number and sum correctly", function() {
                expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
            });

            it("should round both numbers and sum correctly", function() {
                expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
            });

            it("should handle negative numbers", function() {
                expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
            });

            it("should handle sum when one number is zero", function() {
                expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
            });

            it("should handle sum when both numbers are zero", function() {
                expect(calculateNumber('SUM', 0, 0)).to.equal(0);
            });

            it("should handle decimal numbers with many digits", function() {
                expect(calculateNumber('SUM', 1.12312, 2.34567)).to.equal(3);
            });
        });
    });

    describe('SUBTRACT', function() {
        describe("Test subtraction", function() {
            it("should return the difference of two integers", function() {
                expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
            });

            it("should round the first number and subtract correctly", function() {
                expect(calculateNumber('SUBTRACT', 5.7, 3)).to.equal(3);
            });

            it("should round the second number and subtract correctly", function() {
                expect(calculateNumber('SUBTRACT', 5, 3.7)).to.equal(1);
            });

            it("should round both numbers and subtract correctly", function() {
                expect(calculateNumber('SUBTRACT', 5.7, 3.2)).to.equal(3);
            });

            it("should handle negative numbers", function() {
                expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
            });

            it("should handle subtraction when one number is zero", function() {
                expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
            });

            it("should handle subtraction when both numbers are zero", function() {
                expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
            });

            it("should handle decimal numbers with many digits", function() {
                expect(calculateNumber('SUBTRACT', 1.12312, 2.34567)).to.equal(-1);
            });
        });
    });

    describe('DIVIDE', function() {
        describe("Test division", function() {
            it("should return the quotient of two integers rounded to 1 decimal place", function() {
                expect(calculateNumber('DIVIDE', 10, 3)).to.equal(3.3);
            });
    
            it("should round the first number and divide correctly", function() {
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            });
    
            it("should round the second number and divide correctly", function() {
                expect(calculateNumber('DIVIDE', 10, 3.7)).to.equal(2.5);
            });
    
            it("should round both numbers and divide correctly", function() {
                expect(calculateNumber('DIVIDE', 10.7, 2.3)).to.equal(5.5);
            });
    
            it("should handle negative numbers and round to 1 decimal place", function() {
                expect(calculateNumber('DIVIDE', -10.2, -2.3)).to.equal(5);
            });
    
            it("should handle division by zero and return an error", function() {
                expect(calculateNumber('DIVIDE', 10, 0)).to.equal("Error");
            });
    
            it("should handle division when the result is zero", function() {
                expect(calculateNumber('DIVIDE', 0, 5.7)).to.equal(0.0);
            });
    
            it("should handle division when both numbers are zero and return an error", function() {
                expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error");
            });
        });
    });
});
