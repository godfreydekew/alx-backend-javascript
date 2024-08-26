const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');
const Utils = require('./utils.js');


describe('sendPaymentRequestToApi', function() {
    it('Spy  the add method', function() {
        const stub = sinon.stub(Utils, 'calculateNumber');
        const consoleSpy = sinon.spy(console, 'log');
        
        stub.withArgs('SUM', 100, 20)
            .returns(10);
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        
        consoleSpy.restore();
        stub.restore();
    })
});