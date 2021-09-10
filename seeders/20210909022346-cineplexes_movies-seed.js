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
      "Cineplexes_Movies",
      [
        {
          id: 1,
          cineplex_id: "BHDStar",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          cineplex_id: "BHDStar",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          cineplex_id: "BHDStar",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          cineplex_id: "BHDStar",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          cineplex_id: "BHDStar",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          cineplex_id: "BHDStar",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          cineplex_id: "BHDStar",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          cineplex_id: "BHDStar",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          cineplex_id: "BHDStar",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          cineplex_id: "BHDStar",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          cineplex_id: "CGV",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          cineplex_id: "CGV",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          cineplex_id: "CGV",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          cineplex_id: "CGV",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          cineplex_id: "CGV",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          cineplex_id: "CGV",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          cineplex_id: "CGV",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          cineplex_id: "CGV",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          cineplex_id: "CGV",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          cineplex_id: "CGV",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          cineplex_id: "Galaxy",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          cineplex_id: "Galaxy",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          cineplex_id: "Galaxy",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          cineplex_id: "Galaxy",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          cineplex_id: "Galaxy",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          cineplex_id: "Galaxy",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          cineplex_id: "Galaxy",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          cineplex_id: "Galaxy",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          cineplex_id: "Galaxy",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          cineplex_id: "Galaxy",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          cineplex_id: "CineStar",
          movie_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          cineplex_id: "CineStar",
          movie_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          cineplex_id: "CineStar",
          movie_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          cineplex_id: "CineStar",
          movie_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          cineplex_id: "CineStar",
          movie_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          cineplex_id: "CineStar",
          movie_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 37,
          cineplex_id: "CineStar",
          movie_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          cineplex_id: "CineStar",
          movie_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          cineplex_id: "CineStar",
          movie_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          cineplex_id: "CineStar",
          movie_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cineplexes_Movies", null, {});
  },
};
