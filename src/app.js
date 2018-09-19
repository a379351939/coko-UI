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

const expect = chai.expect

// 单元测试
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//
//   button.$mount('#test')
//   let useElement = button.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
// }
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
}
{
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    button.$mount()
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq(1)
  }
}
