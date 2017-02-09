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
        title="车主姓名">
      </x-input>
      <x-input
        title="身份证">
      </x-input>
      <cell
        title="手机号">
        <x-input></x-input>
      </cell>
      <cell 
        title="邮箱">
        <x-input></x-input>
      </cell>
      <x-input
        is="cell"
        :is-link="true"
        title="邮寄地址">
        
      </x-input>
      <cell 
        :is-link="true"
        title="初次领驾照日期">
        <x-input></x-input>
      </cell>
    </group>

    <!-- 按钮 -->
    <router-link 
      to="/#">
      <x-button class="next-btn">下一步，车辆信息</x-button>
    </router-link>
  </div>
</template>

<script>  
  import { XHeader, Group, Cell, Radio, XButton, XProgress, XInput } from 'vux'
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

</style>