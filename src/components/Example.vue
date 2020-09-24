<template>
    <svg>
    </svg>
</template>

<script>
    import bytepath from "bytepath";

    export default {
        mixins:[bytepath.AnimationEntity],
        props: {},
        data(){ return {}; },
        computed:{},
        methods:{
            componentAnimations(){
                return {
                    default: [],
                    spin:[
                        {
                            start: 0,
                            handler(context, tween) {
                                context.position.angle = context.keyframe % 360;
                            }
                        }
                    ]
                }
            }
        },
        components:{}
    }
</script>



