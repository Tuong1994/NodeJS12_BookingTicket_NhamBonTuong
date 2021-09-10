const express = require("express");
const {
  getCinemaWithTheater,
  getScheduleByMovieId,
} = require("../controllers/cinema.controller");
const cinemaRouter = express.Router();

cinemaRouter.get("/get-cinema-with-theater", getCinemaWithTheater);

cinemaRouter.get("/get-schedule-by-movieId", getScheduleByMovieId);

module.exports = {
  cinemaRouter,
};
