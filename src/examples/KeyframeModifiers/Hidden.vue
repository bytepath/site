<script>
    import CreateAsset from "../../../bytepathnpm/Factories/CreateAsset";
    import Underwater from "../../../bytepathnpm/Samples/Scenes/Underwater/Underwater";
    import Octopus from "../../../bytepathnpm/Samples/Scenes/Underwater/Octopus";
    import KeyframeVisible from "../../../bytepathnpm/vue/Components/Timers/KeyframeVisible";

    export default CreateAsset({
        name: "HiddenExample",
        layers: [],
        viewport: true,
        components: {
            Underwater,
            Octopus,
            KeyframeVisible,
        },
    });
</script>

<template>
    <svg  height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" overflow="hidden">

            <!-- Repeats when the octopus goes off screen -->
            <keyframe-visible :keyframe="keyframe" v-slot="visible">
                <octopus color="blue" :x="-500 + (visible.keyframe)"/>
            </keyframe-visible>
        </underwater>
    </svg>
</template>
