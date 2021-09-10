"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Cinema,
      Cinemas_Movies,
      Schedule,
      Movies_Schedules,
      Cineplex,
      Cineplexes_Movies
    }) {
      // define association here
      this.belongsToMany(Cinema, {
        through: Cinemas_Movies,
        foreignKey: "movie_id",
      });
      this.belongsToMany(Schedule, {
        through: Movies_Schedules,
        foreignKey: "movie_id",
      });
      this.belongsToMany(Cineplex, {
        through: Cineplexes_Movies,
        foreignKey: "movie_id",
      });
    }
  }
  Movie.init(
    {
      tenPhim: DataTypes.STRING,
      biDanh: DataTypes.STRING,
      trailer: DataTypes.STRING,
      hinhAnh: DataTypes.STRING,
      moTa: DataTypes.STRING,
      ngayKhoiChieu: DataTypes.DATE,
      danhGia: DataTypes.STRING,
      thoiLuong: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
