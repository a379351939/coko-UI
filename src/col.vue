<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if(!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'Col',
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      ipad: { type: Object, validator},
      narrowPc: { type: Object, validator},
      pc: { type: Object, validator},
      widePc: { type: Object, validator},
    },
    data () {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass () {
        let {span, offset, ipad, narrowPc, pc, widePc} = this
        let createElement = (obj, str='') => {
          if (!obj) {return []}
          let array = []
          if (obj.span) {
            array.push(`col-${str}${obj.span}`)
          }
          if (obj.offset) {
            array.push(`offset-${str}${obj.offset}`)
          }
          return array
        }
        return [
          // span && `col-${span}`,
          // offset && `offset-${offset}`,
          // ipad && `col-ipad-${ipad.span}`,
          // narrowPc && `col-narrow-pc-${narrowPc.span}`,
          // pc && `col-pc-${pc.span}`,
          // widePc && `col-wide-pc-${widePc.span}`,
          ...createElement({span, offset}),
          ...createElement(ipad, 'ipad-'),
          ...createElement(narrowPc, 'narrow-pc-'),
          ...createElement(pc, 'pc-'),
          ...createElement(widePc, 'wide-pc-')
        ]
      },
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .col{
    box-sizing: border-box;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px)  {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px)  {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
