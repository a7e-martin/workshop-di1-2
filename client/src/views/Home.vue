<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <input v-model="message" type="text">
    <h2 v-bind:class="getTextColor()">
      {{ message }}
    </h2>
    <span v-show="message.length > 10">
      Attention, vous ne pouvez pas dépasser 10 caractères.
    </span>

    <button v-on:click="onButtonClicked()" v-bind:disabled="message.length === 0">
      Confirmer
    </button>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style scoped>
.default-color {
  color: black;
}
.warning-color {
  color: red;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: '',
      color: 'color: red'
    }
  },
  mounted() {
  },
  methods: {
    getTextColor() {
      if (this.message.length > 10) {
        return 'warning-color';
      }
      return 'default-color';
    },
    onButtonClicked() {
      console.log("Button clicked!");
    }
  }
}
</script>
