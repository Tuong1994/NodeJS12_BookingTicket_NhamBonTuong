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
      "Cinemas_Theaters",
      [
        {
          id: 1,
          cinema_id: "BHD-3-thang-2",
          theater_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          cinema_id: "BHD-3-thang-2",
          theater_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          cinema_id: "BHD-Nguyen-Gia-Tri",
          theater_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          cinema_id: "BHD-Nguyen-Gia-Tri",
          theater_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          cinema_id: "BHD-Hai-Trieu",
          theater_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          cinema_id: "BHD-Hai-Trieu",
          theater_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          cinema_id: "CGV-Binh-Tan",
          theater_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          cinema_id: "CGV-Binh-Tan",
          theater_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          cinema_id: "CGV-Tan-Phu",
          theater_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          cinema_id: "CGV-Tan-Phu",
          theater_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          cinema_id: "CGV-Tan-Binh",
          theater_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          cinema_id: "CGV-Tan-Binh",
          theater_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          cinema_id: "CNS-Hai-Ba-Trung",
          theater_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          cinema_id: "CNS-Hai-Ba-Trung",
          theater_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          cinema_id: "CNS-Quoc-Thanh",
          theater_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          cinema_id: "CNS-Quoc-Thanh",
          theater_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          cinema_id: "GLX-Kinh-Duong-Vuong",
          theater_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          cinema_id: "GLX-Kinh-Duong-Vuong",
          theater_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          cinema_id: "GLX-Nguyen-Du",
          theater_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          cinema_id: "GLX-Nguyen-Du",
          theater_id: 10,
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
    await queryInterface.bulkDelete("Cinemas_Theaters", null, {});
  },
};
