module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('urls', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    shortUrl: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    longUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('urls'),
};
