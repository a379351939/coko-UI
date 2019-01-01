<template>
  <div class="example-box">
    <c-button-group>
      <c-button icon="left">向前</c-button>
      <c-button>更多</c-button>
      <c-button icon="right" icon-position="right">向后</c-button>
    </c-button-group>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/group'

  export default {
    components: {
      'c-button': Button,
      'c-button-group': ButtonGroup
    },
    data () {
      return {
        content: `
          <c-button-group>
            <c-button icon="left">向前</c-button>
            <c-button>更多</c-button>
            <c-button icon="right" icon-position="right">向后</c-button>
          </c-button-group>
        `.replace(/^ {10}/gm, '').trim()
      }
    }
  }
</script>
<style scoped>
  .example-box {
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    padding: 1.5em 2em 1em 2em;
    margin: 1em 0;
  }
</style>