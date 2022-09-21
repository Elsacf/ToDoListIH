<template>
  <h1>Go to your account</h1>
  <form>
    <div class="formContainer">
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
  <button @click="handleSignIn">Sign In</button>
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
