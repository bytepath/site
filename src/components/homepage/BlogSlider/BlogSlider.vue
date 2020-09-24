<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        mixins:[],
        props: {
        },

        data(){ return {}; },
        computed:{},
        methods:{},
        components: { VueperSlides, VueperSlide },
    }
</script>

<template>
    <vueper-slides
        autoplay
        class="no-shadow "
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide
            v-for="i in 10"
            :key="i"
            :title="i.toString()"
            >
            <template v-slot:content>
                <div class="bg-gray-200">
                    <img :src="'img/blog' + ((i % 3) + 1) + '.jpg'" />
                    <span class="text-sm">HELLO MY NAME IS BRADLEY LOL</span>
                </div>
            </template>
        </vueper-slide>
    </vueper-slides>
</template>

