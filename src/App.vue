<template>
  <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
    <img alt="Vue logo" src="./assets/logo.png">
    <scroll :fps="60" v-slot="{ keyframe }" auto-play>
      <homepage :keyframe="keyframe" />
    </scroll>
  </div>
</template>

<script>
import Homepage from './components/homepage/HomePage.vue'
import Bytepath from "bytepath";

export default {
  name: 'App',
  components: {
    Homepage,
    scroll: Bytepath.timers.scroll,
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
