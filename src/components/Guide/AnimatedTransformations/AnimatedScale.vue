<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,

            // Reset, short for <keyframe-reset> is used to prevent the timer from
            // starting until it reaches a certain frame position. In this case,
            // we wont start scaling until frame 1500
            reset: Bytepath.timers.reset,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="{ keyframe }">
        <reset :keyframe="keyframe" :start="1500" v-slot="reset">
            <svg width="100%" height="100%">
                <vector :sy="reset.keyframe / 100">
                    <rect width="50" height="50" fill="red"/>
                </vector>

                <vector :x="100" :y="100" :sx="reset.keyframe / 100">
                    <rect width="50" height="50" fill="blue"/>
                </vector>

                <vector :x="200" :sx="reset.keyframe / 100" :sy="reset.keyframe / 100">
                    <rect width="50" height="50" fill="green"/>
                </vector>
            </svg>
        </reset>
    </scroll>
</template>
