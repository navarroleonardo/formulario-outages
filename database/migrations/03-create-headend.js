'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Headends', {
      id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cidade_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        references: { model: 'Cidades', key: 'id' },
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      newmonitor: {
        type: Sequelize.INTEGER.UNSIGNED,
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
    await queryInterface.dropTable('Headends');
  }
};