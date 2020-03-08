<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.ShowFooter"></FooterGuide>
  </div>
</template>

<script>
  // import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  // import {reqFoodCategorys} from './api'
  export default {
    mounted() {
      // this.$store.dispatch('getAddress')
      // this.getAddress();
    },
    methods: {
      // ...mapActions(['getAddress'])
    },
    components: {
      FooterGuide,
    }
  }
</script>
<style lang="stylus">
  .app
    color: red
</style>
