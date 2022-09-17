<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <div>
      <label for="newTask">
        Add a new task
       <input
       v-model="task"
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
              <span class="fa fa-pen"><button @click="editTask(index)">Edit</button></span>
            </div>
          </td>
            <div>
              <span class="fa fa-trash"><button @click="deleteTask(index)">Delete</button></span>
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
      task: '',
      editedTask: null,
      tasks: [
        {
          title: 'Steal bananas from the store',
          is_complete: 'to-do',
        },
      ],
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask']),
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          title: this.task,
          is_complete: 'to-do',
        });
      } else {
        this.tasks[this.editedTask].title = this.task;
        this.editedTask = null;
      }
      this.task = '';
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
