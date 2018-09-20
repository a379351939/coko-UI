import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from  './group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-group', Group);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false
  }
});

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })

  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let spy = chai.spy(function () {})

  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
  // button.$el.remove()
  // button.$destroy()
}
