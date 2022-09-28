<template>
  <div class="login-form">
  <h1>Accede a tu cuenta</h1>
  <form>
    <div class="login-form-container">
        <label for="email">
            Email:
            <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                class="input"
            />
        </label>
        <label for="password">
            Password:
            <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                class="input"
            />
        </label>
    </div>
  </form>
    <button class="sign-in-button" @click="handleSignIn">Sign In</button>
  </div>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      this.signIn(this.email, this.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/ ' });
      }
    },
  },
};
</script>

<style scoped>
  .login-form {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 4rem;
  }
  .login-form-container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .sign-in-button {
    margin-top: 3rem;
    background-color: #EB1D36;
    color: white;
  }
</style>
