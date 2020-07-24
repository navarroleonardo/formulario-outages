'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fechamentos', {
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
      cidade_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        references: { model: 'Cidades', key: 'id' },
      },
      node_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: 'Nodes', key: 'id' },
      },
      numero_ticket: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      solucao: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING(60),
      },
      ged: {
        type: Sequelize.INTEGER.UNSIGNED,
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fechamentos');
  }
};