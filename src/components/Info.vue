<template>
  <div class="info-page" data-page="info-page">
    <!-- navbar -->
    <x-header
      title="个人信息"
      :left-options="navbar.leftOptions">
    </x-header>

    <!-- 进度条 -->
    <progress-bar
      v-if="progressShowing"
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
        v-model="info.carOwner.name"
        is-type="china-name">
      </x-input>
      <x-input
        title="身份证"
        v-model="info.carOwner.identifyNumber"
        :min="15"
        :max="18">
      </x-input>
      <x-input
        title="手机号"
        :min="11"
        :max="11"
        keyboard="number"
        v-model="info.carOwner.phone"
        is-type="china-mobile">
      </x-input>
      <x-input
        title="邮箱"
        v-model="info.carOwner.eMail"
        is-type="email">
      </x-input>
      <cell 
        title="邮寄地址"
        link="/address" 
        :is-link="true">
        <span>{{taAreaCode}}<br v-if="address">{{address}}</span>
      </cell>
      <datetime
        title="初次领驾照日期"
        v-model="info.carOwner.acceptLicenseDate"
        cancel-text="取消"
        confirm-text="完成">
      </datetime>
    </group>

    <!-- 按钮 -->
    <router-link 
      to="#">
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
        progressShowing: true,
      }
    },
    methods: {
      closeProgress() {
        this.status.progressShowing = false
      }
    },
    watch: {
      info: {
        deep: true,
        handler(newVal, oldVal) {
          this.$store.commit('updateCarOwner', newVal)
        }
      },
    },
    computed: {
      info() {
        return this.$store.state.info
      },
      status() {
        return this.$store.state.status
      },
      address() {
        let add = this.$store.state.info.carOwner.address
        return add
      },
      taAreaCode() {
        let ta = this.$store.state.info.taAreaCode
        return ta.split(' ').join(',')
      }
    },
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

</style>