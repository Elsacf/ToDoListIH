<template>
  <div class="registration-form">
    <h1>Regístrate y empieza a organizar tus tareas</h1>
    <form>
      <div class="form-container">
        <label for="name" class="label">
          Nombre:
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            class="input"
          />
        </label>
        <label for="email" class="label">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            class="input"
          />
        </label>
        <label for="password" class="label">
          Contraseña:
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="input"
          />
        </label>
        <label for="passwordRepeat" class="label">
          Confirma tu contraseña:
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
    <button class="sign-up-button" @click="handleSignUp">Sign Up</button>
    <div class="signin-box">
    <p class="signin-box-text">¿Ya estás registrado?</p>
    <router-link class="signin-box-link" to="/login">Entra en tu sesión</router-link>
    </div>
      <div v-if="errors.length !== 0">
        <ErrorModal :header='header' :text='text' @close="toggleModal"/>
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
      header: 'Cuidado',
      text: 'Hay algunos errores en el formulario',
      errors: [],
      showErrorModal: false,
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

<style scoped>
.registration-form {
  margin-top: 100px;
  text-align: center;
}
.form-container {
  width: 75%;
  margin-top: 50px;
  margin-left: 37%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}
.sign-up-button {
  margin-top: 2rem;
  background-color: #EB1D36;
  color: white;
}
.signin-box{
  margin-top: 3rem;
  background-color: #F5EDDC;
  height: 6rem;
  margin-left: 35%;
  width: 30%;
  border: solid #EB1D36;
  padding-top: 1.3rem;
}
label {
  font-size: 1.1rem;
  font-weight: bold;
}
.signin-box-text{
  font-weight: bold;
}
.signin-box-link {
  text-decoration: none;
  color:#EB1D36;
  font-weight: bold;
}
.signin-box-link:hover {
  color: #CFD2CF;
}
</style>
