'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cidades', {
      id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      estado_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
        references: { model: 'Estados', key: 'id' },
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
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
    await queryInterface.dropTable('Cidades');
  }
};