<script>
    import Bytepath from "bytepath";
    import underwater from "../../../img/underwater.svg";

    export default Bytepath.CreateAsset({
        src: underwater,
        name: "hamburger",
        data(){
            return {
                ham: false,
            };
        },

        components:{},
    });
</script>

<template>
    <g>
        <entity :y="5000" v-bind="$props" @loaded="onLoaded" />
        <template v-if="layers">
            <octopus />
            <shell />
        </template>
    </g>
</template>

