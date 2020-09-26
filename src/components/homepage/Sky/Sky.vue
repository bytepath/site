<script>
    import Bytepath from 'bytepath';
    import Cloud from "../Cloud";
    import ChaosBalloons from "../../Animation/Assets/ChaosBalloons/ChaosBalloons";

    export default Bytepath.CreateAsset({
        name: 'sky',

        props: {
            fps: {
                type: Number,
                default: 15
            }
        },
        components: {
            ChaosBalloons,
            Cloud,
            balloon: Bytepath.samples.assets.balloon,
            'clock': Bytepath.timers.clock,
            'bounce': Bytepath.animations.bounce,
        }
    });
</script>

<template>
    <vector v-bind="$props">
        <polygon class="fill-current" points="1367.28 2500 1.43 2500 1.43 331.86 1367.28 191.8 1367.28 2500"/>
        <path class="fill-current"
              d="M0,278.42,1.05,493l1366.23-245.9L1367,72.46,1195.64,0,864.1,133.89,682,63.41S344.08,190,341.46,189.82s-161.61-61.33-161.61-61.33Z"/>

        <slot/>
        <clock :fps="10" :repeat="true" v-slot="t">
            <bounce :keyframe="t.keyframe" :mx="0.5" v-slot="bounce">
                <g>
                    <cloud :matrix="bounce.matrix" :mx="0.2" :x="(-300 + (keyframe % 1040)) " :y="700"/>
                    <cloud :matrix="bounce.matrix" :mx="0.2" :x="(-300 + (keyframe % 1040)) " :y="700"/>
                    <cloud :matrix="bounce.matrix.inverse()" :mx="0.15" :x="-400 + (keyframe % 750)" :y="550"/>
                    <cloud :matrix="bounce.matrix" :mx="0.1" :x="-450 +  (keyframe % 1060)" :y="300"/>
                </g>
            </bounce>
        </clock>
    </vector>
</template>
