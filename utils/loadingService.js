import { loggingService } from "./loggingService";

export default class UnityLoaderService{
  constructor() {
      this.DOM = document.querySelector('body');
  }

  append(source, onLoad) {
      if (typeof this.unityLoaderScript !== "undefined")
          if (source === this.unityLoaderScript.src) {
              return onLoad();
          } else {
              this.unityLoaderScript.remove();
          }

      window
          .fetch(source)
          .then(_response => {
              if (_response.status >= 400)
                  return loggingService.errorUnityLoaderNotFound(
                      _response.status
                  );
              _response
                  .text()
                  .then(_text => {
                      if (_text.trim().charAt(0) === "<")
                          return loggingService.errorUnityLoaderNotFound(
                              "error doc"
                          );
                      this.unityLoaderScript = document.createElement(
                          "script"
                      );
                      this.unityLoaderScript.type = "text/javascript";
                      this.unityLoaderScript.async = true;
                      this.unityLoaderScript.src = source;
                      this.unityLoaderScript.onload = () => {
                          if (typeof window.createUnityInstance === "undefined")
                              return loggingService.errorUnityLoaderNotFound();
                          onLoad();
                      };
                      this.DOM.appendChild(this.unityLoaderScript);
                  })
                  .catch(_reason =>
                      loggingService.errorUnityLoaderNotFound(_reason)
                  );
          })
          .catch(_reason => loggingService.errorUnityLoaderNotFound(_reason));
  }
}