<template>
    <SignIn />
    <SignUp />
    <h1>Esta es la vista de SignUp/In</h1>
    <button @click="handleSignUp">SignUp</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

export default {
  name: 'AuthView',
  components: {
    SignIn,
    SignUp,
  },
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
