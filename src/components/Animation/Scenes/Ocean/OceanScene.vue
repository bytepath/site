<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    import Underwater from "../Underwater/Underwater";
    import Sky from "../../../homepage/Sky/Sky";
    import YellowFish from "../../Assets/Fish/YellowFish";
    import BigFish from "../../Assets/Fish/BigFish";
    import Octopus from "../../Assets/Fish/Octopus";

    export default Bytepath.CreateEntity({
        name: "ocean-scene",
        layers: [],
        props: {
            // Do we show the underwater crabs and plants or no
            crabs: {
                type: Boolean,
                default: false,
            },
        },


        components: {
            reset: Bytepath.timers.reset,
            Coast,
            Sky,
            Underwater,
            YellowFish,
            BigFish,
            Octopus,
        },

    });
</script>

<template>
    <vector v-bind="$props">
        <g :transform="transform">
            <reset :keyframe="keyframe" :start="0" v-slot="reset">
                <sky :fps="0" :keyframe="reset.keyframe">
                    <slot />
                </sky>
            </reset>

            <reset :keyframe="keyframe" :start="1000" v-slot="reset">
                <coast :keyframe="reset.keyframe" transform="translate(0 1105)"/>
            </reset>

            <reset :keyframe="keyframe" :start="1050" v-slot="reset">
                <underwater :keyframe="reset.keyframe" :crabs="crabs" transform="translate(0 1600)">
                    <slot name="underwater" >
                        <yellow-fish :x="200 + (Math.sin(keyframe / 50) * 250)" :y="200 + (Math.cos(keyframe / 50) * 250)"/>
                        <yellow-fish :x="-700 + keyframe" :my="0.4" :mx="1" :y="-150"/>
                        <big-fish :x="500 - keyframe" :my="0.5" :y="-25"/>
                        <yellow-fish :x="-900 + keyframe" :my="0.2" :mx="0.8" :y="-225"/>
                        <big-fish :x="900 - keyframe" :y="400" :my="0" :mx="1.5"/>
                    </slot>
                </underwater>
            </reset>
        </g>
    </vector>
</template>




