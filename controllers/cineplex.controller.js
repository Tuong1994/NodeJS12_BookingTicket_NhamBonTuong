const { Cineplex, Cinema, Movie, Schedule, Theater, Chair } = require("../models");

const getCineplexList = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll({
      attributes: ["id", "tenHeThongRap", "logo"],
    });
    res.status(200).send(cineplexList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCineplexWithCinemasAndMovies = async (req, res) => {
  try {
    const cineplexWithCinema = await Cineplex.findAll({
      attributes: ["id", "tenHeThongRap", "logo"],
      include: [
        {
          model: Cinema,
          attributes: ["id", "tenCumRap", "hinhAnh", "diaChi"],
          include: [
            {
              model: Movie,
              attributes: [
                "id",
                "tenPhim",
                "biDanh",
                "trailer",
                "hinhAnh",
                "moTa",
                "ngayKhoiChieu",
                "danhGia",
                "thoiLuong"
              ],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: Schedule,
                  attributes: ["id", "ngayChieuGioChieu"],
                  through: {
                    attributes: [],
                  },
                  include: [
                    {
                      model: Theater,
                      attributes: ["id","tenRap"],
                      through: {
                        attributes: [],
                      },
                      include: [
                        {
                          model: Chair,
                          attributes: ["id","tenGhe", "loaiGhe", "giaVe"],
                          through: {
                            attributes: [],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).send(cineplexWithCinema);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCineplexList,
  getCineplexWithCinemasAndMovies,
};
