<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <todoForm />
    <todoListVue />
  </div>
</template>

<script>
import todoListVue from '@/components/TodoList.vue';
import todoForm from '../components/TodoForm.vue';

export default {
  name: 'HomeView',
  data() {
    return {};
  },
  components: {
    todoForm,
    todoListVue,
  },
};
</script>
