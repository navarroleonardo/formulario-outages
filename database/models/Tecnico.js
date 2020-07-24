const { Model, DataTypes } = require('sequelize');

class Tecnico extends Model {
  static init(sequelize) {
    super.init({
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        }
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Alteracao, { foreignKey: 'tecnico_id', as: 'alteracoes' });
    this.hasMany(models.Fechamento, { foreignKey: 'tecnico_id', as: 'fechamentos' });
  }
}

module.exports = Tecnico;