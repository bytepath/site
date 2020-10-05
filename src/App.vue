<script>
    /* eslint-disable */

    import Demo from "../bytepathnpm/docs/.vuepress/components/Demo";
    import example from "../bytepathnpm/docs/.vuepress/components/ArtAsset/CameraControl";

    export default {
        name: 'App',

        components: {
            Demo,
            example,
        },
    }
</script>

<template>
    <div id="app" style="fill:#90CDF4;">
        <demo :end="2500" v-slot="{ keyframe }">
            <example :keyframe="keyframe" />
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
