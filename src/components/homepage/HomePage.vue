<script>
    import Bytepath from "bytepath";
  //  import Human from "../Animation/Assets/Human/Human.vue";
//    import AssetExample from "./AssetExample";
    import OceanScene from "../Animation/Scenes/Ocean/OceanScene";
    import YellowFish from "../Animation/Assets/Fish/YellowFish";
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
            balloon: Bytepath.samples.assets.balloon,
            YellowFish,
            Cloud,
            'bounce': Bytepath.animations.bounce,
        }
    }


</script>

<template>
    <scroll :fps="10" v-slot="{ keyframe }" auto-play>
        <ocean-scene class="text-blue-300" :keyframe="keyframe">
            <clock :fps="0" v-slot="clock">
                <bounce :keyframe="clock.keyframe" :mx="0.5" v-slot="bounce">
                    <g>
                        <cloud :matrix="bounce.position.inverse" :x=" (keyframe >> 9) * (keyframe % 1610) " :y="400"/>
                        <cloud :matrix="bounce.position.inverse" :x="-1000 + (keyframe >> 8) * (keyframe % 1610) " :y="900"/>

                        <balloon color="orange"
                                 :x="keyframe * 1.2"
                                 :y="700"
                                 :a="(keyframe < 351)?360 - (keyframe % 360):0"
                                 :sx="2.5"
                                 :sy="2.5"
                                 :cx="125"
                                 :cy="0"
                                 :matrix="bounce.position.inverse"
                        />

                        <cloud :matrix="bounce.position.matrix" :x="-450 +  (keyframe % 1060)" :y="150"/>
                        <cloud :matrix="bounce.position.matrix" :x="(-900 + (keyframe % 1440)) " :y="700"/>

                    </g>
                </bounce>
            </clock>
        </ocean-scene>
    </scroll>
</template>
