<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Layout',
    data () {
      return {
        layoutClass: {
          hasSide: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'Side') {
          this.layoutClass.hasSide = true
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSide {
      flex-direction: row;
    }
  }
</style>
