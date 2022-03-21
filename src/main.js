import Vue from 'vue'
import App from './App.vue'
import TestTraid from './TestTraid.vue'
import BdTest from './BdTest.vue'
//import store from './store'
import axios from 'axios'
import StateTest from './StateTest.vue'
import CalendarTest from './CalendarTest.vue'
import Vuex from "vuex";
import { DataCube } from 'trading-vue-js'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    post: {}
  },
  mutations: {
    setPost(state, data) {
      let main_arr = []


      for (let i = 0; i < data.length; i++) {
        let arr = []
        arr.push(parseInt(data[i]['Timestamp'])*1000)
        arr.push(data[i]['Open'])
        arr.push(data[i]['High'])
        arr.push(data[i]['Low'])
        arr.push(data[i]['Close'])
        main_arr.push(arr)
      }

      state.post = new DataCube ({chart : {data: main_arr}}) ;
    }
  },
  actions: {
    async getPost(context, {set_start_date, set_end_date }) {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/ethereum/?date_start=${set_start_date}&date_end=${set_end_date}` //2017-08-20
      );
        

      context.commit("setPost", data.data);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  store,
  render: h => h(TestTraid),
}).$mount('#test_traid')

new Vue({
  store,
  render: h => h(BdTest),
}).$mount('#test_bd')

new Vue({
  store,
  render: h => h(CalendarTest),
}).$mount('#calendar_test')


new Vue({
  store,
  render: h => h(StateTest),
}).$mount('#state_test')