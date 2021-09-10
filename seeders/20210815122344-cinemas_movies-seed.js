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
      "Cinemas_Movies",
      [
        {
          id: 1,
          cinema_id: "BHD-3-thang-2",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          cinema_id: "BHD-3-thang-2",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          cinema_id: "BHD-3-thang-2",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          cinema_id: "BHD-Hai-Trieu",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          cinema_id: "BHD-Hai-Trieu",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          cinema_id: "BHD-Hai-Trieu",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          cinema_id: "BHD-Nguyen-Gia-Tri",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          cinema_id: "BHD-Nguyen-Gia-Tri",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          cinema_id: "BHD-Nguyen-Gia-Tri",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          cinema_id: "CGV-Binh-Tan",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          cinema_id: "CGV-Binh-Tan",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          cinema_id: "CGV-Binh-Tan",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          cinema_id: "CGV-Tan-Phu",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          cinema_id: "CGV-Tan-Phu",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          cinema_id: "CGV-Tan-Phu",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          cinema_id: "CGV-Tan-Binh",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          cinema_id: "CGV-Tan-Binh",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          cinema_id: "CGV-Tan-Binh",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          cinema_id: "CNS-Hai-Ba-Trung",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          cinema_id: "CNS-Hai-Ba-Trung",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          cinema_id: "CNS-Hai-Ba-Trung",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          cinema_id: "CNS-Quoc-Thanh",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          cinema_id: "CNS-Quoc-Thanh",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          cinema_id: "CNS-Quoc-Thanh",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          cinema_id: "GLX-Kinh-Duong-Vuong",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          cinema_id: "GLX-Kinh-Duong-Vuong",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          cinema_id: "GLX-Kinh-Duong-Vuong",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          cinema_id: "GLX-Nguyen-Du",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          cinema_id: "GLX-Nguyen-Du",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          cinema_id: "GLX-Nguyen-Du",
          movie_id: 8,
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
    await queryInterface.bulkDelete("Cinemas_Movies", null, {});
  },
};
