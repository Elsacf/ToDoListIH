<template>
  <div class="home">
    <navbarVue />
    <h1>Esta es la vista de Home</h1>
    <todoForm />
    <todoList />
  </div>
</template>

<script>
import todoList from '@/components/TodoList.vue';
import navbarVue from '@/components/NavbarVue.vue';
import todoForm from '../components/TodoForm.vue';

export default {
  name: 'HomeView',
  data() {
    return {};
  },
  components: {
    todoForm,
    todoList,
    navbarVue,
  },
};
</script>
