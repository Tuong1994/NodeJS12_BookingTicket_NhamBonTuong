const {
  Cinema,
  Movie,
  Theater,
  Chair,
  Schedule,
  User,
  sequelize,
} = require("../models");

const getBoxOfficeList = async (req, res) => {
  let { maLichChieu } = req.query;
  let { id } = Schedule;
  id = maLichChieu;
  try {
    const boxOfficeList = await Schedule.findOne({
      attributes: ["id", "ngayChieuGioChieu"],
      where: {
        id,
      },
      include: [
        {
          model: Movie,
          attributes: ["tenPhim", "hinhAnh"],
          through: {
            attributes: [],
          },
          include: [
            {
              model: Cinema,
              attributes: ["tenCumRap", "diaChi"],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: Theater,
                  attributes: ["tenRap"],
                  through: {
                    attributes: [],
                  },
                  include: [
                    {
                      model: Chair,
                      attributes: [
                        "id",
                        "tenGhe",
                        "loaiGhe",
                        "stt",
                        "daDat",
                        "giaVe",
                        "taiKhoanNguoiDat",
                      ],
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
    });
    res.status(200).send(boxOfficeList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkOut = async (req, res) => {
  const { maCumRap } = req.query;
  const { user } = req;
  const { id, danhSachVe, taiKhoan } = req.body;

  let thongTinDatVe = [];
  let details = {
    maVe: Math.floor(Math.random() * 1000),
    giaVe: "",
    ngayDat: new Date(),
    tenPhim: "",
    thoiLuongPhim: "",
    danhSachGhe: [],
  };
  try {
    const userDetail = await User.findByPk(user.id, {
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
    const cinemaDetail = await Cinema.findOne({
      where: {
        id: maCumRap,
      },
      attributes: ["id", "tenCumRap", "diaChi"],
      include: [
        {
          model: Theater,
          attributes: ["id", "tenRap"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const [results] = await sequelize.query(
      `
      select movies.tenPhim, movies.thoiLuong from schedules
      inner join movies_schedules
      on movies_schedules.schedule_id = schedules.id
      inner join movies
      on movies_schedules.movie_id = movies.id
      where schedules.id = ${id}
      `
    );

    for (let i = 0; i < danhSachVe.length; i++) {
      let bookingDetail = danhSachVe[i];
      details.giaVe = bookingDetail.giaVe;
    }
    for (let i = 0; i < results.length; i++) {
      let movieDetail = results[i];
      details.tenPhim = movieDetail.tenPhim;
      details.thoiLuongPhim = movieDetail.thoiLuong;
    }
    thongTinDatVe.push(details);
    userDetail.thongTinDatVe = thongTinDatVe;
    res.status(200).send(cinemaDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getBoxOfficeList,
  checkOut,
};
