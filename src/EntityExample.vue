<script>
    /* eslint-disable */
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
                        start: 1000,
                        end: 2000,
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
        data(){},

        methods:{},
    });
</script>

<template>
    <entity  v-bind="$props" v-slot="{ href, position, asset, transform }">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :name="layer" />
    </entity>
</template>
