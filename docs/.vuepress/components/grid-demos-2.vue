<template>
  <div class="example-box">
    <c-row class="demoRow" gutter="10">
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
      <c-col span="8">
        <div class="demoCol">8</div>
      </c-col>
    </c-row>

    <c-row class="demoRow" gutter="10">
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
      <c-col span="6">
        <div class="demoCol">6</div>
      </c-col>
    </c-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'c-col': Col,
      'c-row': Row,
    },
    data () {
      return {
        content: `
          <c-row class="demoRow" gutter="10">
            <c-col span="8">
              <div class="demoCol">8</div>
            </c-col>
            <c-col span="8">
              <div class="demoCol">8</div>
            </c-col>
            <c-col span="8">
              <div class="demoCol">8</div>
            </c-col>
          </c-row>

          <c-row class="demoRow" gutter="10">
            <c-col span="6">
              <div class="demoCol">6</div>
            </c-col>
            <c-col span="6">
              <div class="demoCol">6</div>
            </c-col>
            <c-col span="6">
              <div class="demoCol">6</div>
            </c-col>
            <c-col span="6">
              <div class="demoCol">6</div>
            </c-col>
          </c-row>
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
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
</style>
