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
      "Theaters",
      [
        {
          id: 1,
          tenRap: "Rạp 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          tenRap: "Rạp 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          tenRap: "Rạp 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          tenRap: "Rạp 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          tenRap: "Rạp 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          tenRap: "Rạp 6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          tenRap: "Rạp 7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          tenRap: "Rạp 8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          tenRap: "Rạp 9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          tenRap: "Rạp 10",
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
    await queryInterface.bulkDelete("Theaters", null, {});
  },
};
