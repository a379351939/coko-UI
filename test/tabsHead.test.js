const expect = chai.expect;
import Vue from 'vue'
import TabsHead from '../src/tabs/tabsHead'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsHead', () => {
  it('存在', () => {
    expect(TabsHead).to.exist
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
