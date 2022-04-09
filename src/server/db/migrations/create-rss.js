'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rsses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creator: {
        type: Sequelize.STRING(1000),
      },
      title: {
        type: Sequelize.STRING(1000),
      },
      link:{
        type: Sequelize.STRING(1000),
        unique: true,
      },
      pubDate: {
        type: Sequelize.STRING(1000)
      },
      contentSnippet: {
        type: Sequelize.STRING(1000),
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      img: {
        type: Sequelize.STRING(1000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rsses');
  }
};