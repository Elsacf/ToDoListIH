<template>
  <div class="home">
    <h1>Esta es la vista de Home</h1>
    <div>
      <label for="newTask">
        Add a new task
       <input name="newTask" type="text" placeholder="Enter a task" class="form-control" />
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
        <td>Steal bananas from the store</td>
        <td>To-do</td>
        <td>
          <div>
            <span class="fa fa-pen"></span>
          </div>
        </td>
          <div>
            <span class="fa fa-trash"></span>
          </div>
        <td>

        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
    submitTask() {
      console.log('Hello from the submit task method');
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
