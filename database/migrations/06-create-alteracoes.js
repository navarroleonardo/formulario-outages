'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Alteracoes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tecnico_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        references: { model: 'Tecnicos', key: 'id' },
      },
      numero_ticket: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      previsao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      contato: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Aguardando',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }, {
      tableName: 'alteracoes',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Alteracoes');
  }
};