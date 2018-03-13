const server = require('../../server');

describe('check server response code', () => {
  test('/shrink should respond with status code 200', (done) => {
    server.inject({
      method: 'GET',
      url: '/shrink?url=google.com',
    }, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('check server response message', () => {
  test('/shrink should respond with hash', (done) => {
    server.inject({
      method: 'GET',
      url: '/shrink?url=google.com',
    }, (response) => {
      expect(response.payload).toBe('c7b920');
      done();
    });
  });
});
