const models = require('../models');
const redis = require('../redis');

module.exports = {
  method: 'GET',
  path: '/grow',
  config: {
    cache: {
      expiresIn: 30 * 1000,
      privacy: 'private',
    },
  },
  handler: (request, response) => {
    redis.get(request.query.url, (err, reply) => {
      if (reply) {
        response(reply);
      } else {
        models.urls.findOne({ where: { shortUrl: request.query.url } }).then((urlObject) => {
          if (urlObject) {
            redis.set(request.query.url, urlObject.longUrl);
            response(urlObject.longUrl);
          } else {
            response('not found');
          }
        });
      }
    });
  },
};
