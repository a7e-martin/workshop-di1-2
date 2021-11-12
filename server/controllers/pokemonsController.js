const pokemonsService = require('../services/pokemonsService');

class PokemonsController {
  constructor() {

  }

  async getPokemons(request, response) {
    const pokemons = await pokemonsService.getPokemons();
    response.status(200).send(pokemons);
  }

  async getPokemon(request, response) {
    const pokemonId = request.params.id;
    const pokemon = await pokemonsService.getPokemon(pokemonId);
    response.status(200).send(pokemon);
  } 

  async createPokemon(request, response) {
    // Récupération des données du body.
    const data = request.body;

    // On affecte userId à l'utilisateur qui appelle la route.
    data.userId = request.user.id;

    // Création du pokemon en BDD.
    const pokemon = await pokemonsService.createPokemon(data);
    
    // Envoi du nouveau pokemon au client.
    response.status(200).send(pokemon);
  }
}

module.exports = new PokemonsController();