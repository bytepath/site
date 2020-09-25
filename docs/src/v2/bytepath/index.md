---
title: Introduction
type: bytepath
order: 2
---

## What is BytePath?

Bytepath is a framework for building vector graphics and animations in your web development projects. BytePath was designed with the goal that is has to be ***FUN*** meaning has been designed from the ground up to be as simple as possible, allowing you to use the skills and tools you already have to build interactive scenes that are only limited by your imagination.   

- **For Artists/Creatives** 
    - Art assets are created using the tools you already know how to use. If you are familiar with Adobe Illustrator, Affinity Designer, or any other program that can output SVG files, You know everything you need to start creating and sharing your ideas with the world

    - Animations are created using simple declarative steps that anyone can use and understand. Bytepath will handle the hard work for you allowing you can focus on the creative process. 

    - Build once, reuse forever. Bytepath assets are designed to be modular and reusable in future projects. Share your creations with the community allowing others to build new creations using assets built by you. 
        
- **For Developers** 
    - Bytepath has been designed to be used by web developers and makes the assumption that you have no experience with computer graphics.

    - BytePath is built on top of <a href="https://www.vuejs.org">Vue.js</a>. The same skills you've perfected to make awesome websites can now be used to create computer graphics. Anything you can do in vue, you can do here (slots, $emit, Mouse/Keyboard Events, props, mixins, etc) 
    
    - Art assets are single file Vue.js components allowing you to store your art, code, and animations in a single reusable module. 
    
    - Rotate, Scale, and reposition on screen graphics by modifying prop values. Art assets will automatically redraw after any change of position

    - Animate scenes with dead simple javascript objects you already know how to write. Animations will automatically update when the :keyframe prop of a component changes 
    
    - No art skills? Use NPM, Yarn, etc to install community made assets that you can re-purpose for use in your own projects. 
   
     

    

		


## Getting Started
<a class="button" href="installation.html">Installation</a>
<p class="tip">The official guide assumes an intermediate level knowledge of HTML, CSS, and JavaScript, and the Vue.js framework. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.</p>

## Rendering Our First Vector Graphic
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>

Lets start by rendering a simple rectangle using the included the &lt;vector&gt; component.
Internally, &lt;vector&gt; is just a really fancy &lt;svg&gt;, so any valid &lt;svg&gt; syntax can be written inside. 
``` html
<!-- Rectangle.vue -->
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector>
        <rect width="50" height="50" fill="red" />
    </vector>
</template>
```
{% raw %}
<div id="vector-rect" class="demo">
    <vector-rect />
</div>
<script>
var app2 = new window.vueapp({ el: '#vector-rect' })
</script>
{% endraw %}

<p class="tip">It's helpful to be familiar with the &lt;svg&gt; tag, but if you aren't, dont worry! You won't be manually building assets like this in real projects unless you have a specific reason to do so.</p>

<br />

## Positioning Vector Graphics Using Props

We can position vector images by using the following props. These values are reactive so your shape will be automatically re drawn after every change.
<table><thead><tr><td>Prop</td><td>Description</td></tr></thead><tbody><tr><td>:x</td><td>X Position</td></tr><tr><td>:y</td><td>Y Position</td></tr><tr><td>:a</td><td>Rotation Angle (degrees)</td></tr><tr><td>:sx</td><td>Horizontal Scale</td></tr><tr><td>:sy</td><td>Vertical Scale</td></tr><tr><td>:width</td><td>Asset Width</td></tr><tr><td>:height</td><td>Asset Height</td></tr><tr><td>:position</td><td>Set all position values at once by using a "Position" object</td></tr><tr><td>:matrix</td><td>(Advanced) Used to modify the internal projection matrix to achieve graphical effects.</td></tr></tbody></table>

<br />

# Transformations
## Translations Along X & Y Axis

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
By modifying the **:X** and **:Y** props of the &lt;vector&gt; we created in the previous example, we can move our rectangle around the screen. In the world of computer graphics, changing the position of an element is referred to as a "Translation"
``` html
<!-- Rectangle.vue -->
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector :x="100" :y="100">
        <rect width="50" height="50" fill="red" />
    </vector>
</template>
```
{% raw %}
<div id="vector-rect-xy-prop" class="demo">
    <svg>
        <vector-rect-xy-props />
    </svg>
</div>
<script>
var app3 = new window.vueapp({ el: '#vector-rect-xy-prop' })
</script>
{% endraw %}

<br />

## Scale Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can increase or decrease the size of our &lt;vector&gt; by modifying the **:SX** and **:SY** props of the &lt;vector&gt; component. In the world of computer graphics, changing the position of an element is referred to as a "Scale Transformation"
``` html
<!-- Rectangle.vue -->
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="100%" height="100%">
        <vector>
            <rect width="50" height="50" fill="red" />
        </vector>
        
        <vector :x="100" :sx="2" :sy="2">
            <rect width="50" height="50" fill="blue" />
        </vector>
        
        <vector :x="275" :sx="4" :sy="3">
            <rect width="50" height="50" fill="green" />
        </vector>
        
        <vector :x="425" :sx="0.5" :sy="3">
            <rect width="50" height="50" fill="orange" />
        </vector>
    </svg>
</template>
```
{% raw %}
<div id="vector-rect-scale-prop" class="demo">
    <vector-rect-scale-props />
</div>
<script>
var app4 = new window.vueapp({ el: '#vector-rect-scale-prop' })
</script>
{% endraw %}

<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />

## Rotation Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can increase or decrease the size of our &lt;vector&gt; by modifying the **:SX** and **:SY** props of the &lt;vector&gt; component. In the world of computer graphics, changing the position of an element is referred to as a "Scale Transformation"
``` html
<!-- Rectangle.vue -->
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="100%" height="100%">
        <vector>
            <rect width="50" height="50" fill="red" />
        </vector>
        
        <vector :x="100" :sx="2" :sy="2">
            <rect width="50" height="50" fill="blue" />
        </vector>
        
        <vector :x="275" :sx="4" :sy="3">
            <rect width="50" height="50" fill="green" />
        </vector>
        
        <vector :x="425" :sx="0.5" :sy="3">
            <rect width="50" height="50" fill="orange" />
        </vector>
    </svg>
</template>
```
{% raw %}
<div id="vector-rect-rotate-prop" class="demo">
    <vector-rect-rotate-props />
</div>
<script>
var app4 = new window.vueapp({ el: '#vector-rect-rotate-prop' })
</script>
{% endraw %}

<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />








