<script>
    /* eslint-disable */

    import Demo from "../bytepathnpm/docs/.vuepress/components/Demo";
    import Bytepath from "bytepath";
    import AssetComposition from "../bytepathnpm/docs/.vuepress/components/Introduction/AssetComposition";
    import CameraControl from "../bytepathnpm/docs/.vuepress/components/ArtAsset/CameraControl";

    export default {
        name: 'App',

        components: {
            Demo,
            AssetComposition,
            CameraControl,
        },
    }
</script>

<template>
    <div id="app" style="fill:#90CDF4;">
        <demo>
            <camera-control />
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
