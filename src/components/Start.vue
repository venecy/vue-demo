<template>
  <div class="start-page" data-page="start-page">
    <!-- navbar -->
    <x-header
      title="保险信息"
      :left-options="navbar.leftOptions">
      <span slot="right">历史查询</span>
    </x-header>

    <!-- 投保城市: areaCode -->
    <group class="area-code">
      <x-address
        title="投保城市"
        v-model="addressData.value"
        :list="addressData.china">
      </x-address>
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
  import { XHeader, Group, Cell, Radio, XButton, XAddress, ChinaAddressData, Value2nameFilter } from 'vux'
  import Blocks from './blocks'

  export default {
    name: 'start-page',
    components: {
      XHeader,
      Group,
      Cell,
      Radio,
      XButton,
      XAddress,
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
        addressData: {
          china: ChinaAddressData,
          value: ['370000', '370600', '370602']
        }
      }
    },
    watch: {
      areaCode(newVal) {
        this.info.areaCode = newVal
        this.info.taAreaCode = Value2nameFilter(this.addressData.value, ChinaAddressData)
      },
      info: {
        deep: true,
        handler(newVal, oldVal) {
          this.$store.commit('updateAreaCode', newVal)
          this.$store.commit('updateCar', newVal)
          this.$store.commit('updateTaAreaCode', newVal)
        }
      },
      status: {
        deep: true,
        handler(newVal, oldVal) {
          this.$store.commit('updateLicense', newVal)
        }
      },
    },
    computed: {
      license() {
        return this.status.hasLicense === '已有牌照'
      },
      areaCode() {
        return this.addressData.value[2]
      },
      info() {
        return this.$store.state.info
      },
      status() {
        return this.$store.state.status
      }
    },
  }
</script>

<style lang="stylus">
  @import '../assets/css/variable.styl'

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

  .area-code .vux-popup-picker-header
    color $m-color

  #app .weui_cells
    font-size 16px
    color #555


</style>