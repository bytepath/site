<script>
    /* eslint-disable */

    import HomePage from "../docs/.vuepress/components/HomePage";
    import MultipleAnimations from "../docs/.vuepress/components/Animation/MultipleAnimations";
    import Demo from "../docs/.vuepress/components/Demo";
    import Bytepath from "bytepath";
    import AnimatedBalloon from "../bytepathnpm/vue/Components/Animations/Assets/AnimatedBalloon";

    export default {
        name: 'App',

        data(){
            return {
                currentFrame: 1,
            };
        },

        methods:{
            click(){
                if(this.currentFrame < 100) {
                    this.currentFrame = 100;
                }
                else {
                    this.currentFrame = 0;
                }
            }
        },

        components: {
            HomePage,
            clock: Bytepath.timers.clock,
            scroll: Bytepath.timers.scroll,
            Demo,
            AnimatedBalloon,
        }
    }
</script>

<template>
    <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
        <button @click="click" type="button">hello</button>
      <scroll :fps="60"  v-slot="{ keyframe }" auto-play>
            <div >
                <demo :end="2500" v-slot="demo">
                    <div>
                        <animated-balloon anim="loopThenLand" color="green" :keyframe="demo.keyframe" />
                    </div>
                </demo>
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
