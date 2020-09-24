<script>
    import Bytepath from 'bytepath';
    import svg from "./Human.svg";

    export default Bytepath.CreateAsset({
        src: svg,
        layers: [],
        animations() {
            return {
                default: [
                    {
                        start: 0,
                        end: 500,
                        handler({ context, tween }){
                            // context.layers.rightarm.angle = tween.number(0, 50);
                            // context.layers.leftarm.y = tween.integer(0, 100);
                            // context.layers.leftleg.x = tween.number(0, 20);
                            // context.layers.rightleg.x = tween.number(0, 30);

                            context.color = tween.hex("#000000", "#FF0000");
                        },
                    },
                    {
                        start: 500,
                        end: 1000,
                        handler({ context, tween }){
                            // context.layers.rightarm.angle = tween.number(50, 0);
                            // context.layers.leftarm.y = tween.integer(100, 0);
                            // context.layers.leftleg.x = tween.number(20, 0);
                            // context.layers.rightleg.x = tween.number(30, 0);
                            context.color = tween.hex("#FF0000", "#000000");
                        },
                    },
                ],
            };
        },

        name: "human",
        data(){
            return {
                color: "#FF00AA"
            };
        },

        methods:{},
    });




    //
    // eturn -13666485.045 app.js:758:15
    // app.js:759:15
    // retval
    // Array(3) [ 16711680, 65535, -13666485.045 ]
    // 821 app.js:789:15
    // tween num 16711680 65535 app.js:736:15
    // diff -16646145 app.js:750:15
    // framediff 1000 app.js:753:15
    // numPerframe -16646.145 app.js:756:15
    // return -14215807.83 app.js:758:15
    // app.js:759:15
    // retval





</script>

<template>
    <entity  :style="{fill: color}" v-bind="$props" v-slot="">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
    </entity>
</template>
