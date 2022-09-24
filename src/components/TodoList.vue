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
        <tr v-for="task in tasks" :key="task.id">
          <td> {{ task.title }}</td>
          <td>{{ task.is_complete }}</td>
          <td>
            <div>
              <span><button @click="editTask(task.id)">Edit</button></span>
            </div>
          </td>
            <div>
              <span><button @click="deleteTask(task.id)">Delete</button></span>
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
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTaskItem', 'editTaskItem']),
    deleteTask(taskId) {
      this.deleteTaskItem(taskId);
    },
    editTask(taskId) {
      this.editTaskItem(taskId);
      // this.task = this.tasks[index].title;
      // this.editedTask = index;
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
