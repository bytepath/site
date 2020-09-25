<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    //import Underwater from "../Underwater/Underwater";
    import Sky from "../../../homepage/Sky/Sky";
    //import YellowFish from "../../Assets/Fish/YellowFish";
    //import BigFish from "../../Assets/Fish/BigFish";
    //import Octopus from "../../Assets/Fish/Octopus";

    export default Bytepath.CreateEntity({
        name: "ocean-scene",
        layers: [],
        src: "www.google.com",
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
            //Underwater,
            //YellowFish,
            //BigFish,
            //Octopus,
            entity: Bytepath.entity,
        },

    });
</script>

<template>
    <entity v-bind="$props">


            <coast :keyframe="keyframe" transform="translate(0 1105)"/>
    </entity>
</template>
