const Hapi = require('hapi');
const Routes = require('./routes');
const Good = require('good');

const server = new Hapi.Server();
server.connection({
  port: 8085,
  host: 'localhost',
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
});

server.route(Routes);

if (!module.parent) {
  server.start(() => {
    global.console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
