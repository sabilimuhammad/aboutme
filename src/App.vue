<template>
  <div id="app">
    <About/>
    <Style/>
  </div>
</template>

<script>
import About from './view/About.vue'
import Style from './assets/scss/Style.css'

export default {
  name: 'App',
  components: {
    About,
    Style
  }
}
</script>

<style>

</style>
