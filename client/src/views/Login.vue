<template>
  <form @submit="login">
    <label for="email">Email</label>
    <input v-model="email" name="email" type="text">
    <label for="password">Mot de passe</label>
    <input v-model="password" name="password" type="password">
    <input type="submit" value="Connexion">
  </form>
</template>
<script>
import AuthService from '../services/AuthService';
export default {
  name: 'Login',
  data() {
    return {
      authService: undefined,
      email: '',
      password: ''
    }
  },
  mounted() {
    this.authService = new AuthService();
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.authService.login(this.email, this.password);
      
    }
  }
}
</script>