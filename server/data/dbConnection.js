var { Sequelize } = require('sequelize');
const Pokemon = require('./models/pokemon');
const User = require('./models/user');

class DbConnection {
  sequelize;
  constructor() {
    this.sequelize = new Sequelize('testdb', 'root', 'Azerty@123', {
      host: 'db',
      dialect: 'mysql'
    })
  }

  initialize() {
    this.sequelize.authenticate().then(async () => {

      await User.init(this.sequelize);
      await Pokemon.init(this.sequelize);

      // Gestion des associations
      User.hasMany(Pokemon, {
        foreignKey: 'userId'
      });
      Pokemon.belongsTo(User);
    })
  }
}

module.exports = new DbConnection();