'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hoTen: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      matKhau: {
        type: Sequelize.STRING
      },
      soDT: {
        type: Sequelize.STRING
      },
      tuoi: {
        type: Sequelize.INTEGER
      },
      avatar: {
        type: Sequelize.STRING
      },
      loaiNguoiDung: {
        type: Sequelize.STRING
      },
      thongTinDatVe: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};