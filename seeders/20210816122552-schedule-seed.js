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
     *
     */
    await queryInterface.bulkInsert(
      "Schedules",
      [
        {
          id: 1,
          ngayChieuGioChieu: "2021-03-08 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          ngayChieuGioChieu: "2021-03-08 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          ngayChieuGioChieu: "2021-03-08 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          ngayChieuGioChieu: "2021-03-08 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          ngayChieuGioChieu: "2019-04-22 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          ngayChieuGioChieu: "2019-04-22 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          ngayChieuGioChieu: "2019-04-22 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          ngayChieuGioChieu: "2019-04-22 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          ngayChieuGioChieu: "2021-03-26 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          ngayChieuGioChieu: "2021-03-26 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          ngayChieuGioChieu: "2021-03-26 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          ngayChieuGioChieu: "2021-03-26 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          ngayChieuGioChieu: "2021-03-27 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          ngayChieuGioChieu: "2021-03-27 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          ngayChieuGioChieu: "2021-03-27 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          ngayChieuGioChieu: "2021-03-27 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          ngayChieuGioChieu: "2021-04-01 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          ngayChieuGioChieu: "2021-04-01 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          ngayChieuGioChieu: "2021-04-01 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          ngayChieuGioChieu: "2021-08-13 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          ngayChieuGioChieu: "2021-08-13 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          ngayChieuGioChieu: "2021-04-01 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          ngayChieuGioChieu: "2021-07-22 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          ngayChieuGioChieu: "2021-07-22 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          ngayChieuGioChieu: "2011-07-07 10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          ngayChieuGioChieu: "2011-07-07 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          ngayChieuGioChieu: "2019-05-09 08:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          ngayChieuGioChieu: "2019-05-09 12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          ngayChieuGioChieu: "2022-03-04 06:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          ngayChieuGioChieu: "2022-03-04 12:00:00",
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
     await queryInterface.bulkDelete('Schedules', null, {});
  },
};
