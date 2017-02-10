<template>
  <div class="address-page" data-page="address-page">
    <!-- navbar -->
    <x-header
      title="地址"
      :left-options="navbar.leftOptions">
    </x-header>

    <group class="form-area"
      gutter="10px">
      <x-input
        title="所在城市"
        :value="city"
        disabled>
      </x-input>
      <x-input
        title="收件地址"
        v-model="info.carOwner.address">
      </x-input>
    </group>

    <!-- 按钮 -->
    <router-link 
      to="/info"
      replace>
      <x-button class="next-btn">确定</x-button>
    </router-link>
  </div>
</template>

<script>
  import { XHeader, Group, XButton, XInput } from 'vux'

  export default {
    name: 'address-page',
    components: {
      XHeader,
      Group,
      XButton,
      XInput
    },
    data() {
      return {
        navbar: {
          leftOptions: {
            backText: '',
            showBack: true,
            preventGoBack: false,
          }
        },
      }
    },
    watch: {
      address(val) {
        this.info.carOwner.address = val
        this.$store.commit('updateCarOwner', this.info)
      },
    },
    computed: {
      info() {
        return this.$store.state.info
      },
      address() {
        return this.$store.state.info.carOwner.address
      },
      city() {
        let ta = this.$store.state.info.taAreaCode
        return ta.split(' ').join(',')
      }
    }
  }

</script>