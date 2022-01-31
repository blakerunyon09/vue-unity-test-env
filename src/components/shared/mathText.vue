<template>
  <span v-html="this.text" ref="mjtext" />
</template>

<script>
  import { initMathJax, renderMathJax } from '../../../utils/mathJax'

  export default {
    name: 'MathText',
    props: ['text'],
    beforeMount() {
      initMathJax()
    },
    mounted() {
      renderMathJax()
    }
  }

</script>
