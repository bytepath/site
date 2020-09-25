<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <animated-rotation />
  </div>
</template>

<script>
//import Homepage from './components/homepage/HomePage.vue'
import AnimatedRotation from "./components/Guide/AnimatedTransformations/AnimatedRotation";


export default {
  name: 'App',
  components: {
    //Homepage,
    AnimatedRotation
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
