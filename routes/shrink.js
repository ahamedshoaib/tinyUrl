const md5 = require('md5');

const createShortUrl = require('../helpers/createShortUrl');

module.exports = {
  method: 'GET',
  path: '/shrink',
  handler: (request, response) => {
    let { url } = request.query;
    if (!url.startsWith('http')) {
      url = `http://${url}`;
    }
    const hash = md5(url);
    createShortUrl(url, hash, 0, 6).then((surl) => {
      response(surl);
    });
  },
};
