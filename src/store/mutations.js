/*
直接更新state的多个方法的对象
 */

import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECIVE_SHOP_GOODS,
  RECIVE_SHOP_INFO,
  RECIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  // [RECEIVE_USER_INFO](state,payload){
  [RECEIVE_USER_INFO](state, {userInfo}) {
    // console.log(payload)
    state.userInfo = userInfo
    // state.userInfo = payload.user
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECIVE_SHOP_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECIVE_SHOP_INFO](state, {info}) {
    state.info = info
  },
  [RECIVE_SHOP_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(!food.count){
      // food.count = 1; //更新数据但是没有更新界面
      Vue.set(food,'count',1);
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count){
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    //food清空
    state.cartFoods.forEach(food => food.count = 0)
    //购物车清空
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
    state.searchShops = searchShops
  },
}
