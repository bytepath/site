<script>
    /* eslint-disable */
    import Bytepath from "bytepath";
    import Demo from "./examples/Demo";
    import example from "./examples/KeyframeModifiers/DelayHiddenChain";
    import HomePage from "./examples/HomePage";

    export default {
        name: 'App',

        components: {
            Demo,
            example,
            HomePage,
            vector: Bytepath.graphics.vector
        },
    }
</script>

<template>
    <div id="app" style="fill:#90CDF4;">
        <home-page />
    </div>
</template>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
