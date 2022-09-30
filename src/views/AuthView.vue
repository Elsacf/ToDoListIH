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
    <button class="sign-up-button" @click="handleSignUp">Crear cuenta</button>
    <div class="signin-box">
    <p class="signin-box-text">¿Ya estás registrado?</p>
    <router-link class="signin-box-link" to="/login">Entra en tu sesión</router-link>
    </div>

    <errorSignupModal v-if="errors.length !== 0">
        <div class="backdrop-error-modal">
          <div class="modal">
            <h3>Cuidado!</h3>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            <button @click="toggleErrorSignupModal">Cerrar</button>
          </div>
        </div>
      </errorSignupModal>

      <div v-if="signUpConfirmModal">
      <SignUpConfirmModal :header='header' :text='text' @close="toggleConfirmModal"/>
    </div>
  </div>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import signUpConfirmModal from '@/components/SignUpConfirmModal.vue';

export default {
  name: 'AuthView',
  components: { signUpConfirmModal },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      header: '¡Ya estás dentro',
      text: 'Revisa tu bandeja de entrada. Te hemos enviado un email para que confirmes tu suscripción.',
      errors: [],
      signUpConfirmModal: false,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const expEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(this.email);
      const expPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(this.password);
      const enteredPassword = this.password;
      const enteredConfirm = this.confirm;

      if (!this.name) {
        this.errors.push('Falta un nombre');
      } else if (!this.email) {
        this.errors.push('Falta una dirección de email');
      } else if (!expEmail) {
        this.errors.push('El email no es válido');
      } else if (!this.password) {
        this.errors.push('Falta una contraseña');
      } else if (!expPassword) {
        this.errors.push('La contraseña no es válida');
      } else if (enteredPassword !== enteredConfirm) {
        this.errors.push('La contraseñsa no coincide');
      } else {
        this.signUpConfirmModal = true;
        this.signUp(this.email, this.password);
      }
    },
    toggleConfirmModal() {
      this.signUpConfirmModal = false;
    },
    toggleErrorSignupModal() {
      this.errors = [];
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
  margin-top: 10rem;
  text-align: center;
}
.form-container {
  width: 75%;
  margin-top: 5rem;
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
  @media screen and (max-width: 480px) {
    .signin-box{
  height: 10rem;
  margin-left: 35%;
  width: 30%;
  border: solid #EB1D36;
  padding-top: 1.3rem;
  }
  .form-container {
  width: 75%;
  margin-left: 20%;
}
.registration-form {
  margin-top: 5rem;
}
.form-container {
  margin-top: 2rem;
}
.modal {
    width: 75%;
    height: 10rem;
    padding: 0.5%;
    margin-top: 20%;
    display: unset;
    margin-left: 15%;
  }
}
</style>
