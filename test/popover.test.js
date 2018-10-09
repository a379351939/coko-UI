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
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Popover)
    afterEach(() => {
      div.remove()
      // vm.$destroy()
    })
    it('接收 position', (done)=>{
      div.innerHTML = `
  <g-popover position="bottom" ref="a">
    <template slot="content">
      popover内容
    </template>
    <button>点我</button>
  </g-popover>
      `
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(()=> {
        vm.$el.querySelector('button').click()
        vm.$nextTick(()=>{
          expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.equal(true)
          done()
        })
      })
    })
  })
})
