<template>
    <h1>Esta es la vista de SignUp/In</h1>
    <h4>Register and start to organize your tasks</h4>
    <form>
      <div class="formContainer">
        <label for="name" class="label">
          Enter your name:
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            class="input"
          />
        </label>
        <label for="email" class="label">
          Enter your email:
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            class="input"
          />
        </label>
        <label for="password" class="label">
          Enter your password:
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="input"
          />
        </label>
        <label for="passwordRepeat" class="label">
          Confirm your password:
          <input
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            v-model="confirm"
            class="input"
          />
        </label>
      </div>
    </form>
    <button @click="handleSignUp">Sign Up</button>
    <p>Have registered already?</p><router-link to="/login">Click here</router-link>
      <div>
        <ErrorModal v-if="errors.length !== 0"
        header='Cuidado'
        text='Corrige los siguientes errores'>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          <button @click="errorModal=false">Cerrar</button>
        </ErrorModal>
      </div>
    <div class="modalContent" v-if="signUpModal">
      <transition name="fade">
        <div class="modal-overlay"></div>
      </transition>
      <modal name="fade">
        <div class="modal"></div>
        <p>Genial! Te hemos enviado un email a tu bandeja de entrada</p>
        <button @click="signUpModal=false">Cerrar</button>
      </modal>
    </div>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import errorModal from '@/components/ErrorModal.vue';

export default {
  name: 'AuthView',
  components: { errorModal },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      header: '',
      text: '',
      errors: [],
      signUpModal: false,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(this.email);
      const expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(this.password);
      const enteredPassword = this.password;
      const enteredConfirm = this.confirm;

      if (!this.name) {
        this.errors.push('Introduce un nombre correcto');
      } else if (!this.email) {
        this.errors.push('Introduce una dirección de email');
      } else if (!expReg) {
        this.errors.push('Introduce un email válido');
      } else if (!this.password) {
        this.errors.push('Introduce una contraseña');
      } else if (!expPassword) {
        this.errors.push('Introduce una contraseña válida');
      } else if (enteredPassword !== enteredConfirm) {
        this.errors.push('Introduce el mismo password');
      } else {
        this.signUp(this.email, this.password);
        this.signUpModal = true;
      }
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/ ' });
      }
    },
  },
};
</script>
