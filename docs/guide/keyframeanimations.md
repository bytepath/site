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
    <balloon :repeat="true" color="blue" :position="balloonPos" />
</template>
```

<Demo :end="1000" v-slot="{ keyframe }">
<Animation-AnimatedBalloon color="blue" :repeat="true" :keyframe="keyframe" />
</Demo> 


### Using Create Keyframe function
You can create your animations by writing objects manually like we did in the previous example, and everything will work fine.
However, writing objects manually 
 - is a bit of a chore 
 - prone to errors and typos 
 - can be messy in the single file component paradigm if you have a lot of animation frames
 
 Instead its suggested you use the bytepath CreateKeyframe function to create animations in a functional style. The following 
 example is equivalent to the animation we made in the previous example

<<< @/docs/.vuepress/components/Animation/CreateKeyframe.vue

<Demo :end="1000" v-slot="{ keyframe }">
<Animation-CreateKeyframe :keyframe="keyframe" />
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

## Assets can have an unlimited number of animations 

Assets can have multiple animations, just add more keys to the object returned by animations() func 
