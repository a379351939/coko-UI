const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    let vm
    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
    it('接收autoClose', (done) => {
      vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接收 closeButton', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭勒',
            callback,
          }
        }
      }).$mount(div)
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭勒')
      closeButton.click()
      expect(callback).to.have.been.called
    })
    it('接收 enableHtml', () => {
      vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount(div)
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接收 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
