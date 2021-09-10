'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules_Theaters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedules_Theaters.init({
    schedule_id: DataTypes.INTEGER,
    theater_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedules_Theaters',
  });
  return Schedules_Theaters;
};