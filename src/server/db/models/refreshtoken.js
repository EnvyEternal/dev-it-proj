'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RefreshToken.belongsTo(models.Admin, {
        foreignKey: {
          field: 'adminId',
        },
      });
    }
  }
  RefreshToken.init({
    adminId: {
      type: DataTypes.INTEGER,
      unique: true
    },
    refreshToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RefreshToken',
  });
  return RefreshToken;
};