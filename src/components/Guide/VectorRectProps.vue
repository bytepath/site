<script>
    import Bytepath from "bytepath";
console.log("HHHHHH");
    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector hhh :x="100" :y="100">
        <rect width="50" height="50" fill="red" />
    </vector>
</template>
