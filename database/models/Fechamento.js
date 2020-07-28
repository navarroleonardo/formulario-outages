const { Model, DataTypes } = require('sequelize');

class Fechamento extends Model {
  static init(sequelize) {
    super.init({
      tecnico_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      solucao_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
      },
      cidade_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
      },
      node_id: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      numero_ticket: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING(60),
      },
      ged: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      status: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Tecnico, { foreignKey: 'tecnico_id', as: 'tecnico' });
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
    this.belongsTo(models.Node, { foreignKey: 'node_id', as: 'node' });
    this.belongsTo(models.Solucao, { foreignKey: 'solucao_id', as: 'solucao' });
  }
}

module.exports = Fechamento;