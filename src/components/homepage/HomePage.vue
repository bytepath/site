<script>
    import Bytepath from "bytepath";
 //   import Balloon from "./Balloon";
  //  import Human from "../Animation/Assets/Human/Human.vue";
//    import AssetExample from "./AssetExample";
    import OceanScene from "../Animation/Scenes/Ocean/OceanScene";
//    import YellowFish from "../Animation/Assets/Fish/YellowFish";
import Cloud from "./Cloud";

    export default {
        mixins: [],
        props: {},

        data() {
            let scale = 1;
            return {
                camera: new Bytepath.Position({
                    scaleX: scale,
                    scaleY: scale,
                }),

                humanPos: new Bytepath.Position({
                    width: 69,
                    height: 96,
                }),
            };
        },

        computed: {},
        methods: {
            computeCamera(keyframe) {
                this.camera.x = (Math.sin(keyframe / 500));
                this.camera.y = (Math.cos(keyframe / 500));

                return this.camera;
            }
        },
        components: {
            OceanScene,
            scroll: Bytepath.timers.scroll,
            clock: Bytepath.timers.clock,
            //Human,
            //Balloon,
            //YellowFish,
            Cloud,
            'bounce': Bytepath.animations.bounce,
        }
    }


</script>

<template>
    <scroll :fps="10" v-slot="{ keyframe }" auto-play>
        <ocean-scene :keyframe="keyframe">
            <clock v-slot="clock">
                <bounce :keyframe="clock.keyframe" :mx="0.5" v-slot="bounce">
                    <g>
                        <cloud :matrix="bounce.position.matrix" :mx="0.2" :x="(-300 + (keyframe % 1040)) " :y="700"/>
                        <cloud :matrix="bounce.position.inverse" :mx="0.2" :x="(-300 + (keyframe % 1040)) " :y="700"/>
                        <cloud :matrix="bounce.position.matrix" :mx="0.15" :x="-400 + (keyframe % 750)" :y="550"/>
                        <cloud :matrix="bounce.position.matrix" :mx="0.1" :x="-450 +  (keyframe % 1060)" :y="300"/>
                    </g>
                </bounce>
            </clock>
        </ocean-scene>
    </scroll>
</template>
