<template>



<trading-vue :data="this.$store.state.post" :width="this.width" :height="this.height"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText">
>
  
</trading-vue>

</template>
<script>

import TradingVue from 'trading-vue-js'

export default {
    name: 'app',
    components: { TradingVue },
    data() {
      this.getPost()
        return {
            width: window.innerWidth/2,
            height: window.innerHeight/2,
                        colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            },
        }
    },

  computed: {
    post() {
      return this.$store.state.post;
    }
  },

       methods: 
    {
         
        onResize(event) {
            this.width = window.innerWidth/2
            this.height = window.innerHeight/2
        },
    

    getPost() {
      this.$store.dispatch("getPost",{ set_start_date: this.$store.state.start_date , set_end_date: this.$store.state.end_date });
    }
    },

        mounted() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
}

</script>