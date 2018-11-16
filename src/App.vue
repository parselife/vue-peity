<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <v-bar></v-bar>
  </div>
</template>

<script>
  import SvgUnsupported from './lib/support/SvgUnsupported'

  export default {
    name: "app",
    components: {SvgUnsupported},
    data() {
      return {
        msg: "Vue-peity"
      };
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
