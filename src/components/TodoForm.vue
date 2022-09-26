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
    <div class="modalContent" v-if="showModal">
      <transition name="fade">
        <div class="modal-overlay"></div>
      </transition>
      <modal name="fade">
        <div class="modal"></div>
        <p>Tu tarea debe tener por lo menos dos palabras</p>
        <button @click="showModal=false">Cerrar</button>
      </modal>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'todoForm',
  data() {
    return {
      title: '',
      showModal: false,
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
        this.showModal = true;
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
