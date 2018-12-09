<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gulu-collapseItem",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        show: false,
        single:false
      }
    },
    inject: ['eventBus'],
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        this.show = names.indexOf(this.name) >= 0;
      })
    },
    methods: {
      toggle () {
        if(this.show) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      border: 1px solid $grey;
      margin: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    .content {
      padding: 8px;
    }
  }

</style>
