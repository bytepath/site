<script>
    import Bytepath from "bytepath";
    import src from "../../../bytepathnpm/Samples/Assets/Human/Human.svg";

    export default Bytepath.CreateAsset({
        name: "imported",
        src,
    });
</script>

<template>
    <vector :show-viewbox="true" height="100" width="100" :style="{fill: defaultColor }" v-bind="$props" >
        <layer v-for="(layer, i) in filteredLayers" :key="i" :layer="layer" />
    </vector>
</template>
