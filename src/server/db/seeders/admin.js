'use strict';
const bcrypt = require('bcrypt')
const {ADMIN_PASSWORD, ADMIN_LOGIN} = require("../../constants");

module.exports = {
  async up (queryInterface, Sequelize) {
    const fields = [{
      login: ADMIN_LOGIN,
      passwordHash: bcrypt.hashSync(ADMIN_PASSWORD, 10),
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
