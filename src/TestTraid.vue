<template>
  <div>
    <trading-vue :data="this.$store.state.posts" :width="this.width" :height="this.height"
                 :color-back="colors.colorBack"
                 :color-grid="colors.colorGrid"
                 :color-text="colors.colorText">
      >
    </trading-vue>
  </div>
</template>

<script>
import TradingVue from 'trading-vue-js'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {TradingVue},
  data() {
    return {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333',
      },
    }
  },
  computed: mapGetters(['allPosts']),
  methods: {
    ...mapActions(['fetchPosts']),
    onResize(event) {
      this.width = window.innerWidth / 2
      this.height = window.innerHeight / 2
    }
  },

  async mounted() {
    window.addEventListener('resize', this.onResize)
    await this.fetchPosts();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

