const express = require("express");
const {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
  uploadImage,
} = require("../controllers/movie.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/check-verify.middleware");
const { movieUpload } = require("../middlewares/upload/upload.middleware");
const {
  checkIdExist,
  checkNameExist,
} = require("../middlewares/validations/check-exist.middleware");
const { Movie } = require("../models");
const movieRouter = express.Router();

movieRouter.get("/get-movie-list", getMovieList);

movieRouter.get("/get-movie-detail/:id", checkIdExist(Movie), getMovieDetail);

movieRouter.post(
  "/create-movie",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  checkNameExist(Movie, Movie.tenPhim),
  createMovie
);

movieRouter.put(
  "/update-movie/:id",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  updateMovie
);

movieRouter.delete(
  "/remove-movie/:id",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  removeMovie
);

movieRouter.post(
  "/upload-image/:id",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  movieUpload(),
  uploadImage
);

module.exports = {
  movieRouter,
};
