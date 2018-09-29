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
    mounted () {
      // this.$emit('update:selected', 'xxx')
      // this.$emit('update:selected', '这是 this $emit 出来的数据')
      this.$children.forEach((vm) => {
        vm.$children.forEach((vmChild) => {
          if(vmChild.name === this.selected && vmChild.$options.name === 'GuluTabsItem'){
            this.eventBus.$emit('update:selected', this.selected, vmChild)
          }
        })
      })
    },

  }
</script>
<style lang="scss" scoped>
  .tab {

  }
</style>
