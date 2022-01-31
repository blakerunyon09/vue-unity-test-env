export function initMathJax() {
  if (!window.MathJax) {
    const script = document.createElement('script')
    script.src =
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    script.async = true
    document.head.appendChild(script)
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    }
  }
}

export function renderMathJax() {
  if(window.MathJax?.typeset) window.MathJax.typeset()
}
