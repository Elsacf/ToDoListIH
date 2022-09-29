<template>
  <div>
    <nav v-if="user !== null">
      <div class="navbar-container">
        <div>
          <span class="navbar-brand">To-Do List</span>
        </div>
        <div class="buttons">
          <router-link class="navbar-button" to="/">Home</router-link>
          <router-link class="navbar-button" to="/auth">Cerrar sesión</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser', 'signUp', 'signIn']),
  },
  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-brand {
  color: #F5EDDC;
  font-weight: bolder;
  font-size: 2.5rem;
}
.buttons {
  margin-top: 1.2rem;
}
.navbar-button {
  width: 100px;
  text-align: center;
  font-size: 1.1rem;
  padding-top: 1.2rem;
  margin: 1rem;
}
.navbar-container {
  display: flex;
  padding: 10px;
  background-color: #EB1D36;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #EB1D36;
  background-color: #F5EDDC;
  width: 120%;
  padding: 0.8rem;
  border-radius: 10%;
  text-decoration: none;
  border: black 1px;
  text-align: center;
}
a:hover {
  color: black;
}

nav a.router-link-exact-active {
  color: black
}
a.router-link-exact-active:hover {
  color: #EB1D36;
}
</style>
