<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="100%" height="100%">
        <g transform="translate(0, 50)">
            <vector>
                <rect width="100" height="50" fill="red"/>
            </vector>
            <vector :a="45" :x="125">
                <rect width="100" height="50" fill="blue"/>
            </vector>

            <vector :a="90" :x="225">
                <rect width="100" height="50" fill="green"/>
            </vector>

            <vector :a="200" :x="325">
                <rect width="100" height="50" fill="orange"/>
            </vector>
        </g>
    </svg>
</template>
