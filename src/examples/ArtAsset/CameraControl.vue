<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../bytepathnpm/Samples/Scenes/Ocean/OceanScene";

    export default Bytepath.CreateAsset({
        name: "CameraExample",
        mixins: [],
        props: {},

        data() {
            return {
                zoom: 1,
                currentFrame: 0,
                myCamera: new Bytepath.Position({
                    scaleX: 1,
                    scaleY: 1,
                    width: 300,
                    height: 250,
                }),
            };
        },

        watch: {
            zoom() {
                this.myCamera.scaleX = (this.zoom > 0) ? this.zoom : 1;
                this.myCamera.scaleY = (this.zoom > 0) ? this.zoom : 1;
            },
        },

        components: {
            OceanScene,
            timer: Bytepath.timers.clock,
        }
    });
</script>

<template>
    <!-- CameraControl.vue -->
    <div>
        <input type="range" v-model.number="currentFrame" :min="0" :max="2500"> Current Frame = {{ currentFrame }}
        <input type="range" v-model.number="myCamera.x" :min="0" :max="600"> X = {{ myCamera.x }}
        <input type="range" v-model.number="myCamera.y" :min="0" :max="1200"> Y = {{ myCamera.y }}
        <input type="range" v-model.number="zoom" :min="0" :max="10"> Zoom = {{ zoom }}

        <ocean-scene style="fill:#90CDF4;" align="topleft" overflow="hidden" :camera="myCamera" :keyframe="keyframe"/>
    </div>
</template>
