<template>
  <div class="home">
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

<style scoped>
.home {
  margin-top: 10%;
}
</style>
