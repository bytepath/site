<template>
    <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
        <img alt="Vue logo" src="./assets/logo.png">
        <clock :fps="0" v-slot="{ keyframe }" auto-play>
            <div >
                <animation-computed-example :repeat="true" :keyframe="keyframe"/>
              <div style="height: 1000vh;">

              </div>
            </div>
        </clock>
    </div>
</template>

<script>
    import Homepage from './components/homepage/HomePage.vue'
    import AnimationComputedExample from "../docs/.vuepress/components/Animation/AnimationComputedExample";
    import Bytepath from "bytepath";

    export default {
        name: 'App',
        components: {
            Homepage,
            AnimationComputedExample,
            clock: Bytepath.timers.clock,
            //scroll: Bytepath.timers.scroll,
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
