export default function UnityContext() {
  const canvas = document.querySelector("#unity-canvas");

  const loaderUrl = "unity/Build/vue_testing.loader.js";
  const config = {
    dataUrl: "unity/Build/vue_testing.data",
    frameworkUrl: "unity/Build/vue_testing.framework.js",
    codeUrl: "unity/Build/vue_testing.wasm",
    symbolsUrl: "unity/Build/vue_testing.symbols.json",
  };

  const script = document.createElement("script");
  script.src = loaderUrl;
  document.body.appendChild(script);

  script.addEventListener('load', async () => {
    window.createUnityInstance(canvas, config)
  })
}
