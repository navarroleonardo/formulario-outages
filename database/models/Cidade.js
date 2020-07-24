const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      estado_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      newmonitor: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.belongsTo(models.Estado, { foreignKey: 'estado_id', as: 'estado' })
    this.hasMany(models.Headend, { foreignKey: 'cidade_id', as: 'headends' })
    this.hasMany(models.Fechamento, { foreignKey: 'cidade_id', as: 'fechamentos' })
  }
}

module.exports = Cidade;