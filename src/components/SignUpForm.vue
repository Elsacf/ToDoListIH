<template>
  <div>
    <h3>Welcome!</h3>
    <h4>Sign up to get started</h4>
  </div>
  <form>
    <div class="formContainer">
      <div class="inputContainer">
        <label for="email" class="label">
          Email
        <input
          type="text"
          name="email"
          id=" email"
          v-model="email"
          placeholder="Type your email here"
          class="input"/>
        </label>
      </div>
      <div class="inputContainer">
        <label for="password" class="label">
          Password
        <input
          type="text"
          name="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          class="input" />
        </label>
      </div>
      <button @click="handleSignUp()" type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignUpForm',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const userData = {
        email: 'elsacastillofranco@yahoo.es',
        password: 'PruebaPrueba',
      };
      this.newSignUp(userData.email, userData.password);
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
.pill {
  display: inline-block;
  margin: 20px 10px 0 0 ;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
