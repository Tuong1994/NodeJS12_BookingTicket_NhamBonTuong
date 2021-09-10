"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Movies_Schedules, Theater, Schedules_Theaters }) {
      // define association here
      this.belongsToMany(Movie, {
        through: Movies_Schedules,
        foreignKey: "schedule_id",
      });
      this.belongsToMany(Theater, {
        through: Schedules_Theaters,
        foreignKey: "schedule_id"
      })
    }
  }
  Schedule.init(
    {
      ngayChieuGioChieu: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
