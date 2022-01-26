<template>
  <main>
    <Menu />
    <Unity />
  </main>
</template>

<script>
import Menu from './components/menu/Menu.vue'
import Unity from './components/Unity.vue'
import UnityContext from './UnityContext.js'

export default {
  name: 'App',
  data() {
    return {
      UnityContext: null
    }
  },
  components: {
    Menu,
    Unity
  },
  mounted() {
    UnityContext()
  }
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
