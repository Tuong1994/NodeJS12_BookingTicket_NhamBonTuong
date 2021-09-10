const express = require("express");
const { authRouter } = require("./auth.router");
const { boxOfficeRouter } = require("./box-office.router");
const { cinemaRouter } = require("./cinema.router");
const { cineplexRouter } = require("./cineplex.router");
const { movieRouter } = require("./movie.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/movies", movieRouter);
rootRouter.use("/cineplexes", cineplexRouter);
rootRouter.use("/cinemas", cinemaRouter);
rootRouter.use("/box-office", boxOfficeRouter);

module.exports = {
  rootRouter,
};
