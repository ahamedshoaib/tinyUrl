const models = require('../models');
const redis = require('../redis');

module.exports = {
  method: 'GET',
  path: '/{hash}',
  handler: (request, response) => {
    redis.get(request.params.hash, (err, reply) => {
      if (reply) {
        response(reply);
      } else {
        models.urls.findOne({ where: { shortUrl: request.params.hash } }).then((urlObject) => {
          if (urlObject) {
            redis.set(request.params.hash, urlObject.longUrl);
            response().redirect(urlObject.longUrl);
          } else {
            response('not found');
          }
        });
      }
    });
  },
};
