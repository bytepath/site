<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        name: "RepeatExample",
        layers: [],
        viewport: true,
        components: {
            underwater: Bytepath.samples.scenes.underwater.underwater,
            octopus: Bytepath.samples.scenes.underwater.octopus,
            "keyframe-repeat": Bytepath.timers.repeat,
        },
    });
</script>

<template>
    <svg  height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" overflow="hidden">
            <g>
                <!-- Repeats every 250 frames -->
                <keyframe-repeat :repeat="250" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-300" :x="delay.keyframe"/>
                </keyframe-repeat>

                <!-- Repeats every 500 frame -->
                <keyframe-repeat :repeat="500" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-50" :x="delay.keyframe"/>
                </keyframe-repeat>

                <!-- Repeats every 1000 frames -->
                <keyframe-repeat :repeat="1000" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="200" :x="delay.keyframe"/>
                </keyframe-repeat>
            </g>
        </underwater>
    </svg>
</template>
