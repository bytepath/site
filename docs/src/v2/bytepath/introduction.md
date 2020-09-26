---
title: Introduction
type: bytepath
order: 0
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
        props: {
            color: {
                type: String,
                default: "red",
            }
        },

        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector>
        <rect width="50" height="50" :fill="color" />
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

## Component Based Assets
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>

Since the rectangle we just created is just a normal single file Vue component, we can now use it over and over again by importing Rectangle.vue into another component, just like we can do in any Vue.js based app.
By changing the :color prop we added to the &lt;rectangle&gt; component, we can now create an unlimited number of unique graphical assets simply by changing the color.   

``` html
<!-- Rectangle.vue -->
<script>
    import Rectangle from "./Rectangle";

    export default {
        components: { Rectangle },
    }
</script>

<template>
    <div>
        <rectangle fill="red" />
        <rectangle fill="blue" />
        <rectangle fill="green" />
        <rectangle fill="orange" />
    </div>
</template>
```
{% raw %}
<div id="cb" class="demo">
    <component-based />
</div>
<script>
var app3 = new window.vueapp({ el: '#cb' })
</script>
{% endraw %}


## Sample Assets
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>

Bytepath ships with sample assets you can use right out of the box. Lets try importing the bytepath balloon logo.
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            balloon: Bytepath.samples.assets.balloon,
        },
    }
</script>

<template>
    <div>
        <balloon color="red" />
        <balloon color="blue" />
        <balloon color="green" />
        <balloon color="orange" />
    </div>
</template>
```
{% raw %}
<div id="a4" class="demo">
    <balloon-sample />
</div>
<script>
var app4 = new window.vueapp({ el: '#a4' })
</script>
{% endraw %}

<p class="tip">It's helpful to be familiar with the &lt;svg&gt; tag, but if you aren't, dont worry! You won't be manually building assets like this in real projects unless you have a specific reason to do so.</p>


## Asset Composition
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>

Assets can be composed together in other components to create new assets. 
In the example below we import two sample assets, balloon and human. By including human as a slotted component on balloon, Bytepath will now consider these to be a single asset.
Try moving the sliders below and watch the assets move together. 
 
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 50, y: 0, angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
            human: Bytepath.samples.assets.human,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100">X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="50">Y = {{ y }}<br/>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}<br/>

        <!-- Here human and balloon are two distinct assets -->
        <human :x="0"  />
        <balloon :x="25"  />

        <!-- Here balloon and human have been combined to make a single asset -->
        <balloon :x="x" :y="y" :a="angle" v-slot="balloon">
            <human :position="balloon.position" :sx="2" :sy="2" aspect="xMidYMax meet"/>
        </balloon>
    </div>
</template>
```
{% raw %}
<div id="a5" class="demo">
    <asset-composition />
</div>
<script>
var app5 = new window.vueapp({ el: '#a5' })
</script>
{% endraw %}

<p class="tip">It's helpful to be familiar with the &lt;svg&gt; tag, but if you aren't, dont worry! You won't be manually building assets like this in real projects unless you have a specific reason to do so.</p>




