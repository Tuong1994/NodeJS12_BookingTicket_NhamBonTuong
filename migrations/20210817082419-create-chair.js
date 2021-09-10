'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Chairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenGhe: {
        type: Sequelize.STRING
      },
      loaiGhe: {
        type: Sequelize.STRING
      },
      stt: {
        type: Sequelize.STRING
      },
      daDat: {
        type: Sequelize.BOOLEAN
      },
      giaVe: {
        type: Sequelize.INTEGER
      },
      taiKhoanNguoiDat: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Chairs');
  }
};