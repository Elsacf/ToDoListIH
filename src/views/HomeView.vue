<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <div>
      <label for="newTask">
        Add a new task
       <input
       v-model="newTask"
       name="newTask"
       type="text"
       placeholder="Enter a task"
       class="form-control"
       />
    </label>
      <button @click="submitTask">Submit</button>
    </div>
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
          <td> {{ task.title }}</td>
          <td>{{ task.is_complete }}</td>
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
  name: 'HomeView',
  data() {
    return {
      newTask: '',
      editedTask: null,
      newTasks:
        {
          title: '',
          is_complete: '',
        },
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask', 'deleteTaskItem', 'editTaskItem']),
    submitTask() {
      if (this.newTask.length === 0) return;
      this.tasks.push({
        title: this.newTask,
        is_complete: false,
      });
      this.addTask(this.tasks);
    },
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
