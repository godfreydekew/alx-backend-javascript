const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require("chai");
const expect = chai.expect;

describe("Test the promise", function() {
    it("Promise test case", function(done) {
        getPaymentTokenFromAPI(true).then(function(result) {
            expect(result.data).to.equal('Successful response from the API');
            done();
        });
    });
});