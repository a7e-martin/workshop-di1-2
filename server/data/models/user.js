const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const Pokemon = require('./pokemon');

class User extends Model {

  static async init(sequelizeInstance) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          // Hachage du mot de passe.
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        }
      },
      sequelize: sequelizeInstance,
      modelName: 'Users'
    });
    super.sync();
  }

  async verifyPassword(clearPassword) {
    return await bcrypt.compare(clearPassword, this.password);
  }
}

module.exports = User;