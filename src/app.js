import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from  './group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-group', Group)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message: ''
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    }
  }
});


import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
