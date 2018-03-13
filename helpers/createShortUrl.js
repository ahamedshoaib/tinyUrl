const models = require('../models');
const redis = require('../redis');

const createShortUrl = (url, hash, start, end) => {
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
      return createShortUrl(url, hash, start + 1, end + 1);
    }
    redis.set(surl, url);

    return surl;
  });
};

module.exports = createShortUrl;
