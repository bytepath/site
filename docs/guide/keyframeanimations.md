---
title: Keyframe Animations
type: bytepath
order: 8
---
## Creating Keyframe Animations

We can create keyframe animations by adding an animations() attibute to the component passed into bytepath.createAsset

**AnimatedBalloon.vue**

<<< @/docs/.vuepress/components/Animation/AnimatedBalloon.vue

The Balloon asset should move to X=100 and never go past that point no matter how large :keyframe becomes

<Demo :end="1000" v-slot="{ keyframe }">
<Animation-AnimatedBalloon :keyframe="keyframe" />
</Demo>    


## Repeating animations

Assets have a :repeat prop that if true, will make the animation repeat from 0 if keyframe > end frame of the animation. 
Lets toggle repeat on the simple animation we made in the previous example 

```html
<!-- line 35-37 of AnimatedBalloon.vue -->
<template>
    <balloon :repeat="true" :position="balloonPos" />
</template>
```

<Demo :end="1000" v-slot="{ keyframe }">
<Animation-AnimatedBalloon :repeat="true" :keyframe="keyframe" />
</Demo> 


## Adding Multiple Keyframes
You can add as many keyframes as you want to an animation. In the example below we make the balloon perform the following steps
 - Frame 0 to 100 -- Scroll X position
  - Frame 100 to 200 -- Rotate
 - Frame 200 to 300 -- Scroll Y Position

<<< @/docs/.vuepress/components/Animation/MultiAction.vue

<Demo :end="1000" v-slot="{ keyframe }">
<Animation-MultiAction :keyframe="keyframe" />
</Demo>    


## Storing Animations In Separate Files

As you can see animations quickly turn your single file components into spaghetti. Luckily there is an easy solution to this. Just store your animations in separate files then import them into your component

<<< @/docs/.vuepress/components/Animation/SeparateAnimationFile.vue

<<< @/docs/.vuepress/components/Animation/MyAnimation.js


<Demo :end="1000" v-slot="{ keyframe }">
<Animation-SeparateAnimationFile :keyframe="keyframe" />
</Demo>
