const redis = require('redis');

const redisClient = redis.createClient({ host: 'localhost', port: 6379 });

redisClient.on('ready', () => {
  console.log('Redis is ready');
});

module.exports = redisClient;
