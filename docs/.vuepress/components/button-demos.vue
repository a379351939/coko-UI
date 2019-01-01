<template>
  <div class="example-box">
    <c-button>默认按钮</c-button>
    <c-button icon="settings">默认按钮</c-button>
    <c-button icon="download" iconPosition="right">默认按钮</c-button>
    <c-button :loading="true" >默认按钮</c-button>
    <c-button disabled>默认按钮</c-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'c-button': Button
    },
    data () {
      return {
        content: `
          <c-button>默认按钮</c-button>
          <c-button icon="settings">默认按钮</c-button>
          <c-button icon="download" iconPosition="right">默认按钮</c-button>
          <c-button :loading="true">默认按钮</c-button>
          <c-button disabled>默认按钮</c-button>
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