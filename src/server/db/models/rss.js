'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rss extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rss.init({
    creator: DataTypes.STRING,
    title: DataTypes.STRING,
    link: {
      type:DataTypes.STRING,
      unique: true,
    },
    pubDate: DataTypes.STRING,
    contentSnippet: DataTypes.STRING,
   
    categories:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rsses',
  });
  return Rss;
};