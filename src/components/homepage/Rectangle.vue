<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <g :transform="transform">
            <rect :fill="fill" width="50" height="50"/>
        </g>
    </svg>
</template>

<script>
    import { AnimationEntity } from "bytepath";
    import TornadoAnim from "./TornadoAnim";

    export default {
        mixins: [AnimationEntity],
        props: {
            fill: {
                type: String,
                default: "red",
            },
        },

        methods: {
            componentAnimations() {
                return {
                    default: [],
                    tornado: TornadoAnim,
                }
            }
        },
    }
</script>
