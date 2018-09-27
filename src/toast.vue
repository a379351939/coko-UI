<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div  v-else v-html="$slots.default[0]"></div>
    </div>
    <span class="line" ref="line"></span>
    <span class="close" v-if="closeButton" @click="onClickClose()">
      {{ closeButton.text }}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 500
      },
      closeButton: {
        type: Object,
        default () {return {text: '关闭', callback: undefined}}
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0
        }
      }
    },
    mounted () {
      this.executeCloseButton()
      this.updateStyle()
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true}
      }
    },
    methods: {
      close () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton === 'function') {
          this.closeButton.callback()
        }
      },
      executeCloseButton () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      updateStyle () {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  $color: white;
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size; min-height: $toast-min-height;
    position: fixed; display: flex; align-items: center; left: 50%;
    background: $toast-bg; border-radius: 4px; box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px; color: $color;
    .line {
      height: 100%;
      border: 1px solid #5f5f5f;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .message {
      padding: 8px 0;
    }
    &.position-top {
      top: 0; transform: translateX(-50%);
    }
    &.position-middle {
      top: 50%; transform: translate(-50%,-50%);
    }
    &.position-bottom {
      bottom: 0; transform: translateX(-50%);
    }
  }
</style>
