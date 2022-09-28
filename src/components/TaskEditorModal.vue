<template>
    <div class="editor-backdrop">
      <div class="modal">
        <h3 class="modal-header">{{ header }}</h3>
        <div class="form-container">
        <label for="title">
          Introduce el nuevo título de la tarea
          <input
          v-model="title"
          name="title"
          type="text"
          placeholder="Enter a task"
          class="form-control"
          />
        </label>
        <button @click="submitTask">Submit</button>
        <button class="close-button" @click="closeModal">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskEditorModal',
  methods: {
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
  }
  .modal-header {
    color: #EB1D36;
    font-weight: bolder;
    padding-left: 35%;
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .close-button {
    background-color: #CFD2CF;
  }
</style>
