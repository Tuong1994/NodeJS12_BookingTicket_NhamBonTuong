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
      "Schedules_Theaters",
      [
        {
          id: 1,
          theater_id: 1,
          schedule_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          theater_id: 1,
          schedule_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          theater_id: 1,
          schedule_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          theater_id: 1,
          schedule_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          theater_id: 2,
          schedule_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          theater_id: 2,
          schedule_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          theater_id: 2,
          schedule_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          theater_id: 2,
          schedule_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          theater_id: 3,
          schedule_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          theater_id: 3,
          schedule_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          theater_id: 3,
          schedule_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          theater_id: 3,
          schedule_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          theater_id: 4,
          schedule_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          theater_id: 4,
          schedule_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          theater_id: 4,
          schedule_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          theater_id: 4,
          schedule_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          theater_id: 5,
          schedule_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          theater_id: 5,
          schedule_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          theater_id: 5,
          schedule_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          theater_id: 5,
          schedule_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          theater_id: 6,
          schedule_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          theater_id: 6,
          schedule_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          theater_id: 6,
          schedule_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          theater_id: 6,
          schedule_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          theater_id: 7,
          schedule_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          theater_id: 7,
          schedule_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          theater_id: 7,
          schedule_id: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          theater_id: 7,
          schedule_id: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          theater_id: 8,
          schedule_id: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          theater_id: 8,
          schedule_id: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          theater_id: 8,
          schedule_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          theater_id: 8,
          schedule_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          theater_id: 9,
          schedule_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          theater_id: 9,
          schedule_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          theater_id: 9,
          schedule_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          theater_id: 9,
          schedule_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 37,
          theater_id: 10,
          schedule_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          theater_id: 10,
          schedule_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          theater_id: 10,
          schedule_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          theater_id: 10,
          schedule_id: 10,
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
    await queryInterface.bulkDelete("Schedules_Theaters", null, {});
  },
};
