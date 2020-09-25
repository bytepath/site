---
title: Inline Animations
type: bytepath
order: 5
---
## Translations Along X & Y Axis

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
By modifying the **:X** and **:Y** props of the &lt;vector&gt; we created in the previous example, we can move our rectangle around the screen. In the world of computer graphics, changing the position of an element is referred to as a "Translation"
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="{ keyframe }">
        <svg width="100%" height="100%">
            <vector :x="keyframe">
                <rect width="50" height="50" fill="red"/>
            </vector>
        </svg>
    </scroll>
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
        components: {
            vector: Bytepath.graphics.vector,
            scroll: Bytepath.timers.scroll,
            reset: Bytepath.timers.reset,
        }
    }
</script>

<template>
    <scroll :speed="1" v-slot="{ keyframe }">
        <reset :keyframe="keyframe" :start="1500" v-slot="reset">
            <svg width="100%" height="100%">
                <vector :sy="reset.keyframe / 100">
                    <rect width="50" height="50" fill="red"/>
                </vector>

                <vector :x="100" :y="100" :sx="reset.keyframe / 100">
                    <rect width="50" height="50" fill="blue"/>
                </vector>
                
                <vector :x="200" :sx="reset.keyframe / 100" :sy="reset.keyframe / 100">
                    <rect width="50" height="50" fill="green"/>
                </vector>
            </svg>
        </reset>
    </scroll>
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
We can rotate our &lt;vector&gt; components by modifying the **:A** prop. In the world of computer graphics, changing the position of an element is referred to as a "Rotation Transformation"
``` html
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
        <g transform="translate(0, 50)">
            <vector>
                <rect width="100" height="50" fill="red"/>
            </vector>
            <vector :a="45" :x="125">
                <rect width="100" height="50" fill="blue"/>
            </vector>

            <vector :a="90" :x="225">
                <rect width="100" height="50" fill="green"/>
            </vector>

            <vector :a="200" :x="325">
                <rect width="100" height="50" fill="orange"/>
            </vector>
        </g>
    </svg>
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
