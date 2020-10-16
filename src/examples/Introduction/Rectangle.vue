<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        props: {
            color: {
                type: String,
                default: "red",
            }
        },
    });
</script>

<template>
    <vector v-bind="$props">
        <rect width="50" height="50" :fill="color" />
    </vector>
</template>
