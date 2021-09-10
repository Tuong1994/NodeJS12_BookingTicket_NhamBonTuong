const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const { email, matKhau } = req.body;
  try {
    const userLogin = await User.findOne({
      where: {
        email,
      },
    });
    if (userLogin) {
      const isAuth = bcryptjs.compareSync(matKhau, userLogin.matKhau);
      if (isAuth) {
        const payload = {
          id: userLogin.id,
          email: userLogin.email,
          soDT: userLogin.soDT,
          tuoi: userLogin.tuoi,
          loaiNguoiDung: userLogin.loaiNguoiDung,
        };
        const secretKey = "prophet456";
        const token = jwt.sign(payload, secretKey, {
          expiresIn: 30 * 24 * 60 * 60,
        });
        res.status(200).send({
          message: "Đăng nhập thành công",
          token,
        });
      } else {
        res.status(404).send("Mật khẩu không đúng");
      }
    } else {
      res.status(404).send(`Email ${email} không tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  const { hoTen, email, matKhau, soDT, tuoi } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);
    const signUp = await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      tuoi,
      loaiNguoiDung: "CLIENT",
    });
    res.status(200).send({
      message: "Đăng ký thành công",
      signUp,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
