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
      "Movies_Schedules",
      [
        {
          id: 1,
          movie_id: 1,
          schedule_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          movie_id: 1,
          schedule_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          movie_id: 1,
          schedule_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          movie_id: 1,
          schedule_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          movie_id: 2,
          schedule_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          movie_id: 2,
          schedule_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          movie_id: 2,
          schedule_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          movie_id: 2,
          schedule_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          movie_id: 3,
          schedule_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          movie_id: 3,
          schedule_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          movie_id: 3,
          schedule_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          movie_id: 3,
          schedule_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          movie_id: 4,
          schedule_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          movie_id: 4,
          schedule_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          movie_id: 4,
          schedule_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          movie_id: 4,
          schedule_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          movie_id: 5,
          schedule_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          movie_id: 5,
          schedule_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          movie_id: 5,
          schedule_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          movie_id: 5,
          schedule_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          movie_id: 6,
          schedule_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          movie_id: 6,
          schedule_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          movie_id: 7,
          schedule_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          movie_id: 7,
          schedule_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          movie_id: 8,
          schedule_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          movie_id: 8,
          schedule_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          movie_id: 9,
          schedule_id: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          movie_id: 9,
          schedule_id: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          movie_id: 10,
          schedule_id: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          movie_id: 10,
          schedule_id: 30,
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
    await queryInterface.bulkDelete("Movies_Schedules", null, {});
  },
};
