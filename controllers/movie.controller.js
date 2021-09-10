const { Movie } = require("../models");

const getMovieList = async (req, res) => {
  try {
    const movieList = await Movie.findAll({
      attributes: [
        "id",
        "tenPhim",
        "biDanh",
        "trailer",
        "hinhAnh",
        "moTa",
        "ngayKhoiChieu",
        "danhGia",
      ],
    });
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await Movie.findByPk(id, {
      attributes: [
        "id",
        "tenPhim",
        "biDanh",
        "trailer",
        "hinhAnh",
        "moTa",
        "ngayKhoiChieu",
        "danhGia",
      ],
    });
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovie = async (req, res) => {
  const { tenPhim, biDanh, trailer, moTa, ngayKhoiChieu, danhGia } = req.body;
  try {
    const newMovie = await Movie.create({
      tenPhim,
      biDanh,
      trailer,
      moTa,
      ngayKhoiChieu,
      danhGia,
    });
    res.status(200).send({
      message: "Phim được thêm thành công",
      newMovie,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { tenPhim, trailer, moTa, ngayKhoiChieu, danhGia } = req.body;
  try {
    await Movie.update(
      { tenPhim, trailer, moTa, ngayKhoiChieu, danhGia },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send(`Mã phim ${id} được update thành công`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(`Mã phim ${id} đã được xóa thành công`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadImage = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const urlImage = `http://localhost:4000/${file.path}`;
  try {
    const movieDetail = await Movie.findByPk(id, {
      attributes: [
        "id",
        "tenPhim",
        "biDanh",
        "trailer",
        "hinhAnh",
        "moTa",
        "ngayKhoiChieu",
        "danhGia",
      ],
    });
    movieDetail.hinhAnh = urlImage;
    await movieDetail.save();
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
  uploadImage,
};
