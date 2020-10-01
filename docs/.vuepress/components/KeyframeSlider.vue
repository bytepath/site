<script>
    import Bytepath from "bytepath";

    export default {

        components: {
            balloon: Bytepath.samples.assets.balloon,
            //'vector': Bytepath.graphics.vector,
        },

        props: {
            start: {
                type: Number,
                default: 0,
            },

            end: {
                type: Number,
                default: 1000,
            }
        },

        data() {
            return {
                currentFrame: 1,
            };
        },
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="currentFrame" :min="start" :max="end"> Current Frame = {{ currentFrame }}
        <br/>
        <slot :keyframe="currentFrame" />
    </div>
</template>
