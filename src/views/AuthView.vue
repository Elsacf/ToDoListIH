<template>
    <h1>Esta es la vista de SignUp/In</h1>
    <div>
      <button
      @click="openSignUpForm"
      class="signUpFormButton"
      >
        Create your account
      </button>
    </div>
    <div>
      <p>Already have an account?</p>
      <button
      @click="openSignInForm"
      class="signInFormButton"
      >
        Sign in
      </button>
    </div>
    <div v-show="showSignUpForm">
    <SignUpForm />
  </div>
  <div v-show="showSignInForm">
    <SignInForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import SignInForm from '@/components/SignInForm.vue';

export default {
  name: 'AuthView',
  components: {
    SignUpForm,
    SignInForm,
  },
  data() {
    return {
      showSignUpForm: false,
      showSignInForm: false,
    };
  },
  methods: {
    openSignUpForm() {
      this.showSignUpForm = true;
    },
    openSignInForm() {
      this.showSignInForm = true;
    },
  },
};
</script>
