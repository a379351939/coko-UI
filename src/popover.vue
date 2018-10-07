<template>
  <div class="popover" @click="onclick">
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
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      listenToDocument() {
        if(this.visible === true) {
          let eventHandler = (event) => {
            if (!this.$refs.contentWrapper.contains(event.target)) {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
          }
          document.addEventListener('click', eventHandler)
        }
      },
      onShow () {
        this.$nextTick( ()=>{
          this.positionContent()
          this.listenToDocument()
        })
      },
      onclick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          this.visible = !this.visible;
          if (this.visible === true) {
            this.onShow()
          }
        }
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
  }
  .content-wrapper {
    position: absolute;
    left: 0;
    border: 1px solid;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    transform: translateY(-100%);
  }
</style>
