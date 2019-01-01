<template>
  <div class="example-box">
    <c-popover>
      <c-button>上方弹出</c-button>
      <template slot="content">弹出内容
      </template>
    </c-popover>
    <c-popover position="bottom">
      <c-button>下方弹出</c-button>
      <template slot="content">弹出内容
      </template>
    </c-popover>
    <c-popover position="left">
      <c-button>左边弹出</c-button>
      <template slot="content">弹出内容
      </template>
    </c-popover>
    <c-popover position="right">
      <c-button>右边弹出</c-button>
      <template slot="content">弹出内容
      </template>
    </c-popover>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components: {
      'c-popover': Popover,
      'c-button': Button
    },
    data () {
      return {
        content: `
          <c-popover>
            <c-button>上方弹出</c-button>
            <template slot="content">弹出内容
            </template>
          </c-popover>
          <c-popover position="bottom">
            <c-button>下方弹出</c-button>
            <template slot="content">弹出内容
            </template>
          </c-popover>
          <c-popover position="left">
            <c-button>左边弹出</c-button>
            <template slot="content">弹出内容
            </template>
          </c-popover>
          <c-popover position="right">
            <c-button>右边弹出</c-button>
            <template slot="content">弹出内容
            </template>
          </c-popover>
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
</style>