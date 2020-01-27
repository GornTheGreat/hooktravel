<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue'

export default {
  name: 'app',
  components: {
    MainPage
  },
  data() {
   
  }
}
</script>

<style>

html, body {
  overflow: hidden;
  font-family: Montserrat !important;
}

</style>
