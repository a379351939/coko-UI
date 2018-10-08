<template>
  <div class="popover" @click="onclick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let {top, left, height, width} = triggerWrapper.getBoundingClientRect()
        let {height: height2} = contentWrapper.getBoundingClientRect()
        if(this.position === 'top') {
          contentWrapper.style.left = left + scrollX + 'px'
          contentWrapper.style.top = top + scrollY + 'px'
        }else if(this.position === 'bottom') {
          contentWrapper.style.left = left + scrollX + 'px'
          contentWrapper.style.top = top + height + scrollY + 'px'
        }else if(this.position === 'left') {
          contentWrapper.style.left = left + scrollX + 'px'
          contentWrapper.style.top = top + scrollY + (height - height2) / 2 + 'px'
        }else if(this.position === 'right') {
          contentWrapper.style.left = left + width + scrollX + 'px'
          contentWrapper.style.top = top + scrollY + (height - height2) / 2 + 'px'
        }
      },
      onClickDocument (event) {
        if (this.$refs.popover &&
          (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
        ) { return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))
        ) { return }
        this.close ()
      },
      open () {
        this.visible = true
        this.$nextTick( ()=>{
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onclick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    },
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
    border-radius: var(--border-radius);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        border-left-color: black;
        left: 100%;
      }
      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before,&::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        border-right-color: black;
        right: 100%;
      }
      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>
