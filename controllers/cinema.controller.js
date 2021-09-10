const { Cineplex, Cinema, Movie, Theater, Schedule } = require("../models");

const getCinemaWithTheater = async (req, res) => {
  let { maHeThongRap } = req.query;
  let { id } = Cineplex;
  id = maHeThongRap;
  try {
    const cinemaWithTheater = await Cineplex.findOne({
      where: {
        id,
      },
      attributes: [],
      include: [
        {
          model: Cinema,
          attributes: ["id", "tenCumRap", "hinhAnh", "diaChi"],
          include: [
            {
              model: Theater,
              attributes: ["id", "tenRap"],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    });
    res.status(200).send(cinemaWithTheater);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getScheduleByMovieId = async (req, res) => {
  let { maPhim } = req.query;
  let { id } = Movie;
  id = maPhim;
  try {
    const scheduleDetail = await Movie.findOne({
      where: {
        id,
      },
      attributes: [
        "id",
        "tenPhim",
        "biDanh",
        "trailer",
        "hinhAnh",
        "moTa",
        "ngayKhoiChieu",
        "danhGia",
        "thoiLuong",
      ],
      include: [
        {
          model: Cineplex,
          attributes: ["tenHeThongRap", "logo"],
          through: {
            attributes: [],
          },
          include: [
            {
              model: Cinema,
              attributes: ["tenCumRap", "hinhAnh", "diaChi"],
              include: [
                {
                  model: Theater,
                  attributes: ["tenRap"],
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
                    },
                  ],
                },
              ],
            },
          ],

          //
          //     include: [
          //       {
          //         model: Theater,
          //         attributes: ["tenRap"],
          //         through: {
          //           attributes: [],
          //         },
          //         include: [
          //           {
          //             model: Schedule,
          //             attributes: ["id", "ngayChieuGioChieu"],
          //             through: {
          //               attributes: [],
          //             },
          //           },
          //         ],
          //       },
          //     ],
          //   },
          // ],
        },
      ],
    });
    res.status(200).send(scheduleDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCinemaWithTheater,
  getScheduleByMovieId,
};
