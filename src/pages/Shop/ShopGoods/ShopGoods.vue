<template>
  <div>
    <ul >
      <li v-for="(good,index) in goods" :key="index">
        <h3>{{good.name}}</h3>

      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "ShopGoods",
    mounted() {
      this.$store.dispatch("reqShopGoods")
    },
    computed:{
      ...mapState(["goods"])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
