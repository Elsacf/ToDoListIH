<template>
  <h1>Go to your account!</h1>
  <div>
    <form>
        <label for="email">
            <input type="email" id="email" required v-model="email"/>
            Email:
        </label><br>
        <label for="password">
            <input type="password" id="password" required v-model="password">
            Password:
        </label><br>
        <input type="submit" value="Sign in">
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const userData = {
        email: 'nacho.martinez@ironhack.com',
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style>

</style>
