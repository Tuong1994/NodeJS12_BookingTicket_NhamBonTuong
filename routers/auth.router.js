const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const {
  checkEmailExist,
} = require("../middlewares/validations/check-exist.middleware");
const authRouter = express.Router();
const { User } = require("../models");

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", checkEmailExist(User), signUp);

module.exports = {
  authRouter,
};
