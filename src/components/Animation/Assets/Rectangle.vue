<template>
        <g  :transform="transform">
            <rect fill="red" x="0" y="0" width="25" height="25"/>
            <rect fill="orange" x="25" y="0" width="25" height="25"/>
            <rect fill="blue" x="0" y="25" width="25" height="25"/>
            <rect fill="green" x="25" y="25" width="25" height="25"/>
        </g>
</template>

<script>
    import bytepath from "bytepath";

    export default {
        mixins: [bytepath.AnimationEntity],
        props: {},
        data() {
            return {
                rx: 0,
                ry: 0,
            };
        },

        methods: {
            componentAnimations() {
                return {
                    loop: [{
                        start: 0,
                        handler(context, tween) {
                            console.log("hello from rect");
                        }
                    }]
                }
            }
        }
    }
</script>



