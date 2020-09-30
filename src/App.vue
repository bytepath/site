<script>
    /* eslint-disable */

    import HomePage from "../docs/.vuepress/components/HomePage";
    import AnimationComputedExample from "../docs/.vuepress/components/Animation/AnimationComputedExample";
    import Bytepath from "bytepath";

    export default {
        name: 'App',

        data(){
            return {
                currentFrame: 0,
            };
        },

        components: {
            HomePage,
            clock: Bytepath.timers.clock,
            scroll: Bytepath.timers.scroll,
        }
    }
</script>

<template>
    <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
      <scroll :fps="60"  v-slot="{ keyframe }" auto-play>
            <div >
                <home-page anim="changecolor" :keyframe="keyframe" />
              <div style="height: 1000vh;">

              </div>
            </div>
        </scroll>
    </div>
</template>



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
