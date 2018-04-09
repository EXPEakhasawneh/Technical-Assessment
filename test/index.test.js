const request = require('supertest');
const app = require('../index.js');
app.listen(3000, () => {
  console.log(`Server works on: 3000`);
});

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    return request(app).get('/')
      .expect(200, done);
  });

  test('It should response API request', () => {
    return request(app).get('/api/offers')
      .then(response => {
        expect(response.body.offers).toBeDefined();
      });
  });
})
