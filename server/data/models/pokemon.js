const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./user');
class Pokemon extends Model {

  static async init(sequelizeInstance) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      }
    }, {
      sequelize: sequelizeInstance,
      modelName: 'Pokemons'
    });

    super.sync();
  }
}

module.exports = Pokemon;