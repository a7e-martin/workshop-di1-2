<template>
  <div>
    <div v-if="pokemon !== undefined" class="selected-pokemon">
      <span>
        {{ pokemon.name }}
      </span>
      <span>
        {{ pokemon.height }}cm
      </span>
      <span>
        {{ pokemon.weight }}kg
      </span>
      <img v-bind:src="pokemon.image">
    </div>
    <div v-else>
      <span>Chargement des données ...</span>
    </div>
  </div>
</template>
<style scoped>
.selected-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import axios from 'axios';
import Pokemon from '../models/Pokemon';
export default {
  name: 'Pokemon',
  props: {
    pokemonId: undefined
  },
  data() {
    return {
      pokemon: undefined
    }
  },
  watch: {
    pokemonId: function() {
      this.fetchPokemon();
    }
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    fetchPokemon() {

      this.pokemon = undefined;
    }
  }
}
</script>