<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../src/components/Animation/Scenes/Ocean/OceanScene";
    import YellowFish from "../../../src/components/Animation/Assets/Fish/YellowFish";
    import Cloud from "../../../src/components/homepage/Cloud";

    export default Bytepath.CreateAsset({
        mixins: [],
        props: {},

        data() {
            return {
                balloonPos: new Bytepath.Position({}),
                cam: new Bytepath.Position({
                    x: 1000,
                    scaleX: 0.5,
                    width: 2000,
                    height: 2000,
                }),
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
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.x = tween.number(100, 500);
                            context.position.centerX = null;
                            context.position.centerY = null;
                        }
                    },

                    {
                        start: 100,
                        end: 970,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.angle = 360 - tween.number(0, 360);
                            context.position.centerX = 100;
                            context.position.centerY = 0;
                        }
                    },

                    {
                        start: 970,
                        end: 1000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.x = tween.number(500, 850);
                            context.position.centerX = null;
                            context.position.centerY = null;

                            //:sy="(keyframe < 2160)? ((keyframe > 1080)?((100 - (keyframe - 1080)) / 1000):0):-.999"
                            //:y="(keyframe > 1080)?(keyframe - 1080):0"
                        }
                    },

                    {
                        start: 1000,
                        end: 1200,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.y = tween.number(0, 620);
                            context.position.centerX = null;
                            context.position.centerY = null;

                            if (context.balloonPos.x < 850) {
                                console.log();
                            }
                            //:sy="(keyframe < 2160)? ((keyframe > 1080)?((100 - (keyframe - 1080)) / 1000):0):-.999"
                            //:y="(keyframe > 1080)?(keyframe - 1080):0"
                        }
                    }
                ],
                changecolor: [
                    {
                        start: 0,
                        end: 1000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.defaultColor = tween.hex("#0000FF", "#FF0000");
                        }
                    },
                    {
                        start: 1000,
                        end: 2000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.defaultColor = tween.hex("#FF0000", "#00FF00");
                        }
                    },
                    {
                        start: 2000,
                        end: 3000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.defaultColor = tween.hex("#00FF00", "#0000FF");
                        }
                    },
                ]
            };
        }
    });
</script>

<template>
    <div id="app" style="width: 100%; height: 100vh; fill:#90CDF4;">
        <scroll :speed="10" :fps="60" v-slot="{ keyframe }" auto-play>
            <vector width="100%" height="100%">
                <balloon
                        :keyframe="keyframe"
                        :anim="animation"
                        :repeat="true"
                        :cx="100"
                        :sx="2"
                        :sy="2"
                        :x="300"
                        :y="300 + keyframe / 10"/>
            </vector>
        </scroll>
        <div style="height: 1000vh;"></div>
    </div>
</template>
