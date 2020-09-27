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
            //Human,
            balloon: Bytepath.samples.assets.balloon,
            YellowFish,
            Cloud,
            'bounce': Bytepath.animations.bounce,
            'vector': Bytepath.graphics.vector,
        }
    }


</script>

<template>
    <scroll :fps="10" v-slot="{ keyframe }" auto-play>
        <div>
        <vector height="3000">
        <ocean-scene
                :keyframe="keyframe"
                :y="(keyframe > 1080)?(keyframe - 1080):0" class="text-blue-300"

                :sy="(keyframe < 2160)? ((keyframe > 1080)?(1 - (keyframe - 1080) / 1000 ):0):0"
        >
            <g>
                <balloon color="orange"
                         :x="keyframe * 1.2"
                         :y="700"
                         :a="(keyframe < 351)?360 - (keyframe % 360):0"
                         :sx="2.5"
                         :sy="2.5"
                         :cx="125"
                         :cy="0"
                />
            </g>
        </ocean-scene>
        </vector>
        <div style="height:1000px;">
            <h1> WELCOME LOL</h1>
        </div>
        </div>
    </scroll>
</template>
