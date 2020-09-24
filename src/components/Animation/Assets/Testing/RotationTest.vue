<script>
    import bytepath from "bytepath";
    import Rectangle from "../Animation/Assets/Rectangle";

    export default {
        mixins: [],
        props: {},

        data() {
            return {};
        },
        computed: {},
        methods: {},
        components: {
            scroll: bytepath.timers.scroll,
            clock: bytepath.timers.clock,
            Rectangle,
        }
    }
</script>

<template>
    <clock :fps="30" v-slot="{ keyframe, timer }" auto-play>
        <svg class="text-orange-400" viewBox="0 0 1363 20000">
            <g transform="rotate(45)">
                <rectangle :sx="2" :sy="2" :keyframe="keyframe" :repeat="true" anim="loop" :cx="25" :cy="25"  :y="300" :x="300 - ((Math.sin((keyframe/100) % 360) * 200))" :a="(keyframe/2) % 360"  />
            </g>
        </svg>
    </clock>
</template>
