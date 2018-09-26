const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })
  describe('props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    let vm
    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
    it('接收 span 属性', () => {
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('col-1')).to.equal(true)
    })
    it('接收 offset 属性', () => {
      vm = new Constructor({
        propsData: {
          offset: 2
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('offset-2')).to.equal(true)
    })
    it('接收 ipad 属性', () => {
      vm = new Constructor({
        propsData: {
          ipad: {span: 1, offset: 2}
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('col-ipad-1')).to.equal(true)
      expect(Element.classList.contains('offset-ipad-2')).to.equal(true)
    })
    it('接收 narrowPc 属性', () => {
      vm = new Constructor({
        propsData: {
          narrowPc: {span: 1, offset: 2}
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('col-narrow-pc-1')).to.equal(true)
      expect(Element.classList.contains('offset-narrow-pc-2')).to.equal(true)
    })
    it('接收 pc 属性', () => {
      vm = new Constructor({
        propsData: {
          pc: {span: 1, offset: 2}
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('col-pc-1')).to.equal(true)
      expect(Element.classList.contains('offset-pc-2')).to.equal(true)
    })
    it('接收 widePc 属性', () => {
      vm = new Constructor({
        propsData: {
          widePc: {span: 1, offset: 2}
        }
      }).$mount(div)
      const Element = vm.$el
      expect(Element.classList.contains('col-wide-pc-1')).to.equal(true)
      expect(Element.classList.contains('offset-wide-pc-2')).to.equal(true)
    })
  })
})
