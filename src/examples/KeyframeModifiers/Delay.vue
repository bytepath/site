<script>
    import Bytepath from "bytepath";

    export default {
        name: "DelayExample",

        props: {
            keyframe:{
                type: Number,
                default: 0,
            }
        },

        components: {
            underwater: Bytepath.samples.scenes.underwater.underwater,
            octopus: Bytepath.samples.scenes.underwater.octopus,
            "keyframe-delay": Bytepath.timers.delay,
        },
    }
</script>

<template>
    <svg height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="false" overflow="hidden">
            <g>
                <!-- Start animating at frame 0 -->
                <keyframe-delay :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-300" :x="delay.keyframe"/>
                </keyframe-delay>

                <!-- Start at frame 500 -->
                <keyframe-delay :start="500" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-50" :x="delay.keyframe"/>
                </keyframe-delay>

                <!-- Starts at frame 1000 -->
                <keyframe-delay :start="1000" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="200" :x="delay.keyframe"/>
                </keyframe-delay>
            </g>
        </underwater>
    </svg>
</template>
