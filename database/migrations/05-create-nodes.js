'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nodes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      distrito_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        references: { model: 'Distritos', key: 'id' },
      },
      nome: {
        type: Sequelize.STRING(10),
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
    await queryInterface.dropTable('Nodes');
  }
};