const { Model, DataTypes } = require('sequelize');

class Estado extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      }
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Cidade, { foreignKey: 'estado_id', as: 'cidades' })
  }
}

module.exports = Estado;