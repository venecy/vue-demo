<template>
  <div class="start-page" data-page="start-page">
    <!-- navbar -->
    <x-header
      title="保险信息"
      :left-options="navbar.leftOptions">
      <span slot="right">历史查询</span>
    </x-header>

    <!-- 投保城市: areaCode -->
    <group class="area-code-group">
      <cell 
        title="投保城市"
        :is-link="true">
      </cell>
    </group>

    <!-- 牌照: carNumber -->
    <group class="car-number-group">
      <radio class="car-number"
        v-model="status.hasLicense"
        :options="radioGroup.options"> 
      </radio>
      <vehicle-id
        v-show="license"
        v-model="info.car.carNumber">
      </vehicle-id>
    </group>

    <!-- 按钮 -->
    <router-link 
      to="/info">
      <x-button class="next-btn">下一步，个人信息</x-button>
    </router-link>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, Radio, XButton } from 'vux'
  import Blocks from './blocks'

  export default {
    name: 'start-page',
    components: {
      XHeader,
      Group,
      Cell,
      Radio,
      XButton,
      ...Blocks
    },
    data() {
      return {
        navbar: {
          leftOptions: {
            backText: '',
            showBack: true,
            preventGoBack: true
          }
        },
        radioGroup: {
          options: ['已有牌照', '未上照'],
        },
        status: {
          hasLicense: '已有牌照'
        },
        info: {
          car: {
            carNumber: '豫A12345'
          },
        },
      }
    },
    computed: {
      license() {
        return this.status.hasLicense === '已有牌照'
      }
    }
  }
</script>

<style lang="stylus">
  .car-number
    display flex

  .car-number > label 
    width 50%

  .car-number-group 
    .weui_cells
      padding: 16px 0
    .weui_cell
      &:before
      &:after
        display none

  #app .weui_cells
    font-size 16px
    color #555

</style>