module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    shortUrl: DataTypes.STRING,
    longUrl: DataTypes.STRING,
  });
  return urls;
};
