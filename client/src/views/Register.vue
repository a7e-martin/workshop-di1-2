<template>
  <form @submit="register">
    <label for="email">Email</label>
    <input v-model="email" name="email" type="text">
    <label for="password">Mot de passe</label>
    <input v-model="password" name="password" type="password">
    <input type="submit" value="Connexion">
  </form>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register(event) {
      event.preventDefault();

      
    }
  }
}
</script>