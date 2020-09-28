---
title: Basic Animations
type: bytepath
order: 2
---
## Prototyping With Inline Animations
 - !!!Quickly try things with props
 - !!!Why this doesnt scale 

## Translations Along X & Y Axis

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
By modifying the **:X** and **:Y** props of the &lt;vector&gt; we created in the previous example, we can move our rectangle around the screen. In the world of computer graphics, changing the position of an element is referred to as a "Translation"
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 1, y: 1 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100" />X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="100" />Y = {{ y }}<br/>
        <balloon :x="x" :y="y"/>
    </div>
</template>
```
{% raw %}
<div id="app1" class="demo">
    <anim-trans />
</div>
<script>
var app1 = new window.vueapp({ el: '#app1' })
</script>
{% endraw %}

<br />

## Scale Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can increase or decrease the size of our &lt;vector&gt; by modifying the **:SX** and **:SY** props of the &lt;vector&gt; component. In the world of computer graphics, changing the position of an element is referred to as a "Scale Transformation"
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return {
                sx: 1,
                sy: 1,
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="sx" min="0" max="4">Scale X = {{ sx }}<br/>
        <input type="range" v-model.number="sy" min="0" max="4">Scale Y = {{ sy }}<br/>
        <balloon :sx="sx" :sy="sy"/>
    </div>
</template>
```
{% raw %}
<div id="vector-rect-scale-prop" class="demo">
    <anim-scale />
</div>
<script>
var app4 = new window.vueapp({ el: '#vector-rect-scale-prop' })
</script>
{% endraw %}

<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />

## Rotation Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can rotate our &lt;vector&gt; components by modifying the **:A** prop. In the world of computer graphics, changing the position of an element is referred to as a "Rotation Transformation Around the Z axis"
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}
        <svg width="100%" height="100%">
            <!-- Rotates in a circle starting at 0 Deg -->
            <balloon :a="angle % 360"/>

            <!-- Rotates in a circle starting at 45 Deg -->
            <balloon color="blue" :a="(45 + angle) % 360" :x="125"/>

            <!-- Rotates in a circle starting at 90 Deg -->
            <balloon color="green" :a="(90 + angle) % 360" :x="225"/>

            <!-- Rotates in a circle starting at 200 Deg -->
            <balloon color="orange" :a="(200 + angle) % 360" :x="325"/>
        </svg>
    </div>
</template>
```
{% raw %}
<div id="vector-rect-rot-prop" class="demo">
    <anim-rotate />
</div>
<script>
var app4 = new window.vueapp({ el: '#vector-rect-rot-prop' })
</script>
{% endraw %}

<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />
<div style="height:100px" />
