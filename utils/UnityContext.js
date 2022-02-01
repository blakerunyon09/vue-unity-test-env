class UnityClass {
  constructor(loaderURL, config){
    this.loaderURL = loaderURL,
    this.config = {...config}
  }

  loadScript() {
      const unityScript = document.createElement("script");
      unityScript.async = true;
      unityScript.src = this.loaderURL;
      unityScript.onload = () => {
          const canvas = document.querySelector('#unity-canvas')
          window.createUnityInstance(canvas, this.config)
              .then((instance) => this.setUnityInstance(instance))
      };
      document.querySelector('body').appendChild(unityScript);
  }

  setUnityInstance(unityInstance) {
    this.unityInstance = unityInstance;
  }

  send(gameObjectName, methodName, param) {
    this.unityInstance.SendMessage(gameObjectName, methodName, param);
  }
}

export default new UnityClass(
  "unity/Build/vue_testing.loader.js",
  {
    dataUrl: "unity/Build/vue_testing.data",
    frameworkUrl: "unity/Build/vue_testing.framework.js",
    codeUrl: "unity/Build/vue_testing.wasm",
    symbolsUrl: "unity/Build/vue_testing.symbols.json",
  }
)
