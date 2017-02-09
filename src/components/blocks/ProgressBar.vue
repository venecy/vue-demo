<template>
  <div class="weui_progress progress-bar">
    <div class="weui_progress_bar">
      <div class="weui_progress_inner_bar" 
        :style="{width: percent + '%'}">
        <slot></slot>
      </div>
    </div>
    <a href="javascript:;" class="weui_progress_opr" 
      v-show="showCancel">
      <i class="weui_icon_cancel" 
        @click="cancel">
      </i>
    </a>
  </div>
</template>

<script>

export default {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
// @import '../../styles/weui/widget/weui_progress/weui_progress';
</style>



<style lang="stylus">
$height = 20px
.progress-bar
  .weui_icon_cancel:before
    color #c7cace
    font-size $height

  .weui_progress_bar
    background-color #fff
    height $height

  .weui_progress_opr
    position absolute
    right 5px

  .weui_progress_inner_bar
    background-color #DFDFDF
</style>