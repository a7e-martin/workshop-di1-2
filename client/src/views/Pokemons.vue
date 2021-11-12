<template>
  <div>
    <h1>Pokemons</h1>

    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Nom</th>
          <th>Choisir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemons" :key="index">
          <td>
            {{ index }}
          </td>
          <td>
            {{ pokemon.name }}
          </td>
          <td>
            <button @click="onPokemonClicked(pokemon)">
              Choisir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <PokemonComponent 
      v-if="selectedPokemon !== undefined" 
      v-bind:pokemonId="selectedPokemon.id"
    >
    </PokemonComponent>
  </div>
</template>

<script>

import PokemonComponent from '../components/Pokemon.vue';
import PokemonService from '../services/PokemonService';

export default {
  name: 'Pokemons',
  components: {
    PokemonComponent
  },
  data() {
    return {
      pokemonService: undefined,
      pokemons: [],
      selectedPokemon: undefined
    }
  },
  mounted() {
    this.pokemonService = new PokemonService();

    this.pokemonService.getPokemonsV2().then((pokemons) => {
      this.pokemons = pokemons;
    })
  },
  methods: {
    onPokemonClicked(pokemon) {
      this.selectedPokemon = pokemon;
    }
  }
}
</script>