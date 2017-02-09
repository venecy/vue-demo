<template>
  <div class="vehicle-id-info">
    <span>车牌号</span>
    <div class="vehicle-id-select">
      <div class="vehicle-select">
        <Keyboard 
          @input="carNumberName = arguments[0]"
          @nextstep="focusInput">
          <span class="hd-1">{{carNumberName}}</span>
        </Keyboard>
        <input class="bd-1" type="text" placeholder="点击输入" 
          ref="input"
          v-model="carNumberInput"/>
      </div> 
      <div class="validate-hint" v-show="hint">第一位只能输入字母</div>
    </div>
  </div>
</template>

<script>
  import Keyboard from './Keyboard'

  export default {
    data () {
      return {
        carNumberName: '',
        carNumberInput: '',
        hint: false
      }
    },
    watch: {
      // 观察车牌号码是否合法, 是否显示提示
      carNumberInput: function(val) {
        // 大写
        val = val.trim().toUpperCase()
        // 首字符为字母
        let capitals = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'
        let firstLetter = val.charAt(0)
        if (!capitals.includes(firstLetter)) {
          val = ''
        }
        // 每个字符为字母或数字
        let allowed = capitals + '1234567890'
        for (let char of val) {
          if (!allowed.includes(char)) {
            char = ''
          }
        }
        // 长度6位
        if (val.length > 6) {
          val = val.slice(0, 6)
        }

        this.carNumberInput = val
        this.hint = val === ''
      },
      // 通过事件将carNumber 传出
      carNumber: function(val) {
        this.updateValue(val)
      }
    },
    props: ['value'], // carNumber 初始值
    methods: {
      updateValue(value) {
        this.$emit('input', value)
      },
      focusInput() {
        this.$refs.input.focus()
      }
    },
    computed: {
      carNumber: {
        get: function() {
          return this.carNumberName + this.carNumberInput
        },
        set: function(newVal) {
          this.carNumberName = newVal.charAt(0)
          this.carNumberInput = newVal.slice(1)
        }
      },
    },
    created () {
      this.carNumber = this.value
    },
    components: {
      Keyboard
    }
  }
</script>

<style lang="stylus" scoped>
  $m-color = #f57910
  $hint-color = #f40000

  .vehicle-id-info
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    margin-top: 5px;
    font-size: medium !important;
    padding: 0px 15px;

  // 车牌号
  .vehicle-id-select {
      position: relative;
      .vehicle-select {
          display: flex;
          .hd {
              vertical-align: bottom;
          }
          .bd {
              line-height: 1.4;
              vertical-align: bottom;
          }
      }
      .validate-hint {
          position: absolute;
          top: 100%;
          left: 30px;
          font-size: 13px;
          color: $hint-color;
      }
  }
  .vehicle-select .hd-1{background: #369B17;width:22px;display:inline-block;padding:5px 2px;text-align: center;color:#fff;position: relative;border:1px solid #369B17;}
  .vehicle-select .hd-1:after{content: '';border-top: 11px solid transparent;border-right: 11px solid #6EC74F;position: absolute;bottom: 0;right: 0;}
  .vehicle-select .bd-1{width:150px;display:inline-block;padding:5px 8px;border:1px solid #DCDCDC;border-left:0;margin:0;}
  .vehicle-select .bd-1 input{border:0;padding:0;background: #fff;width:10px;display: inline !important;height:auto !important;}
  .vehicle-select .bd-1 input.active{border-right: 1px solid #666}
</style>