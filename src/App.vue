<template>
  <main>
    <Menu />
    <Unity :unity-content="UnityContent" />
  </main>
</template>

<script>
import Menu from './components/menu/Menu.vue'
import Unity from './components/Unity.vue'
import  { UnityContent } from './UnityContext'

export default {
  name: 'App',
  data() {
    return {
      UnityContent
    }
  },
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
