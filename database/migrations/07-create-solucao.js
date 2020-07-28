'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solucoes', {
      id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      solucao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      newmonitor: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Solucoes');
  }
};