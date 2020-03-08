/* 路由模块 */

import Vue from 'vue'
import Vuerouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(Vuerouter);

export default new Vuerouter({
  routes: [{
    path: '/',
    redirect: '/msite'
  },
    {
      path: '/msite',
      component: Msite,
      meta: {
        ShowFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        ShowFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        ShowFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        ShowFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }


  ]

})
