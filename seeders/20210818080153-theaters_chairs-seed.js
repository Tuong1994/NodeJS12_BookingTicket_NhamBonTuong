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
     let amount = 1001;
     
     for (let i = 1; i < 11; i++) {
       let theater_id = i;
       for (let i = 1; i < 101; i++) {
         if (theater_id < 11) {
           let chair_id = i;
           if (idIndex < amount) {
             data.push({
               id: idIndex++,
               theater_id: theater_id,
               chair_id: chair_id,
               createdAt: new Date(),
               updatedAt: new Date(),
             });
           }
         }
       }
     }
    await queryInterface.bulkInsert("Theaters_Chairs", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Theaters_Chairs", null, {});
  },
};
