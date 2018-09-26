<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
    <span class="close" v-if="closeButton" @click="closeButton.callback">
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
        default: 5
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭', callback: (toast) => {
              console.log(toast)
            }
          }
        }
      }
    },
    mounted () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    methods: {
      close () {
        this.$el.remove()
        this.$destroy()
      }
    }
  }
</script>
<style scoped lang="scss">
  $color: white;
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size; height: $toast-height;
    border: 1px solid red; position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    background: $toast-bg; border-radius: 4px; box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px; display: flex; align-items: center; color: $color;
  }

  .line {
    height: 100%;
    border: 1px solid #5f5f5f;
    margin-left: 16px;
  }

  .close {
    padding-left: 16px;
  }
</style>
