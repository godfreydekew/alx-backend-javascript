const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');




describe("Test suit for hooks", function() {
    let consoleSpy;
    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
       consoleSpy.restore();
    });

    it("Test if the console log function is printing the actual value", function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it("Test if the calculateNumber function is called with the correct parameters", function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
})