"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Cineplex,
      Movie,
      Cinemas_Movies,
      Theater,
      Cinemas_Theaters,
    }) {
      // define association here
      this.belongsTo(Cineplex, {
        foreignKey: "cineplexId",
      });
      this.belongsToMany(Movie, {
        through: Cinemas_Movies,
        foreignKey: "cinema_id",
      });
      this.belongsToMany(Theater, {
        through: Cinemas_Theaters,
        foreignKey: "cinema_id",
      });
    }
  }
  Cinema.init(
    {
      tenCumRap: DataTypes.STRING,
      hinhAnh: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      cineplexId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
