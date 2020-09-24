<script>
    import Bytepath from 'bytepath';
    import svg from "./underwater.svg";

    export default Bytepath.CreateAsset({
        src: svg,
        name: "yellowfish",
        layers: ["yellowfish"],
        mixins: [Bytepath.mutators.acceleratesTranslation],

        components:{},
    });
</script>
