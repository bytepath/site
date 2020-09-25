---
title: Scroll Timer
type: bytepath
order: 4
---
## Scroll Timer

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
The Scroll timer component will output a keyframe value based on the scroll position of the page. 
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            scroll: Bytepath.timers.scroll
        }
    }
</script>

<template>
    <scroll v-slot="{ keyframe }">
        Current Keyframe: {{ keyframe }}
    </scroll>
</template>
```
{% raw %}
<div id="using-scroll" class="demo">
    <using-scroll />
</div>
<script>
var app3 = new window.vueapp({ el: '#using-scroll' })
</script>
{% endraw %}

<br />
