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
  }
}
</script>

<style lang="scss" src="./App.scss"></style>