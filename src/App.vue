<script>
    /* eslint-disable */

    import Demo from "../docs/.vuepress/components/Demo";
    import Bytepath from "bytepath";
    import CameraControl from "../docs/.vuepress/components/ArtAsset/CameraControl";

    export default {
        name: 'App',

        components: {
            Demo,
            CameraControl,
        }
    }
</script>

<template>
    <div id="app" style="width: 100%; height: 100%; fill:#90CDF4;">
        <demo :end="2500" v-slot="demo">
            <camera-control :repeat="true" v-bind="demo" />
        </demo>
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
