const md5 = require('md5');

const millionUrls = [];

for (let i = 0; millionUrls.length < 1000000; i += 1) {
  const url = `looooooooooooooooooooooooooooooooooooooooooooooooooooongurl${i}`;
  const surl = md5(url).slice(0, 6).toString();

  if (!millionUrls[surl] && isNaN(surl)) {
    // console.log('in');
    millionUrls[surl] = url;

    millionUrls.push({
      longUrl: url,
      shortUrl: surl,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

console.log(millionUrls.length);

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('urls', millionUrls, {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('urls', null, {}),
};
