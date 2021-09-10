const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const getUserList = async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: [
        "id",
        "hoTen",
        "email",
        "soDT",
        "tuoi",
        "loaiNguoiDung",
        "avatar",
        "thongTinDatVe",
      ],
    });
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetail = await User.findByPk(id, {
      attributes: [
        "id",
        "hoTen",
        "email",
        "soDT",
        "tuoi",
        "loaiNguoiDung",
        "avatar",
      ],
    });
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const { hoTen, email, matKhau, soDT, tuoi, loaiNguoiDung } = req.body;
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(matKhau, salt);
    const newUser = await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      tuoi,
      loaiNguoiDung,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { hoTen, email, soDT, tuoi, loaiNguoiDung } = req.body;
  try {
    await User.update(
      { hoTen, email, soDT, tuoi, loaiNguoiDung },
      {
        where: { id },
      }
    );
    res.status(200).send(`Người dùng id ${id} đã được update thành công`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(`User's id ${id} được xóa thành công`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file, user } = req;
  const urlImage = `http://localhost:4000/${file.path}`;
  try {
    const userUpload = await User.findByPk(user.id, {
      attributes: [
        "id",
        "hoTen",
        "email",
        "soDT",
        "tuoi",
        "loaiNguoiDung",
        "avatar"
      ],
    });
    userUpload.avatar = urlImage;
    await userUpload.save();
    res.status(200).send(userUpload);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
  uploadAvatar,
};
