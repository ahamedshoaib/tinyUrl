const models = require('../models');

module.exports = {
  method: 'GET',
  path: '/{hash}',
  handler: (request, response) => {
    models.urls.findOne({ where: { shortUrl: request.params.hash } }).then((urlObject) => {
      if (urlObject) {
        response().redirect(urlObject.longUrl);
      } else {
        response('not found');
      }
    });
  },
};
