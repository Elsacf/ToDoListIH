<template>
    <h1>Formulario</h1>
    <div>
      <label for="title">
        Add a new task
       <input
       v-model="title"
       name="title"
       type="text"
       placeholder="Enter a task"
       class="form-control"
       />
    </label>
      <button @click="submitTask">Submit</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'todoForm',
  data() {
    return {
      title: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask']),
    submitTask() {
      if (this.title.length !== 0) {
        this.addTask(this.title);
      }
    },
  },
  watch: {
    tasks() {
      if (this.tasks) {
        console.log(this.tasks);
      }
    },
  },
};
</script>
