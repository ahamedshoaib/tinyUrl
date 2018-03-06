const models = require('../models');

module.exports = {
  method: 'GET',
  path: '/grow',
  handler: (request, response) => {
    models.urls.findOne({ where: { shortUrl: request.query.url } }).then((urlObject) => {
      if (urlObject) {
        response(urlObject.longUrl);
      } else {
        response('not found');
      }
    });
  },
};
