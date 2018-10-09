<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'GuluTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren () {
        if(this.$children.length === 0){
          console && console.warn &&
          console.warn('tabs的子组件应当为tabs-head或tabs-body,但你没有写子组件')
        }
      },
      selectedTab () {
        this.$children.forEach((vm) => {
          vm.$children.forEach((vmChild) => {
            if(vmChild.name === this.selected && vmChild.$options.name === 'GuluTabsItem'){
              this.eventBus.$emit('update:selected', this.selected, vmChild)
            }
          })
        })
      }
    },
    mounted () {
      this.checkChildren()
      this.selectedTab()
    },

  }
</script>
<style lang="scss" scoped>
  .tab {

  }
</style>
