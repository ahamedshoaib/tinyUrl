module.exports = {
  method: 'GET',
  path: '/ping',
  config: {
    cache: {
      expiresIn: 30 * 1000,
      privacy: 'private',
    },
  },
  handler: (request, response) => {
    response('pong');
  },
};
