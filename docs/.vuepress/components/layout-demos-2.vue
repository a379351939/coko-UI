<template>
  <div class="example-box">
    <c-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <c-header style="height: 50px; background:#7cbce9;">
        header
      </c-header>
      <c-layout>
        <c-side style="height: 100px; background:#3a9fe8; width:200px; color: white;">
          side
        </c-side>
        <c-content style="height: 100px; background:#0f8de9;">
          content
        </c-content>
      </c-layout>
      <c-footer style="height: 50px; background:#7cbce9;">
        footer
      </c-footer>
    </c-layout>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Content from '../../../src/layout/content'
  import Footer from '../../../src/layout/footer'
  import Header from '../../../src/layout/header'
  import Layout from '../../../src/layout/layout'
  import Side from '../../../src/layout/side'

  export default {
    components: {
      'c-content': Content,
      'c-footer': Footer,
      'c-header': Header,
      'c-layout': Layout,
      'c-side': Side,

    },
    data () {
      return {
        content: `
          <c-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <c-header style="height: 50px; background:#7cbce9;">
              header
            </c-header>
            <c-layout>
              <c-side style="height: 100px; background:#3a9fe8; width:200px; color: white;">
                side
              </c-side>
              <c-content style="height: 100px; background:#0f8de9;">
                content
              </c-content>
            </c-layout>
            <c-footer style="height: 50px; background:#7cbce9;">
              footer
            </c-footer>
          </c-layout>
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