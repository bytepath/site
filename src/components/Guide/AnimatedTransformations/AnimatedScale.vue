<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return {
                sx: 1,
                sy: 1,
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="sx" min="0" max="4">Scale X = {{ sx }}<br/>
        <input type="range" v-model.number="sy" min="0" max="4">Scale Y = {{ sy }}<br/>
        <balloon :sx="sx" :sy="sy"/>
    </div>
</template>
