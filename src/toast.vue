<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span class="close" v-if="closeButton" @click="onClickClose()">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Toast',
      props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5,
        validator (value) {
          return value === false || typeof value === 'number'
        }
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
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      },
      executeCloseButton () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
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
<style lang="scss" scoped>
  $color: white;
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $animation-duration: 500ms;

  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%)}
    100% {opacity: 1; transform: translateY(0%)}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%)}
    100% {opacity: 1; transform: translateY(0%)}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      z-index: 20;
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-middle {
      top: 50%; transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height;
    display: flex; align-items: center;
    background: $toast-bg; border-radius: 4px; box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px; color: $color; width: 288px;
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
      width: 225px;
      display: flex;
      justify-content: center;
    }
  }
</style>
