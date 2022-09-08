<template>
    <h1>Start working with us!</h1>
    <div>
      <form>
          <label for="name">
              <input type="text" id="name">
              Your name please:
          </label><br>
          <label for="email">
              <input type="text" id="email">
              Email:
          </label><br>
          <label for="password">
              <input type="text" id="password">
              Write a password:
          </label><br>
          <input type="submit" value="Create your account">
      </form>
    </div>
  </template>
<script>
export default {
  name: 'SignUp',
};
</script>

<style>

</style>
