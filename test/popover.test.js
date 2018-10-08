const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Popover', () => {
  it('存在', () => {
    expect(Popover).to.exist
  })
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Popover)
    let vm
    afterEach(() => {
      div.remove()
      // vm.$destroy()
    })
    it('接收 value', ()=>{
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount(div)
      // console.log(vm.$el.outerHTML)
      // const inputElement = vm.$el.querySelector('input')
      // expect(inputElement.value).to.equal('1234')
    })
  })
})
