<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
          console.log(this.$refs.triggerWrapper)
          document.body.appendChild(this.$refs.contentWrapper)
          let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log(top);
          console.log(left);
          this.$refs.contentWrapper.style.left = left + 'px'
          this.$refs.contentWrapper.style.top = top + 'px'
          if(this.visible === true) {
            let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
              console.log('doc隐藏');
            }
            document.addEventListener('click', eventHandler)
          }
        })
      }
    },
    // mounted(){
    // }
  }
</script>

<style lang="scss">
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
