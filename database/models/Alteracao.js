const { Model, DataTypes } = require('sequelize');

class Alteracao extends Model {
  static init(sequelize) {
    super.init({
      tecnico_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      numero_ticket: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      previsao: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
      },
      contato: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      tableName: 'alteracoes'
    })
  }

  static associate(models) {
    this.belongsTo(models.Tecnico, { foreignKey: 'tecnico_id', as: 'tecnico' })
  }
}

module.exports = Alteracao;