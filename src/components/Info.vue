<template>
  <div class="info-page" data-page="info-page">
    <!-- navbar -->
    <x-header
      title="个人信息"
      :left-options="navbar.leftOptions">
    </x-header>

    <!-- 进度条 -->
    <progress-bar
      v-if="status.progressShowing"
      @on-cancel="closeProgress"
      :percent="50">
      <div class="progress-span">
        <span>信息填写</span>
        <span>50%</span>
      </div>
    </progress-bar>

    <!-- 表单 -->
    <group class="form-area">
      <x-input
        title="车主姓名"
        is-type="china-name">
      </x-input>
      <x-input
        title="身份证"
        :min="15"
        :max="18">
      </x-input>
      <x-input
        title="手机号"
        :max="11"
        is-type="china-mobile">
      </x-input>
      <x-input
        title="邮箱">
      </x-input>
      <x-input
        is="cell"
        :is-link="true"
        title="邮寄地址">
      </x-input>
      <datetime
        title="初次领驾照日期"
        cancel-text="取消"
        confirm-text="完成">
      </datetime>
    </group>

    <!-- 按钮 -->
    <router-link 
      to="/#">
      <x-button class="next-btn">下一步，车辆信息</x-button>
    </router-link>
  </div>
</template>

<script>  
  import { XHeader, Group, Cell, Radio, XButton, XProgress, XInput, Datetime } from 'vux'
  import Blocks from './blocks'

  export default {
    name: 'info-page',
    components: {
      XHeader,
      Group,
      Cell,
      Radio,
      XButton,
      XProgress,
      XInput,
      Datetime,
      ...Blocks
    },
    data () {
      return {
        navbar: {
          leftOptions: {
            backText: '',
            showBack: true,
            preventGoBack: false
          }
        },
        status: {
          progressShowing: true,
        }
      }
    },
    methods: {
      closeProgress() {
        this.status.progressShowing = false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/css/variable'

  .progress-span
    display flex
    justify-content space-between
    padding 1px 15px
    font-size 13px
    color #555

  .form-area
    margin 10px 0

    .weui_input
      text-align right

    .weui_cell
      height 36px

  .dp-header .dp-item
    color $m-color!important

</style>