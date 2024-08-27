const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct payment methods for numeric ID', (done) => {
    const id = 12;
    request.get(`${API_URL}/cart/${id}`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('GET /cart/:id returns 404 for non-numeric ID', (done) => {
    const str_id = "gode";
    request.get(`${API_URL}/cart/${str_id}`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(JSON.stringify({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          }));
        expect(res.headers['content-type']).to.include('application/json');
        done();
      });
  });
});
