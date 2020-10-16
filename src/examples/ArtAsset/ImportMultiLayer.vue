<script>
    import Bytepath from "bytepath";
    import src from "../../../bytepathnpm/Samples/Assets/Human/Human.svg";

    export default Bytepath.CreateAsset({
        name: "single-layer",
        src,
    });
</script>

<template>
    <vector :show-viewbox="true" height="100" width="100" :style="{fill: defaultColor }" v-bind="$props" >
        <g v-if="layers">
            <layer :position="layers['leftleg']" :layer="layers['leftleg']" />
            <layer :position="layers['face']" :layer="layers['face']" />
        </g>
    </vector>
</template>
