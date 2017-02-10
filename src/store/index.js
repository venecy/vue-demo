import Vue from 'vue'
import Vuex from 'vuex'
import { ChinaAddressData, Value2nameFilter } from 'vux'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    info: {
      areaCode: '370602',
      taAreaCode: '山东省 烟台市 芝罘区',
      carOwner: {
        name: '',
        identifyNumber: '',
        phone: '',
        eMail: '',
        address: '',
        acceptLicenseDate: '',
      },
      car: {
        carNumber: '鲁A12345'
      }
    },
    status: {
      isLoading: false,
      hasLicense: '已有牌照',
    },
  },
  mutations: {
    updateCarOwner (state, payload) {
      state.info.carOwner = payload.carOwner
    },
    updateAreaCode (state, payload) {
      state.info.areaCode = payload.areaCode
    },
    updateTaAreaCode (state, payload) {
      state.info.taAreaCode = payload.taAreaCode
    },
    updateCar (state, payload) {
      state.info.car = payload.car
    },
    updateLicense (state, payload) {
      state.status.hasLicense = payload.hasLicense
    },
    updateLoadingStatus (state, payload) {
      state.status.isLoading = payload.isLoading
    },
  }
})

export default store