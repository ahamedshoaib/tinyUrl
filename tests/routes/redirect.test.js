const server = require('../../server');

describe('check server response code', () => {
  test('/grow should respond with status code 200', (done) => {
    server.inject({
      method: 'GET',
      url: '/shrink?url=google.com',
    }, (response) => {
      server.inject({
        method: 'GET',
        url: `/${response.payload}`,
      }, (response2) => {
        expect(response2.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe('check server response message', () => {
  test('/shrink should respond with hash', (done) => {
    server.inject({
      method: 'GET',
      url: '/shrink?url=google.com',
    }, (response) => {
      server.inject({
        method: 'GET',
        url: `/${response.payload}`,
      }, (response2) => {
        expect(response2.payload).toBe('http://google.com');
        done();
      });
    });
  });
});
