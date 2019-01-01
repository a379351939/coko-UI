<template>
  <div class="example-box">
    <c-input class="input-style" disabled value="a"></c-input>
    <c-input class="input-style" readonly value="b"></c-input>
    <c-input class="input-style" value="c"></c-input>
    <c-input class="input-style" value="d" error="姓名不少于二个字"></c-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'c-input': Input,
    },
    data () {
      return {
        message: 'aaa',
        content: `
          <c-input disabled value="a"></c-input>
          <c-input readonly value="b"></c-input>
          <c-input value="c"></c-input>
          <c-input value="d" error="姓名不少于二个字"></c-input>
        `.replace(/^ {10}/gm, '').trim()
      }
    },
  }
</script>
<style scoped>
  .example-box {
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    padding: 1.5em 2em 1em 2em;
    margin: 1em 0;
  }
  .input-style {
    margin: 5px 5px 5px 0;
  }
</style>