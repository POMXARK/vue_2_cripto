<template>
  <div>


  {{allPosts}}

  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';
  export default {
    name: 'App',
    computed: mapGetters(['allPosts']),
    
    data() {
      return {
        info: this.clear_info(),
        arr: [],
        js_srt: null,
      };
    },
    mounted(){
      this.$store.dispatch(['fethPosts'])
    },
 
    methods:  
    {
      
      clear_info() 
      { 
        this.arr = []
         this.test = axios.get('http://127.0.0.1:8000/api/ethereum/?date_start=2017-08-02&date_end=2017-08-20')
          
         .then(response => { this.info = 
         [response.data.data]
         this.info = this.info[0]
         this.info.forEach( elememt => this.arr.push([parseInt( elememt['Timestamp'])*1000,elememt['Open'],elememt['High'],elememt['Low'],elememt['Close']]))
         this.js_srt = {chart : {data: this.arr}}
         
         })
        
      },
    },

}

</script>

