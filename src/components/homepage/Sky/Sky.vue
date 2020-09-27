<script>
    import Bytepath from 'bytepath';

    export default Bytepath.CreateAsset({
        name: 'sky',

        props: {
            fps: {
                type: Number,
                default: 15
            }
        },
        components: {
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
    </vector>
</template>
