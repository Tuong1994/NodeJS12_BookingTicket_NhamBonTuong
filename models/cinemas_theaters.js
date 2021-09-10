'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinemas_Theaters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cinemas_Theaters.init({
    cinema_id: DataTypes.STRING,
    theater_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cinemas_Theaters',
  });
  return Cinemas_Theaters;
};