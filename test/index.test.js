const request = require('supertest');
const app = require('../index.js');
app.listen(5000);

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should response API request', () => {
    return request(app).get('/api/offers')
      .then(response => {
        expect(response.body.offers).toBeDefined();
      });
  });
})
