"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Theaters_Chairs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      theater_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Theaters",
          key: "id",
        },
      },
      chair_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Chairs",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Theaters_Chairs");
  },
};
