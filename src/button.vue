<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <c-icon v-if="icon && !loading" :name="icon" class="icon"></c-icon>
    <c-icon class="loading icon" name="loading" v-if="loading"></c-icon>
    <div class="g-button-content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import Vue from 'vue'
  import Icon from './icon'
  Vue.component('c-icon', Icon)

  export default {
    // props:['icon', 'iconPosition']
    component: {
      'c-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius:  $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
    &:hover {
      border-color: $border-color-hover
    }
    &:active {
      background-color: $button-active-bg
    }
    &:focus {
      outline: none;
    }
    > .icon{
      order: 1; margin-right: .3em;
    }
    > .g-button-content{
      order: 2;
    }

    &.icon-right{
      > .g-button-content{
        order: 1;
      }
      > .icon{
        order: 2; margin-left: .3em; margin-right: 0;
      }
    }
    .loading{
      animation: spin 1.5s infinite linear;
    }
  }
</style>
