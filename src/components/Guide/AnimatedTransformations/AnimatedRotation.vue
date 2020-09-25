<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,

            // Reset, short for <keyframe-reset> is used to prevent the timer from
            // starting until it reaches a certain frame position. In this case,
            // we wont start scaling until frame 3000
            reset: Bytepath.timers.reset,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="scroll">
        <reset :keyframe="scroll.keyframe" :start="3000" v-slot="reset">
            <svg width="100%" height="100%">
                <g transform="translate(0, 50)">
                    <vector :a="(reset.keyframe / 10) % 360">
                        <rect width="100" height="50" fill="red"/>
                    </vector>
                    <vector :a="(45 + (reset.keyframe / 8)) % 360" :x="125">
                        <rect width="100" height="50" fill="blue"/>
                    </vector>

                    <vector :a="(90 + (reset.keyframe / 4)) % 360" :x="225">
                        <rect width="100" height="50" fill="green"/>
                    </vector>

                    <!-- value % 360 will force our frame to stay -->
                    <!-- within the 0-360deg rotation range -->
                    <vector :a="(200 + (reset.keyframe / 2)) % 360" :x="325">
                        <rect width="100" height="50" fill="orange"/>
                    </vector>
                </g>
            </svg>
        </reset>
    </scroll>
</template>
