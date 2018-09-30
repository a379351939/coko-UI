const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsBody from '../src/tabs/tabsBody'
import TabsHead from '../src/tabs/tabsHead'
import TabsItem from '../src/tabs/tabsItem'
import TabsPanel from '../src/tabs/tabsPanel'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Tabs)
    let vm
    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
    it('接收selected', (done) => {
      div.innerHTML = `
        <g-tabs :selected="'infoTech'">
          <g-tabs-head>
            <g-tabs-item name="infoTech"> IT </g-tabs-item>
            <g-tabs-item name="sports">体育 </g-tabs-item>
            <g-tabs-item name="finance">财经 </g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-panel name="infoTech"> IT相关 </g-tabs-panel>
            <g-tabs-panel name="sports"> 体育相关 </g-tabs-panel>
            <g-tabs-panel name="finance"> 财经相关 </g-tabs-panel>
          </g-tabs-body>
        </g-tabs>
      `
      vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let x = vm.$el.querySelector(`.tabs-item[data-name="infoTech"]`)
        expect(x.classList.contains('active')).to.eq(true)
        done()
      })
    })
  })
})
