<template>
    <div v-if="tasks.length === 0" class="empty-table-message">
      <h2 class="empty-title">¡Bienvenido!</h2>
      <h3 class="empty-message">Anota tu primera tarea</h3>
    </div>
    <div v-if="tasks.length !== 0" class="table-container">
        <table class="table-tasks">
        <tbody class="table-body">
          <tr v-for="task in tasks" :key="task.id">
            <td>
              <div>
                <span><button @click="checkTask(task.id, task.isComplete)">Hecho</button></span>
              </div>
            </td>
            <td v-bind:class="{
              taskTitle: task.is_complete === false,
              taskCompletedTitle: task.is_complete === true }">
              {{ task.title }}</td>
            <td>
              <div>
                <span><button @click="editTask(task.id)">
                  <img src="../assets/edit.svg" alt="edit-button"></button></span>
              </div>
            </td>
            <td>
              <div>
                <span><button @click="deleteTask(task.id)">
                  <img src="../assets/delete.svg" alt="delete-button"></button></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <taskEditorModal v-if="showTaskEditor" :taskId="editTaskId" @close="toggleTaskEditor" />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import TaskEditorModal from '@/components/TaskEditorModal.vue';

export default {
  name: 'todoList',
  data() {
    return {
      showTaskEditor: false,
      editTaskId: null,
    };
  },
  components: { TaskEditorModal },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTaskItem', 'editTaskItem', 'checkTaskItem']),
    toggleTaskEditor() {
      this.showTaskEditor = false;
    },
    deleteTask(taskId) {
      this.deleteTaskItem(taskId);
    },
    editTask(taskId) {
      // const newTitle = prompt('Introduce el nuevo título de la tarea');
      // this.editTaskItem(taskId, newTitle);
      // this.editedTask = index;
      this.editTaskId = taskId;
      this.showTaskEditor = true;
    },
    checkTask(taskId, isComplete) {
      this.checkTaskItem(taskId, !isComplete);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
  .table-container {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    background-color: #CFD2CF;
    border-style: solid;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    justify-content: center;
  }
  table {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .table-headings {
    text-align: center;
  }
  .table-body {
    text-align: center;
  }
  .empty-table-message {
    text-align: center;
  }
  .empty-title {
    color: #EB1D36;
  }
  .taskTitle {
    font-weight: bold;
  }
  .taskCompletedTitle {
    text-decoration: line-through;
  }
</style>
