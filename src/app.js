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
