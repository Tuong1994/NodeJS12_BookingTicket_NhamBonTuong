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
    let data = [];
    let idIndex = 1;
    let amount = 101;

    for (let i = 1; i < 11; i++) {
      let theaterId = i;
      for (let i = 1; i < 11; i++) {
        if (theaterId < 11) {
          let movieId = i;
          if (idIndex < amount) {
            data.push({
              id: idIndex++,
              theater_id: theaterId,
              movie_id: movieId,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
        }
      }
    }
    await queryInterface.bulkInsert("Theaters_Movies", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Theaters_Movies", null, {});
  },
};
