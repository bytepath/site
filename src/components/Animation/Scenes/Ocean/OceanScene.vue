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
                <underwater style="fill: red;" :keyframe="reset.keyframe" :crabs="crabs" transform="translate(0 1600)">
                    <slot name="underwater" >
                        <yellow-fish :x="-800" :y="-100" :sy="(keyframe / 600)" :sx="(keyframe / 350)" />
                        <yellow-fish :x="-700 + keyframe" :my="0.4" :mx="1" :y="550"/>

                        <big-fish :x="1500 - keyframe" :my="0.5" :y="125"/>
                        <yellow-fish :x="-900 + keyframe" :my="0.2" :mx="1.8" :y="625"/>
                        <big-fish :x="1900 - keyframe" :y="400" :my="0" :mx="1.5"/>
                    </slot>
                </underwater>
            </reset>
        </g>
    </vector>
</template>




