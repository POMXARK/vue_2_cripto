<template>
  <div>
    <h1>Простой пример получение данных асинхронно</h1>
    {{posts}}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        posts: [] // this.posts
      }
    },
    async mounted() {
      const res = await fetch('http://127.0.0.1:8000/api/ethereum/?date_start=2017-08-02&date_end=2017-08-20')
      this.posts = await res.json();
    }
}
</script>

