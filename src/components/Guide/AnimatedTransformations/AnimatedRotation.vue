<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}
        <svg width="100%" height="100%">
            <!-- Rotates in a circle starting at 0 Deg -->
            <balloon :a="angle % 360"/>

            <!-- Rotates in a circle starting at 45 Deg -->
            <balloon fill="blue" :a="(45 + angle) % 360" :x="125"/>

            <!-- Rotates in a circle starting at 90 Deg -->
            <balloon fill="green" :a="(90 + angle) % 360" :x="225"/>

            <!-- Rotates in a circle starting at 200 Deg -->
            <balloon fill="orange" :a="(200 + angle) % 360" :x="325"/>
        </svg>
    </div>
</template>
