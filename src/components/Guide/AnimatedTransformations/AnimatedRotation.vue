<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,
            reset: Bytepath.timers.reset,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="scroll">
        <reset :keyframe="scroll.keyframe" :start="1500" v-slot="reset">
            <div>
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

                        <vector :a="(200 + (reset.keyframe / 2)) % 360" :x="325">
                            <rect width="100" height="50" fill="orange"/>
                        </vector>
                    </g>
                </svg>
            </div>
        </reset>
    </scroll>
</template>
