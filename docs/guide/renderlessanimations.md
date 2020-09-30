---
title: Renderless Animations
type: bytepath
order: 12
---


## Renderless animations with props Default Values
All entities have the following default components

all notmal props (x,y,sx,sy,angle,etc)


## Renderless animations via :anim prop

pass an animation to the :anim prop instead of a string and the actual animation of your component will be ran in the context of your 
child

note that context is a reference to the child componen, so any variables you access or change in your animation need to exist in the child component

to get around this each entity has defaut values that you can always access 
color == colors array []   access with :color
position = positions array []  access with a string to :position instead of


## Changing the animation player via :player prop
you can change the animation player that the child component uses by passing it to the :player prop
The animation player is passed a reference to your child every keyframe tick so you can use this to grab it for whatever you want to do 

