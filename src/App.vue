<template>
  <main>
    <Menu />
    <Unity />
  </main>
</template>

<script>
  import Menu from './components/menu/Menu.vue'
  import Unity from './components/Unity.vue'

  export default {
    name: 'App',
    components: {
      Menu,
      Unity
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    display: flex;
    height: 100vh;
  }
</style>
