<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        name: "DelayExample",
        layers: [],
        viewport: true,
        components: {
            underwater: Bytepath.samples.scenes.underwater.underwater,
            octopus: Bytepath.samples.scenes.underwater.octopus,
            "keyframe-visible": Bytepath.timers.visible,
            "keyframe-delay": Bytepath.timers.delay,
        },
    });
</script>

<template>
    <svg height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" overflow="hidden">
            <g>
                <keyframe-delay :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="-300" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>

                <keyframe-delay :start="1000" :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="-50" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>

                <keyframe-delay :start="2000" :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="200" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>
            </g>
        </underwater>
    </svg>
</template>
