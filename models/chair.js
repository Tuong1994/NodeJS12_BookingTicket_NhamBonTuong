"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theater, Theaters_Chairs }) {
      // define association here
      this.belongsToMany(Theater, {
        through: Theaters_Chairs,
        foreignKey: "chair_id",
      });
    }
  }
  Chair.init(
    {
      tenGhe: DataTypes.STRING,
      loaiGhe: DataTypes.STRING,
      stt: DataTypes.STRING,
      daDat: DataTypes.BOOLEAN,
      giaVe: DataTypes.INTEGER,
      taiKhoanNguoiDat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Chair",
    }
  );
  return Chair;
};
