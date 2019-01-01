<template>
  <div class="example-box">
    <c-tabs selected="2">
      <c-tabs-head>
        <c-tabs-item name="1">1</c-tabs-item>
        <c-tabs-item name="2">2</c-tabs-item>
      </c-tabs-head>
      <c-tabs-body>
        <c-tabs-panel name="1">content 1</c-tabs-panel>
        <c-tabs-panel name="2">content 2</c-tabs-panel>
      </c-tabs-body>
    </c-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs/tabs'
  import TabsBody from '../../../src/tabs/tabsBody'
  import TabsHead from '../../../src/tabs/tabsHead'
  import TabsItem from '../../../src/tabs/tabsItem'
  import TabsPanel from '../../../src/tabs/tabsPanel'

  export default {
    components: {
      'c-tabs': Tabs,
      'c-tabs-body': TabsBody,
      'c-tabs-head': TabsHead,
      'c-tabs-item': TabsItem,
      'c-tabs-panel': TabsPanel
    },
    data () {
      return {
        content: `
          <c-tabs selected="2">
            <c-tabs-head>
              <c-tabs-item name="1">1</c-tabs-item>
              <c-tabs-item name="2">2</c-tabs-item>
            </c-tabs-head>
            <c-tabs-body>
              <c-tabs-panel name="1">content 1</c-tabs-panel>
              <c-tabs-panel name="2">content 2</c-tabs-panel>
            </c-tabs-body>
          </c-tabs>
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