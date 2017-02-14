import Vue from 'vue'
import Router from 'vue-router'
import Start from 'components/Start'
import Info from 'components/Info'
import VuxHello from 'components/HelloFromVux'
import Address from 'components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vux',
      name: 'vux',
      component: VuxHello,
    },
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
