const md5 = require('md5');

const models = require('../models');

const tryToCreate = (url, hash, start, end) => {
  const surl = hash.slice(start, end);
  return models.urls.findCreateFind({
    where: {
      shortUrl: surl,
    },
    defaults: {
      longUrl: url,
    },
  }).spread((model, created) => {
    if (!created) {
      if (model.longUrl === url) {
        return surl;
      }
      return tryToCreate(url, hash, start + 1, end + 1);
    }

    return surl;
  });
};

module.exports = {
  method: 'GET',
  path: '/shrink',
  handler: (request, response) => {
    let { url } = request.query;
    if (!url.startsWith('http')) {
      url = `http://${url}`;
    }
    const hash = md5(url);
    tryToCreate(url, hash, 0, 6).then((surl) => {
      response(surl);
    });
  },
};
