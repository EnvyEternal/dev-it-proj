'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set(val) {
        this.setDataValue('password', bcrypt.hashSync(val, 10));
      },
    },
    role:{
      type: DataTypes.STRING,
      defaultValue: 'Moderator'
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};