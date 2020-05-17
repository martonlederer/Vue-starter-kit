<template>

  <div id="app">

    <img src="static/img/logo.png">
    <router-view />

  </div>

</template>

<script>

  export default {

    name: 'App'

  }

</script>

<style lang="sass">

  body
    margin: 0

  ::selection
    background: $primary
    color: #fff

  ::-moz-selection
    background: $primary
    color: #fff

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: $primary
    margin-top: 60px

    @media screen and (max-width: $mobileScreenMaxWidth)
      display: block /** example val **/

</style>
