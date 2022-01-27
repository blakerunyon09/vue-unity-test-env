<template>
  <canvas 
    id="unity-canvas" 
    style="background-color: grey;" 
    class="unity-wrapper"
  />
</template>

<script>
  import UnityLoaderService from '../../utils/loadingService'

  export default {
    name: 'Unity',
    props: ['unityContent'],
    data() {
      return {
        unityLoaderService: new UnityLoaderService(),
      }
    },
    mounted() {
      this.unityLoaderService.append(
        this.unityContent.loaderURL,
        () => {
          const canvas = document.querySelector('#unity-canvas')
          window.createUnityInstance(canvas, this.unityContent.config)
            .then((instance) => this.unityContent.setUnityInstance(instance))
        }
      )
    }
  }

</script>

<style>
.unity-wrapper {
  height: 100%;
  width: 70%;
}
</style>