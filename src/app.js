import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from  './group'
import Input from './input'
import Row from './row'
import Col from  './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Footer from './layout/footer'
import Content from  './layout/content'
import Side from './layout/side'
import Toast from './toast'
import Tabs from './tabs/tabs'
import TabsBody from './tabs/tabsBody'
import TabsHead from './tabs/tabsHead'
import TabsItem from './tabs/tabsItem'
import TabsPanel from './tabs/tabsPanel'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-group', Group)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-side', Side)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message: ''
  },
  methods: {
    // inputChange (e) {
    //   console.log(e.target.value)
    // },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast (position) {
      this.$toast(`${parseInt(Math.random() * 10000)}知道不`, {
        position,
        closeButton: {
          text: '知道了',
          callback() {console.log('说他知道了')}
        }
      })
    },
  },
  // created () {
  //   console.log(this)
  // }
});


import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
