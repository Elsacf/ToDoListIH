<template>
    <div class="editor-backdrop">
      <div class="modal">
        <h3 class="modal-header">{{ header }}</h3>
        <div class="form-container">
        <label for="title">
          Introduce el nuevo título de la tarea {{ taskId }}
          <input
          v-model="newTitle"
          name="newTitle"
          type="text"
          class="form-control"
          />
        </label>
        <button class="close-button" @click="closeEditorModal">Cancelar</button>
        <button class="edit-button" @click="editTitle(taskId)">Actualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'taskEditorModal',
  data() {
    return {
      newTitle: '',
    };
  },
  props: {
    taskId: Number,
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['editTaskItem']),
    editTitle(taskId) {
      this.editTaskItem(taskId, this.newTitle);
    },
    closeEditorModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.editor-backdrop {
  width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
}
.modal {
    width: 400px;
    height: 250px;
    padding: 20px;
    margin-top: 100px;
    margin-left: 500px;
    background: #F5EDDC;
    border-radius: 10px;
    display: unset;
    border: solid 2px #EB1D36;
    text-align: center;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
    color: #EB1D36;
    margin-bottom: 15px;
  }
  .close-button {
    background-color: #CFD2CF;
  }
  .edit-button {
    background-color: #EB1D36;
    color: white;
  }
</style>
