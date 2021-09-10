const express = require("express");
const { getBoxOfficeList, checkOut } = require("../controllers/box-office.controller");
const { authenticate } = require("../middlewares/auth/check-verify.middleware")
const boxOfficeRouter = express.Router();

boxOfficeRouter.get("/get-box-office-list", getBoxOfficeList);

boxOfficeRouter.post("/check-out", authenticate, checkOut)

module.exports = {
  boxOfficeRouter,
};
