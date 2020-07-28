const { Model, DataTypes } = require('sequelize');

class Solucao extends Model {
  static init(sequelize) {
    super.init({
      solucao: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      newmonitor: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      tableName: 'solucoes'
    })
  }

  static associate(models) {
    this.hasMany(models.Fechamento, { foreignKey: 'solucao_id', as: 'fechamentos' })
  }
}

module.exports = Solucao;