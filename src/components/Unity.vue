<template>
  <canvas 
    id="unity-canvas" 
    style="background-color: grey;" 
    class="unity-wrapper"
  />
</template>

<script>
   import UnityContext from '../../utils/UnityContext'

  export default {
    name: 'Unity',
    beforeMount() {
      UnityContext.loadScript()
    }
  }

</script>

<style>
.unity-wrapper {
  height: 100%;
  width: 70%;
}
</style>