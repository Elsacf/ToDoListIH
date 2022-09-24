<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <todoForm />
    <todoList />
  </div>
</template>

<script>
import todoList from '@/components/TodoList.vue';
import todoForm from '../components/TodoForm.vue';

export default {
  name: 'HomeView',
  data() {
    return {};
  },
  components: {
    todoForm,
    todoList,
  },
};
</script>
