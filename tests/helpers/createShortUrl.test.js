const models = require('../../models');
const createShortUrl = require('../../helpers/createShortUrl');

describe('create new short urls without conflicts', () => {
  beforeAll((done) => {
    models.urls.truncate().then(() => { done(); });
  });
  test('create new entry for "www.abcd.com"', () => expect(createShortUrl('www.abcd.com', 'abc123def456...', 0, 6)).resolves.toBe('abc123'));
  test('create new entry for "www.wxyz.com"', () => expect(createShortUrl('www.wxyz.com', 'def456xyz789...', 0, 6)).resolves.toBe('def456'));
});

describe('return same short url if existing long url is given', () => {
  beforeAll((done) => {
    models.urls.truncate().then(() => { done(); });
  });
  test('create new entry for "www.abcd.com"', () => expect(createShortUrl('www.abcd.com', 'abc123def456...', 0, 6)).resolves.toBe('abc123'));
  test('return existing short url of "www.abcd.com"', () => expect(createShortUrl('www.abcd.com', 'abc123def456...', 0, 6)).resolves.toBe('abc123'));
});

describe('return differnt substr of hash if conflict in short url occurs', () => {
  beforeAll((done) => {
    models.urls.truncate().then(() => { done(); });
  });
  test('create new entry for "www.abcd.com"', () => expect(createShortUrl('www.abcd.com', 'abc123def456...', 0, 6)).resolves.toBe('abc123'));
  test('create new entry for "www.pqrs.com" when there is a conflict of short urls', () => expect(createShortUrl('www.pqrs.com', 'abc123xyz789...', 0, 6)).resolves.toBe('bc123x'));
});
