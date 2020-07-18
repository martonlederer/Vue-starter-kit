<template>

  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/about">Test vue router: /about</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>

</template>

<script>

  import HelloWorld from '@/components/HelloWorld.vue'

  export default {

    name: 'Home',
    components: {

      HelloWorld

    }

  }

</script>

<style lang="sass" scoped>

  .home
    display: block

</style>
