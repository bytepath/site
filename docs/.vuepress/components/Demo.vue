<script>
    import Bytepath from "bytepath";

    export default {

        components: {
            balloon: Bytepath.samples.assets.balloon,
            //'vector': Bytepath.graphics.vector,
        },

        props: {
            title: {
                type: String,
                default: null
            },

            start: {
                type: Number,
                default: 0,
            },

            end: {
                type: Number,
                default: null,
            }
        },

        data() {
            return {
                currentFrame: 0,
            };
        },
    }
</script>

<template>
    <div>
        <div class="theorem">
            <p v-if="title" class="title">{{ title }}</p>
            <slot name="code" />
        </div>

        <KeyframeSlider :start="start" :end="end" v-slot="{ keyframe }">
            <slot :keyframe="keyframe" />
        </KeyframeSlider>
    </div>
</template>
