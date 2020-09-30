---
title: Tween
type: bytepath
order: 9
---

- tween class is a helper object that handles transitioning your animation from state A (the state of your component at the start of the animation frame)
to state B (The state at the end of your animation frame)

- you can use it to smoothly transition between Start and End state for each data point

- tween methods
    - number tweens between two numbers
    - hex tweens between two hex strings to do colour transitions
    -between  Value A is set at the start of the animation frame, Value B at the end 
    - lookAt acceps the ID of a dom element and smoothly transitions the camera to look at whatever you provide
    - follow, same as look at but always keeps its distance allowing you to make a camera that follows characters (think mario games on your nintendo)
    
    
- animation provides the tween class the start and end frames of the animation so that it's able to calculate smooth transitions

    
    
### Animating colors
You can animate colors using the tween.hex function

<<< @/docs/.vuepress/components/KeyframeAnimation/Color.vue

<Demo :end="3000" v-slot:default="{ keyframe }">
<KeyframeAnimation-Color :keyframe="keyframe" />
</Demo>    
