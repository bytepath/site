<template>
  <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
    <img alt="Vue logo" src="./assets/logo.png">
    <homepage />
  </div>
</template>

<script>
import Homepage from './components/homepage/HomePage.vue'


export default {
  name: 'App',
  components: {
    Homepage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
