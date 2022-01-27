class UnityClass {
  constructor(loaderURL, config){
    this.loaderURL = loaderURL,
    this.config = {...config}
  }

  setComponentInstance(unityComponentInstance) {
    this.unityComponent = unityComponentInstance;
  }

  setUnityInstance(unityInstance) {
      this.unityInstance = unityInstance;
  }

  remove() {
    if (
        typeof this.unityInstance !== "undefined" &&
        typeof this.unityInstance.Quit === "function"
    )
        return this.unityInstance.Quit(() => {
            this.triggerUnityEvent("quitted");
            this.unityInstance = undefined;
        });
  }

  send(gameObjectName, methodName, parameter) {
    if (this.unityInstance != null) {
        if (typeof parameter === "undefined") {
            this.unityInstance.SendMessage(gameObjectName, methodName);
        } else {
            this.unityInstance.SendMessage(
                gameObjectName,
                methodName,
                parameter
            );
        }
    }
  }

  on(eventName, eventCallback) {
    this.unityEvents.push({
        eventName: eventName,
        eventCallback: eventCallback
    });

    window.VueUnityWebGL[eventName] = parameter => {
        return eventCallback(parameter);
    };
  }
}

export const UnityContent = new UnityClass(
  "unity/Build/vue_testing.loader.js",
  {
    dataUrl: "unity/Build/vue_testing.data",
    frameworkUrl: "unity/Build/vue_testing.framework.js",
    codeUrl: "unity/Build/vue_testing.wasm",
    symbolsUrl: "unity/Build/vue_testing.symbols.json",
  }
)
