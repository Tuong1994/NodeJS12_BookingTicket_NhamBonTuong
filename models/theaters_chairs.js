'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theaters_Chairs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Theaters_Chairs.init({
    theater_id: DataTypes.INTEGER,
    chair_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Theaters_Chairs',
  });
  return Theaters_Chairs;
};