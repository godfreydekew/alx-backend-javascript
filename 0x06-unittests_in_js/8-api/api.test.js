const app = require('./api.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const port = 7865;
chai.use(chaiHttp);

let server;
describe("Testing API calls", function() {
    before((done) => {
        server = app.listen(port, () => {
            console.log(`API available on localhost port ${port}`);
            done();
          });        
    });
    after((done) => {
        server.close(() => {
            done();
        });
    });
    it("Testing get request", function(done) {
        chai.request(app)
            .get('/') 
            .end((err, res) => { 
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});
