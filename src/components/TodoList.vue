<template>
  <h1>Lista de tareas</h1>
    <div v-if="tasks.length === 0">
      <h2>¡Bienvenido!</h2>
      <h3>Anota tu primera tarea</h3>
    </div>
    <div>
        <table>
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
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
              <span><button @click="checkTask(task.id)">Done</button></span>
            </div>
          </td>
          <td>
            <div>
              <span><button @click="editTask(task.id)">Edit</button></span>
            </div>
          </td>
          <td>
            <div>
              <span><button @click="deleteTask(task.id)">Delete</button></span>
            </div>
          </td>
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
    ...mapActions(taskStore, ['fetchTasks', 'deleteTaskItem', 'editTaskItem', 'checkTaskItem']),
    deleteTask(taskId) {
      this.deleteTaskItem(taskId);
    },
    editTask(taskId) {
      this.editTaskItem(taskId);
      // this.task = this.tasks[index].title;
      // this.editedTask = index;
    },
    checkTask(taskId) {
      this.checkTaskItem(taskId);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
