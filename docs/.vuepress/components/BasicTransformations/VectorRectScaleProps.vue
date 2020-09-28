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
        <vector>
            <rect width="50" height="50" fill="red" />
        </vector>
        <vector :x="100" :sx="2" :sy="2">
            <rect width="50" height="50" fill="blue" />
        </vector>
        <vector :x="275" :sx="4" :sy="3">
            <rect width="50" height="50" fill="green" />
        </vector>
        <vector :x="415" :sx="0.5" :sy="3">
            <rect width="50" height="50" fill="orange" />
        </vector>
    </svg>
</template>
