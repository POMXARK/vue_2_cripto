<template>



  <div id="app">



    

    <input v-model="start_date" placeholder="отредактируй меня">
    <p>начальная дата: {{ start_date }}</p>

    <input v-model="end_date" placeholder="отредактируй меня">
    <p>Конечная дата: {{ end_date }}</p>

    <button @click="getPost">get post</button>
    


    
  </div>
</template>
<script>

import 'vue2-event-calendar/dist/vue2-event-calendar.css'


export default {
  name: "App",

  computed: {
    post() {
      return this.$store.state.post;
    }
  },
  methods: {
    getPost() {
      this.$store.dispatch("getPost",{ set_start_date: this.start_date , set_end_date: this.end_date });
    }
  }
};
</script>