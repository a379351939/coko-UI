<template>
  <div class="g-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted(){
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if(name !== 'button') {
          console.warn(`group的子组件应全是g-button，但你写的却是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss">
  $border-radius: 4px;
  .g-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        z-index: 1;
      }
    }
  }
</style>

