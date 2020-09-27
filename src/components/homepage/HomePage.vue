<script>
    import Bytepath from "bytepath";
    import OceanScene from "../Animation/Scenes/Ocean/OceanScene";
    import YellowFish from "../Animation/Assets/Fish/YellowFish";
    import Cloud from "./Cloud";

    export default Bytepath.CreateAsset({
        mixins: [],
        props: {},

        data() {
            return {
                balloonPos: new Bytepath.Position({}),
            };
        },

        computed: {},
        methods: {},

        components: {
            OceanScene,
            scroll: Bytepath.timers.scroll,
            //Human,
            balloon: Bytepath.samples.assets.balloon,
            YellowFish,
            Cloud,
            'bounce': Bytepath.animations.bounce,
            'vector': Bytepath.graphics.vector,
        },

        animations() {
            return {
                default: [
                    {
                        start: 0,
                        end: 970,
                        handler({context, tween}) {
                            console.log("stage 1");
                            context.balloonPos.x = tween.number(100, 500);
                            context.position.centerX = null;
                            context.position.centerY = null;
                        }
                    },

                    {
                        start: 100,
                        end: 970,
                        handler({ context, tween, keyframe }) {
                            console.log("stage 2", keyframe, context.balloonPos.x);
                            context.balloonPos.angle = 360 - tween.number(0, 360);
                            context.position.centerX = 100;
                            context.position.centerY = 0;
                        }
                    },

                    {
                        start: 970,
                        end: 1500,
                        handler({ context, tween, keyframe }) {
                            console.log("stage 3", keyframe, context.balloonPos.x);
                            context.balloonPos.x = tween.number(500, 1000);
                            context.position.centerX = null;
                            context.position.centerY = null;

                            //:sy="(keyframe < 2160)? ((keyframe > 1080)?((100 - (keyframe - 1080)) / 1000):0):-.999"
                        //:y="(keyframe > 1080)?(keyframe - 1080):0"
                        }
                    }
                ]
            };
        }
    });
</script>

<template>
    <div>
        {{ keyframe }}
        <vector height="3000">
            <ocean-scene class="text-blue-300" :keyframe="keyframe">
                <g>
                    <balloon :cx="100" color="orange" :sx="2" :sy="2" :y="700" :position="balloonPos">
                        <foreignObject>{{ keyframe }}</foreignObject>
                    </balloon>
                </g>
            </ocean-scene>
        </vector>
        <div style="height:1000px;">
            <h1> WELCOME LOL</h1>
        </div>
    </div>
</template>
