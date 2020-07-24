const { Model, DataTypes } = require('sequelize');

class Distrito extends Model {
  static init(sequelize) {
    super.init({
      headend_id: {
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
    this.belongsTo(models.Headend, { foreignKey: 'headend_id', as: 'headend' })
    this.hasMany(models.Node, { foreignKey: 'distrito_id', as: 'nodes' })
  }
}

module.exports = Distrito;