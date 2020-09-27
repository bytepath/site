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
            'pointy-background': Bytepath.samples.scenes.partials.pointyBackground,
        }
    });
</script>

<template>
    <vector v-bind="$props">
        <pointy-background>
            <slot />
        </pointy-background>
    </vector>
</template>
