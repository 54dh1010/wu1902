<template>
    <div>

        <Head title="个人中心" :show="true"></Head>

        <h2>个人中心</h2>
        <Swipe id="banner" :options="arr">
            <div class="swiper-slide" v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" width="100%" height="300">
            </div>
        </Swipe>
        <Swipe id="banner1" :options="arr">
            <div class="swiper-slide" v-for="(b,i) in newMy" :key="i">
                <img :src="b.images.large" alt="" width="100%" height="300">
            </div>
        </Swipe>

    </div>
</template>


<script>
    import { Indicator, Toast } from 'mint-ui';
    import { mapState, mapActions,mapGetters } from "vuex"
    export default {
        name: "my",
        computed: {
            ...mapState([
                'data'
            ]),
            ...mapGetters([//获取过滤后的
                'newMy'
            ])
        },
        methods: {
            ...mapActions([
                'getmv'
            ]),
            
        },

        data() {
            return {
                arr: {
                    autoplay: true,
                    loop: true,
                    speed: 1000,
                    initialSlide: 3,

                },
                // obj: [],
                imgs: [
                    require("@/assets/images/img1.jpg"),
                    require("@/assets/images/img2.jpg"),
                    require("@/assets/images/img3.jpg"),
                    require("@/assets/images/img4.jpg"),
                ]
            }
        },
        mounted() {
            // Indicator.open({
            //     text: '加载中...',
            //     spinnerType: 'triple-bounce'
            // });
            this.$axios.get('vue/movie', {
                params: {
                    limit: 8,
                }
            }).then(res => {
                console.log(res.data.result)
                setTimeout(() => {
                    Indicator.close();
                    Toast({
                        message: '请求成功',
                        iconClass: 'icon iconfont icon-success',
                        duration: 500
                    });
                }, 1000);
                this.$nextTick(() => {
                    this.getmv(res.data.result);
                    // this.mv = res.data.result;

                    console.log("下一次DOM 更新之后再执行 promise ")
                })
                // this.getmv(res.data.result) 

            })
        }


    }


</script>