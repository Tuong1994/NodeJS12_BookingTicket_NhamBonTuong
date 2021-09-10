'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cineplexes_Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cineplexes_Movies.init({
    cineplex_id: DataTypes.STRING,
    movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cineplexes_Movies',
  });
  return Cineplexes_Movies;
};