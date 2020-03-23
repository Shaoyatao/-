/* 路由模块 */

import Vue from 'vue'
import Vuerouter from 'vue-router'

// import Msite from '../pages/Msite/Msite'
// import Search from '../pages/Search/Search'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'

const Msite = ()=>import('../pages/Msite/Msite')
const Search = ()=>import('../pages/Search/Search')
const Order = ()=>import('../pages/Order/Order')
const Profile = ()=>import('../pages/Profile/Profile')


import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

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
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        }, {
          path: '/shop/ratings',
          component: ShopRatings
        }, {
          path: '/shop/info',
          component: ShopInfo
        }, {
          path: "",
          redirect: "/shop/goods"
        }
      ]
    }


  ]

})
