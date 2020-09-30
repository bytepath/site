---
title: Keyframe Animations
type: bytepath
order: 8
---
## :keyframe Prop
Animations have a prop called :keyframe that accepts an integer value of the frame we want to display. If we provide :keyframe = 5 we want to display frame 5. If we provide keyframe 2000 we want frame 2000 of the animation

## Creating Keyframe Animations

We can create keyframe animations by adding an animations() attibute to the component passed into bytepath.createAsset


::: v-pre

```html
<!-- AnimatedBalloon.vue -->
<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        data() {
            return {
                balloonPos: new Bytepath.Position(),
                currentFrame: 0,
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations(){
            return {
                // Default animation is ran by default if no animation is specified
                default: [
                    {
                        name: "Moves right from 0 to 500",
                        start: 0,
                        end: 500,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 2);
                            context.balloonPos.x = frame;
                            context.balloonPos.y = 0;
                            context.balloonPos.angle = 0;
                            context.balloonPos.scaleX = 1;
                            context.balloonPos.scaleY = 1;

                        },
                    },
                    {
                        name: "Moves Down and right while rotating frames 501 to 1000",
                        start: 501,
                        end: 1000,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 2);
                            context.balloonPos.x = frame;
                            context.balloonPos.y = frame - 201;
                            context.balloonPos.angle = frame % 360;
                            context.balloonPos.scaleX = 1;
                            context.balloonPos.scaleY = 1;
                        },
                    },

                    /**
                     *
                     *  NOTE THE GAP BETWEEN PREVIOUS END (1000) and New Start (1500)
                     *  THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
                     */


                    {
                        name: "Scale x and y without moving from 1500 to 2500",
                        start: 1500,
                        end: 2500,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 10);
                            let scale = ((keyframe - 1000) / 250);

                            context.balloonPos.x = 365;
                            context.balloonPos.y = (365 - 201) - frame;
                            context.balloonPos.angle = 5;
                            context.balloonPos.scaleX = scale;
                            context.balloonPos.scaleY = scale;
                        },
                    }
                ],
            };
        },
    });
</script>
```

```html
<template>
    <div>
        <vector v-bind="$props">
            <animated-balloon :keyframe="currentFrame"/>
        </vector>
        <input type="range" v-model.number="currentFrame" min="0" max="2501"> <br />
        <span v-if="currentFrame == 2501" style="color:red;">REPEATING!</span><br/>
    </div>
</template>

<script>
    import Bytepath from "bytepath";
    import AnimatedBalloon from "./AnimatedBalloon";

    export default Bytepath.CreateAsset({
        data() {
            return {
                balloonPos: new Bytepath.Position(),
                currentFrame: 0,
            };
        },

        components: {
            AnimatedBalloon,
        },
    });
</script>
```

:::

:::demo
<Animation-AnimationComputedExample />
:::


## Repeating animations

Animations have a :repeat prop that accepts a boolean. If set to true, current animation frame will always be a value between animation start and end, repeating indefinitely

Example   
    Current Frame : 0
    End frame: 1000
    Actual Frame: 0

    Current Frame : 1001
    End frame: 1000
    Actual Frame: 1

    Current Frame : 10001
    End frame: 1000
    Actual Frame: 1


