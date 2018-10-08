<template>
  <div class="popover" ref="popover">
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
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    mounted () {
      if(this.trigger === 'click') {
        this.$refs.popover.addEventListener('click',this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed () {
      if(this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click',this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {top, left, height, width} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {
            left: left + scrollX + 'px',
            top: top + scrollY + 'px'
          },
          bottom: {
            left: left + scrollX + 'px',
            top: top + height + scrollY + 'px'
          },
          left: {
            left: left + scrollX + 'px',
            top:  top + scrollY + (height - height2) / 2 + 'px'
          },
          right: {
            left: left + width + scrollX + 'px',
            top: top + scrollY + (height - height2) / 2 + 'px'
          }
        }
        contentWrapper.style.left = positions[this.position].left
        contentWrapper.style.top = positions[this.position].top
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
      onClick (event) {
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
