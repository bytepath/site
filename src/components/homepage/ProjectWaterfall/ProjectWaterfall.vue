<script>
    export default {
        data() {
            return {};
        },
        created() {},
        methods:{

        },
        computed:{
            projects() {
                let retval = [
                    // {
                    //     title: "Septic Sitter",
                    //     content: "",
                    //     img: "/img/septicsitter.png",
                    //     cls: ['bprc'],
                    // },

                    {
                        title: "Logo Garden",
                        content: "",
                        img: "/img/logogarden.png",
                        cls: {},
                    },

                    {
                        title: "Suzuki Financial Services",
                        content: "",
                        img: "/img/suzukifinancialservices.jpg",
                        cls: ['bpc'],
                    },

                    // {
                    //     title: "Wait Lifter (Coming Soon!)",
                    //     content: "",
                    //     img: "",
                    //     cls: {},
                    // },

                    {
                        title: "Suzuki E-Centre",
                        content: "",
                        img: "/img/suzukiecentre.jpg",
                        cls: {},
                    },

                    {
                        title: "Justice Knowledge Network",
                        content: "",
                        img: "/img/jkn.jpg",
                        cls: {},
                    },

                    {
                        title: "iWave",
                        content: "",
                        img: "/img/iwave.svg",
                        cls: {},
                    },


                ];

                return retval;
            },
        }
    };
</script>

<template>
    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <template v-for="project in projects">
            <div class="rounded" style="">
                <img class="image" :src="project.img" />
            </div>
        </template>
    </div>
</template>

<style scoped>
    .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    .container:hover .image {
        opacity: 0.3;
    }

    .container:hover .middle {
        opacity: 1;
    }

    .text {
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        padding: 16px 32px;
    }
</style>
