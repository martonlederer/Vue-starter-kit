<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <div>

      <h1>Vuex</h1>

      Example: {{example}} <br>
      This will set the example variable in the store to the value of the input below <br>
      <input type="text" v-model="example_val">
      <button @click="add">ADD_SOMETHING</button>
      <br>
      Loaded: {{loadedExample}} <br>
      This will wait a second and load the value <br>
      <button @click="load">loadSomething</button>

    </div>

  </div>

</template>

<script>

  export default {

    name: 'HelloWorld',
    data () {

      return {

        msg: 'Welcome to Your Vue.js App',
        example_val: ''

      }

    },
    computed: {

      example () {

        return this.$store.getters.example

      },
      loadedExample () {

        return this.$store.getters.loadedState

      }

    },
    methods: {

      add () {

        this.$store.commit('ADD_SOMETHING', this.example_val)

      },
      load () {

        this.$store.dispatch('loadSomething')

      }

    }

  }

</script>

<style lang="sass" scoped>

  h1, h2
    font-weight: normal

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983

</style>
