<script>
    import Bytepath from "bytepath";
    import MyAnimation from "./MyAnimation";

    export default Bytepath.CreateAsset({
        data() {
            return {
                balloonPos: new Bytepath.Position(),
                curFrame: 0,
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations(){
            return {
                default: MyAnimation,
            };
        },
    });
</script>

<template>
    <div>
        <input type="range" min="0" max="500" v-model.number="curFrame"/>Keyframe = {{ curFrame }}<br/>
        <balloon :position="balloonPos" />
    </div>
</template>
