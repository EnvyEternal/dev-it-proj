'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const fields = [{
      login: 'admin',
      passwordHash: bcrypt.hashSync('admin', 10),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }];
      return queryInterface.bulkInsert('Admins', fields, {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
