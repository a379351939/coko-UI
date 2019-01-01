<template>
  <div class="row" :style=rowStyle>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Row',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle () {
        let {gutter} = this
        return{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}
      }
    }
  }
</script>
<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>
