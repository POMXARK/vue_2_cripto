import Vue from 'vue'
import App from './App.vue'
//import TestTraid from './TestTraid.vue'
import TestTraid from './TestTraid.vue'
// import BdTest from './BdTestWithoutVuex.vue'
// import BdTest from './BdTestWithVuex.vue'
//import store from './store'
import axios from 'axios'
import StateTest from './StateTest.vue'
import CalendarTest from './CalendarTest.vue'
import Vuex from "vuex";
import { DataCube } from 'trading-vue-js'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    posts: {}
  },
  getters: {
    allPosts(state) {
      return state.posts;
    }
  },
  mutations: {
    updatePosts(state, data) {
      let main_arr = []
      console.log("posts", data)

      for (let i = 0; i < data.length; i++) {
        let arr = []
        arr.push(parseInt(data[i]['Timestamp'])*1000)
        arr.push(parseFloat(data[i]['Open']))
        arr.push(parseFloat(data[i]['High']))
        arr.push(parseFloat(data[i]['Low']))
        arr.push(parseFloat(data[i]['Close']))
        main_arr.push(arr)
      }
      // сортировка по Timestamp обязательна
      state.posts = new DataCube({chart: { data: main_arr }, onchart: [], offchart: []});
    }
  },
  actions: {
    async fetchPosts(context, {set_start_date, set_end_date} = {}) {
      const { data } = await axios.get(`https://backend-api-crypto.onrender.com/api/ethereum?date_start=${set_start_date ?? '2017-08-20'}&date_end=${set_end_date ?? '2017-08-20'}`);
      console.log(" data.data")
      context.commit("updatePosts", data.data);
    }
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

new Vue({
  store,
  render: h => h(TestTraid),
}).$mount('#test_traid')

// new Vue({
//   store,
//   render: h => h(BdTest),
// }).$mount('#test_bd')

// new Vue({
//   store,
//   render: h => h(CalendarTest),
// }).$mount('#calendar_test')


new Vue({
  store,
  render: h => h(StateTest),
}).$mount('#state_test')