<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data () {
      return {
        visible: false
      }
    },
    methods: {
      xxx () {
        this.visible = !this.visible;
        this.$nextTick( ()=>{
          if(this.visible === true) {
            let x = () => {
              this.visible = false
              document.removeEventListener('click', x)
              console.log('doc隐藏');
            }
            document.addEventListener('click', x)
          }else{
            console.log('vm隐藏')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid;
      box-shadow: 0 0 3px rgba(0,0,0,.5);
    }
  }
</style>
