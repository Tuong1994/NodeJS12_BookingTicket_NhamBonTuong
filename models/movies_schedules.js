'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies_Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movies_Schedules.init({
    movie_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movies_Schedules',
  });
  return Movies_Schedules;
};