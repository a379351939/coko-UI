<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disable: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    created(){
      // console.log('爷给孙')
      // console.log(this.eventBus)
      this.eventBus.$on('update:selected', (name,vm) => {
        this.active = name === this.name

      })
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: blue;
  .tabs-item {
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
    }
  }


</style>
