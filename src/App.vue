<template>
  <div id="app">



<particles-bg type="cobweb" :canvas="{backgroundColor:'##ff0000'}" :bg="true"/> 
<div class="p-3">
<b-container >
  <b-row >
    <b-col cols="10"  md="auto" >
      <div id="test_traid"></div>
    </b-col>
    <b-col cols="2"  md="auto">
      <div id="state_test"></div>
    </b-col>
  </b-row>
  </b-container>
  </div>
</div>

</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: 'App',
  components: {
    ParticlesBg
  },  
}


  </script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>



