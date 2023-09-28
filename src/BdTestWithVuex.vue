<template>
  <div>
    <h1>Пример получение данных асинхронно</h1>
    {{allPosts}}
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'App',
    computed: mapGetters(['allPosts']),
    methods: mapActions(['fetchPosts']),
    async mounted() {
        this.fetchPosts();
    }
}
</script>

