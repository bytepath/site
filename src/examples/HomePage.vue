<script>
    import Bytepath from "bytepath";
    import Farm from "../../bytepathnpm/Samples/Scenes/Farm/Farm";
    import OceanScene from "../../bytepathnpm/Samples/Scenes/Ocean/OceanScene";
    export default {
        data() {
            return {};
        },

        components: {
            OceanScene,
            Farm,
            scroll: Bytepath.timers.scroll,
            scene: Bytepath.graphics.scene,
        },
    };
</script>

<template>
    <div>
        <svg viewBox="0 0 1380 3800">
            <scroll :speed="1.5" :responsive="true" v-slot="{ keyframe }" auto-play>
                <g>
                    <farm color="rgb(227,218,166)" :keyframe="keyframe" :y="2500"></farm>
                    <ocean-scene :show-viewbox="false" style="fill:#90CDF4;" :keyframe="keyframe"></ocean-scene>
                </g>
            </scroll>
        </svg>
    </div>
</template>
