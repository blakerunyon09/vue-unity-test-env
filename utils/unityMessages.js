import  { UnityContent } from '../src/UnityContext'

export function loadProblemToCanvas(jsonObject) {
  if (jsonObject) {
    const jsonString =
      typeof jsonObject !== 'string' ? JSON.stringify(jsonObject) : jsonObject;
      UnityContent.send('JSCaller', 'LoadProblemToCanvas', jsonString);
  }
}