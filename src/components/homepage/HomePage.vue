<script>
    import Bytepath from "bytepath";
 //   import Balloon from "./Balloon";
    import Human from "../Animation/Assets/Human/Human.vue";
//    import AssetExample from "./AssetExample";
    //import OceanScene from "../Animation/Scenes/Ocean/OceanScene";
//    import YellowFish from "../Animation/Assets/Fish/YellowFish";
    import Sky from "./Sky/Sky";

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
            //OceanScene,
            scroll: Bytepath.timers.scroll,
            clock: Bytepath.timers.clock,
            Human,
            Sky,
            //Balloon,
            //YellowFish,
        }
    }


</script>

<template>
    <scroll :speed="10" :fps="10" v-slot="{ keyframe }" auto-play>
        <div>
            <svg class="text-blue-200" viewBox="0 0 1363 20000">
                <human :keyframe="keyframe" :repeat="true" />
            </svg>
        </div>
    </scroll>
</template>
