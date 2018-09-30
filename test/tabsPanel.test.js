const expect = chai.expect;
import Vue from 'vue'
import TabsPanel from '../src/tabs/tabsPanel'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsPanel', () => {
  it('存在', () => {
    expect(TabsPanel).to.exist
  })
  // describe('props', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Toast)
  //   let vm
  //   afterEach(() => {
  //     div.remove()
  //     vm.$destroy()
  //   })
  //   it('接收autoClose', (done) => {
  //     vm = new
  //   })
  // })
})
