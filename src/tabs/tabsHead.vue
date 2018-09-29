<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected', (item, vm) => {
        let vmAttr = vm.$el.getBoundingClientRect()
        console.log(vmAttr.left)
        this.$refs.line.style.left = `${vmAttr.left}px`
        this.$refs.line.style.width = `${vmAttr.width}px`
      })
    }
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: $blue solid 1px;
    }

    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
