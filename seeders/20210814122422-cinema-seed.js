"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cinemas",
      [
        {
          id: "BHD-3-thang-2",
          tenCumRap: "BHD 3 tháng 2",
          hinhAnh: "BHD_cinema.png",
          diaChi: "3 tháng 2 Quận 10",
          cineplexId: "BHDStar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "BHD-Nguyen-Gia-Tri",
          tenCumRap: "BHD Nguyễn Gia Trí",
          hinhAnh: "BHD_cinema.png",
          diaChi: "Nguyễn Gia Trí Quận Bình Thạnh",
          cineplexId: "BHDStar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "BHD-Hai-Trieu",
          tenCumRap: "BHD Hải Triều",
          hinhAnh: "BHD_cinema.png",
          diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
          cineplexId: "BHDStar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "CGV-Binh-Tan",
          tenCumRap: "CGV Bình Tân",
          hinhAnh: "CGV_cinema.png",
          diaChi:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân",
          cineplexId: "CGV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "CGV-Tan-Phu",
          tenCumRap: "CGV Tân Phú",
          hinhAnh: "CGV_cinema.png",
          diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
          cineplexId: "CGV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "CGV-Tan-Binh",
          tenCumRap: "CGV Tân Bình",
          hinhAnh: "CGV_cinema.png",
          diaChi: "60A Trường Sơn,P. 2, Tân Bình",
          cineplexId: "CGV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "CNS-Hai-Ba-Trung",
          tenCumRap: "CNS Hai Bà Trưng",
          hinhAnh: "CNS_cinema.png",
          diaChi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
          cineplexId: "CineStar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "CNS-Quoc-Thanh",
          tenCumRap: "CNS Quốc Thanh",
          hinhAnh: "CNS_cinema.png",
          diaChi: "271 Nguyễn Trãi, Q.1",
          cineplexId: "CineStar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "GLX-Kinh-Duong-Vuong",
          tenCumRap: "Galaxy Kinh Dương Vương",
          hinhAnh: "GLX_cinema.png",
          diaChi: "718bis Kinh Dương Vương, Q.6",
          cineplexId: "Galaxy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "GLX-Nguyen-Du",
          tenCumRap: "Galaxy Nguyễn Du",
          hinhAnh: "GLX_cinema.png",
          diaChi: "116 Nguyễn Du, Q.1",
          cineplexId: "Galaxy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
