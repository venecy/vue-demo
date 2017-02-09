<template>
  <!-- keyboard-modal -->
  <div>
    <div 
      @click="switchModal">
      <slot></slot>
    </div>
    <div class="picker-modal picker-modal-keyboard"
      :class="modalClass" 
      v-show="visible">
      <div class="hd">
        <span
          @click="closeModal">
          <i class="arrow-down-white"></i>
        </span>
      </div>
      <div class="bd"
        @click="updateValue">
        <div class="keyboard-carNumberName">
          <div class="keyboard-row">
            <div class="key">京</div>
            <div class="key">沪</div>
            <div class="key">津</div>
            <div class="key">渝</div>
            <div class="key">黑</div>
            <div class="key">吉</div>
            <div class="key">辽</div>
            <div class="key">蒙</div>
            <div class="key">冀</div>
            <div class="key">新</div>
          </div>
          <div class="keyboard-row">
            <div class="key">甘</div>
            <div class="key">青</div>
            <div class="key">陕</div>
            <div class="key">宁</div>
            <div class="key">豫</div>
            <div class="key">鲁</div>
            <div class="key">晋</div>
            <div class="key">皖</div>
            <div class="key">鄂</div>
            <div class="key">湘</div>
          </div>
          <div class="keyboard-row">
            <div class="key">苏</div>
            <div class="key">川</div>
            <div class="key">贵</div>
            <div class="key">黔</div>
            <div class="key">滇</div>
            <div class="key">桂</div>
            <div class="key">藏</div>
            <div class="key">浙</div>
            <div class="key">赣</div>
            <div class="key">粤</div>
          </div>
          <div class="keyboard-row">
            <div class="key">闽</div>
            <div class="key">台</div>
            <div class="key key-next"
            @click="nextStep">下一步</div>
          </div>
        </div>
        <div class="keyboard-carNumber" style="display: none">
          <div class="keyboard-row">
            <div class="key">0</div>
            <div class="key">1</div>
            <div class="key">2</div>
            <div class="key">3</div>
            <div class="key">4</div>
            <div class="key">5</div>
            <div class="key">6</div>
            <div class="key">7</div>
            <div class="key">8</div>
            <div class="key">9</div>
          </div>
          <div class="keyboard-row">
            <div class="key">Q</div>
            <div class="key">W</div>
            <div class="key">E</div>
            <div class="key">R</div>
            <div class="key">T</div>
            <div class="key">Y</div>
            <div class="key">U</div>
            <div class="key">I</div>
            <div class="key">O</div>
            <div class="key">P</div>
          </div>
          <div class="keyboard-row">
            <div class="key">A</div>
            <div class="key">S</div>
            <div class="key">D</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
            <div class="key">Z</div>
          </div>
          <div class="keyboard-row">
            <div class="key">X</div>
            <div class="key">C</div>
            <div class="key">V</div>
            <div class="key">B</div>
            <div class="key">N</div>
            <div class="key">M</div>
            <div class="key key-ok">完成</div>
            <div class="key key-del">←</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboard',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      updateValue(event) {
        let target = event.target
        let classNames = target.className.split(' ')
        let valueKey = true
        for (let op of ['key-next', 'key-ok', 'key-del']) {
          if (classNames.includes(op)) valueKey = false
        }
        if (classNames.includes('key') && valueKey) {
          let val = target.innerText
          this.$emit('input', val)
        }
        this.nextStep()
      },
      switchModal() {
        this.visible = !this.visible
      },
      closeModal() {
        this.visible = false
      },
      nextStep() {
        this.closeModal()
        this.$emit('nextstep')
      }
    },
    computed: {
      modalClass: function() {
        return this.visible ? 'modal-in' : 'modal-out'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $m-color: #f57910
  .picker-modal.picker-modal-keyboard {
    position: fixed;
    display: block;
  }
  // key-board 
  .picker-modal-keyboard .bd .keyboard-row {
      .key.key-next, .key.key-ok {
          color: $m-color;
      }
      .key.active-state {
          background-color: $m-color;
      }
      .keyboard-cardNumberName {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          // -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
  }

  .picker-modal-keyboard{height:auto;background: none;}
  .picker-modal-keyboard .hd{height:20px;text-align: right;}
  .picker-modal-keyboard .hd:after{content: '';border-top: 20px solid transparent;border-right: 20px solid #C1C4CD;position: absolute;right:30px;top:0;}
  .picker-modal-keyboard .hd span{display: inline-block;width:30px;height:20px;background: #C1C4CD;}
  .picker-modal-keyboard .hd span i{width:30px;height:20px;display: block;background-position: 0 center;padding-right: 0;}
  .picker-modal-keyboard .bd{padding:5px;background: #C1C4CD;}
  .picker-modal-keyboard .bd .keyboard-row{height: 16.66666667%;height: -webkit-calc(100% / 6); height: -moz-calc(100% / 6); height: calc(100% / 6); display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-shrink: 1; -ms-flex: 0 1 auto; flex-shrink: 1; width: 100%; position: relative;} 
  .picker-modal-keyboard .bd .keyboard-row .key{list-style:none;background-color: rgba(255,255,255,.8);border-radius: 3px;text-align: center;-webkit-flex-shrink: 1; -ms-flex: 0 1 auto; flex-shrink: 1; display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; box-sizing: border-box; width: 10%; width: -webkit-calc(100% / 10); width: -moz-calc(100% / 10); width: calc(100% / 10); text-align: center; color: #000; font-size: 15px; cursor: pointer; z-index: 20; height: 100%;padding:8px 2px;margin-right: 5px;margin-bottom: 5px;box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.5);}
  .picker-modal-keyboard .bd .keyboard-row .key:last-child{margin-right: 0}
  .picker-modal-keyboard .bd .keyboard-row .key.key-next{width: 90%;}
  .picker-modal-keyboard .bd .keyboard-row .key.key-ok{width: 28.5%;}
  .picker-modal-keyboard .bd .keyboard-row .key.key-del{width: 15%;}
</style>