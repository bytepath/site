<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="{ keyframe }">
        <svg style="width: 100%" width="100%" height="100%">
            <vector :x="keyframe">
                <rect width="50" height="50" fill="red"/>
            </vector>
        </svg>
    </scroll>
</template>
