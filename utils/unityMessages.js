import  UnityContext from '../utils/UnityContext'

export function loadProblemToCanvas(jsonObject) {
  if (jsonObject) {
    const jsonString =
      typeof jsonObject !== 'string' ? JSON.stringify(jsonObject) : jsonObject;
      UnityContext.send('JSCaller', 'LoadProblemToCanvas', jsonString);
  }
}