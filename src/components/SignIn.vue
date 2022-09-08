<template>
  <h1>Go to your account!</h1>
  <div>
    <form>
        <label for="email">
            <input type="text" id="email">
            Email:
        </label><br>
        <label for="password">
            <input type="text" id="password">
            Password:
        </label><br>
        <input type="submit" value="Sign in">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>

<style>

</style>
