<template>
  <div class="tabs-item" :class="classes" @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created(){
      if(this.eventBus){
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    },
    methods:{
      onClick(){
        if (this.disabled) {return}
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('TabItemClick', this)
      }
    }
  }
</script>


<style lang="scss" scoped>
  $blue: blue;
  $disabled-color: #ccc;
  .tabs-item {
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
    }
    &.disabled {
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>
