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
      "Cineplexes",
      [
        {
          id: "BHDStar",
          tenHeThongRap: "BHDStar",
          logo: "bhd_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CGV",
          tenHeThongRap: "CGV",
          logo: "cgv_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "Galaxy",
          tenHeThongRap: "Galaxy",
          logo: "galaxy_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CineStar",
          tenHeThongRap: "CineStar",
          logo: "cinestar_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
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
     await queryInterface.bulkDelete('Cineplexes', null, {});
  },
};
