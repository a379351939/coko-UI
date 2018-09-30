const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs/tabsItem'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.exist
  })
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(TabsItem)
    let vm
    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
    it('接收name', () => {
      vm = new Constructor({
        propsData:{
          name: 'test'
        }
      }).$mount(div)
      expect(vm.$el.getAttribute('data-name')).to.eq('test')
    })
    it('接收disable', () => {
      vm = new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('disabled')).to.eq(true)
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })
  })
})
