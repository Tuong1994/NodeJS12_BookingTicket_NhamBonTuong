const express = require("express");
const {
  getCineplexList,
  getCineplexWithCinemasAndMovies,
} = require("../controllers/cineplex.controller");
const cineplexRouter = express.Router();

cineplexRouter.get("/get-cineplex-list", getCineplexList);

cineplexRouter.get("/get-cineplex-with-cinema-and-movie", getCineplexWithCinemasAndMovies);

module.exports = {
  cineplexRouter,
};
