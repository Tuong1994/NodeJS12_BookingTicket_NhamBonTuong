const express = require("express");
const {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
  uploadAvatar,
} = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middlewares/auth/check-verify.middleware");
const { userUpload } = require("../middlewares/upload/upload.middleware");
const {
  checkIdExist,
  checkEmailExist,
} = require("../middlewares/validations/check-exist.middleware");
const { User } = require("../models");
const userRouter = express.Router();

userRouter.get("/get-user-list", getUserList);

userRouter.get("/get-user-detail/:id", checkIdExist(User), getUserDetail);

userRouter.post(
  "/create-user",
  checkEmailExist(User),
  createUser
);

userRouter.put(
  "/update-user/:id",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  checkIdExist(User),
  updateUser
);

userRouter.delete(
  "/remove-user/:id",
  authenticate,
  authorize(["SUPER ADMIN", "ADMIN"]),
  checkIdExist(User),
  removeUser
);

userRouter.post("/upload-avatar", authenticate, userUpload(), uploadAvatar)

module.exports = {
  userRouter,
};
