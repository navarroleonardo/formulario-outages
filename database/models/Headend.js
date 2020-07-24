const { Model, DataTypes } = require('sequelize');

class Headend extends Model {
  static init(sequelize) {
    super.init({
      cidade_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      newmonitor: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' })
    this.hasMany(models.Distrito, { foreignKey: 'headend_id', as: 'distritos' })
  }
}

module.exports = Headend;