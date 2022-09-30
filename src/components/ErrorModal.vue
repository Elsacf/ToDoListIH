<template>
    <div class="backdrop">
      <div class="modal">
        <h3 class="modal-header">{{ header }}</h3>
        <p class="modal-text">{{ text }}</p>
        <button class="modal-button" @click="closeModal">Cerrar</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'errorModal',
  props: ['header', 'text'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
  .backdrop {
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
  }
  .modal {
    width: 33%;
    height: 15rem;
    padding: 0.8rem;
    margin-top: 10rem;
    margin-left: 40%;
    background: #F5EDDC;
    border-radius: 5%;
    display: unset;
    border: solid 2px #EB1D36;
    text-align: center;
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
  @media screen and (max-width: 480px) {
  .modal {
    width: 75%;
    height: 15rem;
    padding: 0.5%;
    margin-top: 20%;
    display: unset;
    margin-left: 15%;
  }
  }
</style>
