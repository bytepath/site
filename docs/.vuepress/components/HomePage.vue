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
            YellowFish,
            Cloud,
            'bounce': Bytepath.animations.bounce,
            'vector': Bytepath.graphics.vector,
        },


    });
</script>

<template>
        <div id="app" style="width: 100%; height: 100vh; fill:#90CDF4;">
            <scroll :fps="60" v-slot="{ keyframe }" auto-play>
                <div>
                    <ocean-scene class="text-blue-300" :keyframe="keyframe" />
                    <ocean-scene style="position:absolute;top:2900px;left:-22px;" class="text-blue-300" :cx="692" :cy="1500" :a="90" :y="0" :x="0" :keyframe="keyframe" />
                </div>
            </scroll>
            <div style="height: 1000vh;" ></div>
        </div>
</template>
