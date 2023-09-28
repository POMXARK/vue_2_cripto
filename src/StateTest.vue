<template>
  <div id="app">
    <div>
      <label for="example-input">Начальная дата</label>
      <b-input-group class="mb-3">
        <b-input-group-append>
          <b-form-datepicker
              v-model="start_date"
              locale="ru-RU"
              aria-controls="example-input"
          ></b-form-datepicker>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div>
      <label for="example-input">Конечная дата</label>
      <b-input-group class="mb-3">
        <b-input-group-append>
          <b-form-datepicker
              v-model="end_date"
              locale="ru-RU"
              aria-controls="example-input"
          ></b-form-datepicker>
        </b-input-group-append>
      </b-input-group>
    </div>
    <button @click="getPosts">Получить данные</button>
  </div>
</template>
<script>

import 'vue2-event-calendar/dist/vue2-event-calendar.css'

export default {
  name: "App",
  methods: {
    getPosts() {
      this.$store.dispatch("fetchPosts",{ set_start_date: this.start_date , set_end_date: this.end_date });
      console.log({ set_start_date: this.start_date , set_end_date: this.end_date });
    }
  }
};
</script>