<template>
    <div class="task-form">
      <div class="form-container">
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
    </div>
    <div v-if="showErrorModal">
      <ErrorModal :header='header' :text='text' @close="toggleModal"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';
import ErrorModal from './ErrorModal.vue';

export default {
  name: 'todoForm',
  data() {
    return {
      title: '',
      showErrorModal: false,
      header: 'Cuidado',
      text: 'Tu tarea debe contener al menos dos palabras',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'addTask']),
    submitTask() {
      if (this.title.length !== 0) {
        this.addTask(this.title, this.user.id);
        this.title = '';
      } else {
        this.showErrorModal = true;
      }
    },
    toggleModal() {
      this.showErrorModal = false;
    },
  },
  watch: {
    tasks() {
      if (this.tasks) {
        console.log(this.tasks);
      }
    },
  },
  components: { ErrorModal },
};
</script>

<style scoped>
  .task-form {
    margin-top: 5px;
    margin-bottom: 75px;
    margin-left: auto;
    margin-right: auto;
    background-color: #CFD2CF;
    width: 75%;
    height: 10rem;
    padding: 3rem;
    border-style: solid;
  }
  .form-container {
    width: 80%;
    margin-left: 10%;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
  button {
    background-color: #EB1D36;
    color: #CFD2CF;
  }
  .form-control {
    width: 95%;
  }
</style>
