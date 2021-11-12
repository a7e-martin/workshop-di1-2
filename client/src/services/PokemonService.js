import axios from 'axios';
import Pokemon from '../models/Pokemon';

export default class PokemonService {

  getPokemons() {
    return new Promise((resolve) => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=25').then( (response) => {
        
        const pokemons = [];
        response.data.results.forEach((pokemon) => {
          const p = new Pokemon(pokemon.name);
          p.url = pokemon.url;
          pokemons.push(p);
        });

        resolve(pokemons);
      })
    });
  }

  getPokemonsV2() {
    return new Promise((resolve) => {
      axios.get('http://localhost:8081/pokemons').then( (response) => {
        
        const pokemons = [];
        response.data.results.forEach((pokemon) => {
          const p = new Pokemon(pokemon.id, pokemon.name);
          pokemons.push(p);
        });

        resolve(pokemons);
      })
    });
  }

  getPokemon(id) {
    axios.get('http://localhost:8081/pokemons/' + id).then((response) => {
      const p = response.data;
      this.pokemon = new Pokemon(p.id, p.name);
      // this.pokemon.height = p.height;
      // this.pokemon.weight = p.weight;
      // this.pokemon.image = p.sprites.front_default;
    })
  }
}