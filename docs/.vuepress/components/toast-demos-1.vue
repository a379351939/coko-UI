<template>
  <div class="example-box">
    <div>
      <c-button @click="$toast('点击弹出')">top</c-button>
      <c-button @click="$toast('点击弹出提示', {position:'middle'})">middle</c-button>
      <c-button @click="$toast('点击弹出提示', {position:'bottom'})">bottom</c-button>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {
      'c-button': Button,
    },
    data () {
      return {
        content: `
          <c-button @click="$toast('点击弹出')">top</c-button>
          <c-button @click="$toast('点击弹出提示', {position:'middle'})">middle</c-button>
          <c-button @click="$toast('点击弹出提示', {position:'bottom'})">bottom</c-button>
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