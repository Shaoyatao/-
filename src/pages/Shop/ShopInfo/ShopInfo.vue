<template>
  <div>

  ShopInfo
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "ShopGoods",
    mounted() {
      // this.$store.dispatch("reqShopInfo")
    },
    computed:{
      ...mapState(["info"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
