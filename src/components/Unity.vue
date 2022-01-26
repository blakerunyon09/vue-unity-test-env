<template>
  <canvas 
    id="unity-canvas" 
    style="background-color: grey;" 
    class="unity-wrapper"
  />
</template>

<script>
export default {
  name: 'Unity',
  // mounted() {
  //   const canvas = document.querySelector("#unity-canvas");

  //   const loaderUrl = "unity/Build/vue_testing.loader.js";
  //   const config = {
  //     dataUrl: "unity/Build/vue_testing.data",
  //     frameworkUrl: "unity/Build/vue_testing.framework.js",
  //     codeUrl: "unity/Build/vue_testing.wasm",
  //     symbolsUrl: "unity/Build/vue_testing.symbols.json",
  //   };

  //   const script = document.createElement("script");
  //   script.src = loaderUrl;
  //   script.addEventListener('load', () => {
  //     window.createUnityInstance(canvas, config)
  //   })
    
  //   document.body.appendChild(script);
  // }
}
</script>

<style>
.unity-wrapper {
  height: 100%;
  width: 70%;
}
</style>