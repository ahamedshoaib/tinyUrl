const redis = require('../redis');

const models = require('../models');

models.urls.findAll().then((result) => {
  for (let i = 0; i < result.length; i += 1) {
    redis.set(result[i].shortUrl, result[i].longUrl);
  }
  global.console.log('done');
});
