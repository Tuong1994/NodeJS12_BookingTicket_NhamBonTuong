"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Cinema,
      Cinemas_Theaters,
      Schedule,
      Schedules_Theaters,
      Chair,
      Theaters_Chairs,
    }) {
      // define association here
      this.belongsToMany(Cinema, {
        through: Cinemas_Theaters,
        foreignKey: "theater_id",
      });
      this.belongsToMany(Schedule, {
        through: Schedules_Theaters,
        foreignKey: "theater_id",
      });
      this.belongsToMany(Chair, {
        through: Theaters_Chairs,
        foreignKey: "theater_id",
      });
    }
  }
  Theater.init(
    {
      tenRap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theater",
    }
  );
  return Theater;
};
