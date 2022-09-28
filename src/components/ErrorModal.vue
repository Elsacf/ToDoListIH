<template>
    <div class="backdrop">
      <div class="modal">
        <h3>{{ header }}</h3>
        <p>{{ text }}</p>
        <button @click="closeModal">Cerrar</button>
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
    height: 200px;
    padding: 20px;
    margin-top: 100px;
    margin-left: 500px;
    background: white;
    border-radius: 10px;
    display: unset;
  }
</style>
