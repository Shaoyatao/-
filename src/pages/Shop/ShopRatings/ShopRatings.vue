<template>
  <div>

  ShopRatings
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "ShopGoods",
    mounted() {
      this.$store.dispatch("reqShopRatings")
    },
    computed:{
      ...mapState(["ratings"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
