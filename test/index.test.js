const request = require('supertest');
const app = require('../index.js');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    return request(app).get('/')
      .expect(200);
    done.end();
  });

  test('It should response API request', () => {
    return request(app).get('/api/offers')
      .then(response => {
      console.log(response)
        expect(response.body.offers).toBeDefined();
      });
  });
})
