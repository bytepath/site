---
title: Renderless Animations
type: bytepath
order: 12
---
If you find yourself needing to animate an existing asset to do something new, the fastest way to do this is always going to be manipulating the asset via its available props.

available props
color
x
y
sx
sy
angle
etc
 
However, as we have previously learned, animation via prop manipulation gets messy very quickly. In the situation you can pass an animation to an asset through its
:anim prop.  

## Running animations via :anim prop
:anim, as we learned about previously, accepts a string that tells your component which of it's animations it should run. We can also pass this prop an animation object from another components "this.animations". The entity will run this animation in the context of itself meaning we can access and change anything we want inside the child component from the context of the parent 


<<< @/docs/.vuepress/components/Animation/PropAnimation.vue

<Demo :end="2500" v-slot="{ keyframe }">
<Animation-PropAnimation :keyframe="keyframe" />
</Demo>  

## Animations can only access and change properties that exist
This might sound obvious, but since we are running the animation in the context of the child, any data you access and/or change in your animation handler() function must exist in the child class. 

:::source DEMO
Make a demo of an animation attempting to access something that doesn't exist in
child class
:::


## Animations can still run in the parent if a child is using it
A parent component can still access and use any of it's animations even if we are passing it to a child 

:::source DEMO
Show an animation running on parent and child at same time
:::


:::tip WARN
its possible to get confused as to what component is actually running the animation here so be careful
:::

## Renderless animations with props Default Values
All entities have the following default components

all notmal props (x,y,sx,sy,angle,etc)
## Renderless animations with props Default Values





Sometimes you might find yourself wanting to run an animation in the context of your child components but the child component does not have that animation available in it's single file component. 
Of course we could always just import the animation's javascript file in the component and at it to it's list of available animations, but if this animation is specific to the scene you are 
currently building you might not want to do that. 
 

pass an animation to the :anim prop instead of a string and the actual animation of your component will be ran in the context of your 
child

note that context is a reference to the child componen, so any variables you access or change in your animation need to exist in the child component

to get around this each entity has defaut values that you can always access 
color == colors array []   access with :color
position = positions array []  access with a string to :position instead of


## Changing the animation player via :player prop
you can change the animation player that the child component uses by passing it to the :player prop
The animation player is passed a reference to your child every keyframe tick so you can use this to grab it for whatever you want to do 

