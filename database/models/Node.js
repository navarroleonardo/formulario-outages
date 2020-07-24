const { Model, DataTypes } = require('sequelize');

class Node extends Model {
  static init(sequelize) {
    super.init({
      distrito_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING(10),
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
    this.belongsTo(models.Distrito, { foreignKey: 'distrito_id', as: 'distrito' })
    this.hasMany(models.Node, { foreignKey: 'node_id', as: 'fechamentos' })
  }
}

module.exports = Node;