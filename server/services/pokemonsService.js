const Pokemon = require('../data/models/pokemon');
const User = require('../data/models/user');

class PokemonsService {
  
  getPokemons() {
    // Méthode 'Promesse'
    return new Promise((resolve, reject) => {
      Pokemon.findAll({include: User}).then((pokemons) => {
        resolve(pokemons);
      });
    })
  }

  async createPokemon(data) {
    return await Pokemon.create({
      name: data.name,
      userId: data.userId
    });
  }

  async getPokemon(id) {
    return await Pokemon.findByPk(id);
  }
}

module.exports = new PokemonsService();