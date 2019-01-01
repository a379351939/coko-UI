<template>
  <div class="example-box">
    <c-icon name="settings"></c-icon>
    <c-icon name="awesome"></c-icon>
    <c-icon name="download"></c-icon>
    <c-icon name="error"></c-icon>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Icon from '../../../src/icon'

  export default {
    components: {
      'c-icon': Icon
    },
    data () {
      return {
        content: `
          <c-icon name="settings"></c-icon>
          <c-icon name="awesome"></c-icon>
          <c-icon name="download"></c-icon>
          <c-icon name="error"></c-icon>
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