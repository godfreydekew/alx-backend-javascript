const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const Utils = require('./utils.js');


describe('sendPaymentRequestToApi', function() {
    it('Spy  the add method', function() {
        var spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;
        expect(spy.args[0][1]).to.be.equal(100);
        expect(spy.args[0][2]).to.be.equal(20);
        expect(spy.args[0][0]).to.be.equal('SUM');
        expect(spy.callCount).to.be.equal(1);
        spy.restore();
    })
});