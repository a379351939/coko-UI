<template>
  <div class="example-box">
    <div>
      <c-button @click="onClickButton">top</c-button>
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
          <c-button @click="onClickButton">top</c-button>

          methods: {
            onClickButton () {
              this.$toast('你知道么', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('知道知道了')
                  }
                }
              })
            }
          },
        `.replace(/^ {10}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('你知道么', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('知道知道了')
            }
          }
        })
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
</style>