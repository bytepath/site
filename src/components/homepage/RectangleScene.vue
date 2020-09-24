<template>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1300 500">
        <clock v-slot="{ keyframe, timer }" auto-play>
                <rectangle fill="pink" anim="tornado" :repeat="true" />
        </clock>
    </svg>
</template>

<script>
    import Rectangle from "./Rectangle";
    import { timers } from "bytepath";

    export default {
        components: {
            Rectangle,
            "clock": timers.clock,
        },
    }
</script>
