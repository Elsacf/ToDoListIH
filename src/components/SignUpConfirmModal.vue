<template>
    <div class="backdrop">
      <div class="modal">
        <h3 class="modal-header">{{ header }}</h3>
        <p class="modal-text">{{ text }}</p>
        <button class="modal-button" @click="closeConfirmModal">Cerrar</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'signUpConfirmModal',
  props: ['header', 'text'],
  methods: {
    closeConfirmModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
    .backdrop {
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
    .modal-text {
      font-size: 1.2em;
    }
    .modal-button {
      background-color: #CFD2CF;
    }
  </style>
