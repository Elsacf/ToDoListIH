<template>
  <h1>Lista de tareas</h1>
    <div>
        <table>
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td> {{ tasks.title }}</td>
          <td>{{ tasks.is_complete }}</td>
          <td>
            <div>
              <span><button @click="editTask(index)">Edit</button></span>
            </div>
          </td>
            <div>
              <span><button @click="deleteTask(index)">Delete</button></span>
            </div>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'todoList',
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].title;
      this.editedTask = index;
    },
  },
};
</script>
