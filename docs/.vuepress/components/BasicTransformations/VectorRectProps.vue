<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector :x="100" :y="100">
        <rect width="50" height="50" fill="red" />
    </vector>
</template>
