<template>
    <footer >
        <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="foot.path">
                <!-- <van-tabbar-item info="3">
                    <span>自定义</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
                </van-tabbar-item> -->
                <i class="icon iconfont" v-html="foot.icon" ></i>
                <mt-badge type="error" v-if="i==1" class="hot">{{good.length}}</mt-badge>
                <mt-badge type="error" v-if="i==3" class="hot">{{storeNUm}}</mt-badge>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>
<script>
    import { bus } from "@/utils/bus"

    export default {
        name: "foot",
       
        data() {
            return {
                foots: [
                    { txt: "首页", path: "/index/home", name: "home", icon: "&#xe62a;" },
                    { txt: "购物车", path: "/index/find", name: "find", icon: "&#xe778;" },
                    { txt: "商品分类", path: "/index/buycar", name: "buycar", icon: "&#xe614;" },
                    { txt: "我", path: "/index/my", name: "my", icon: "&#xe60c;" }
                ],
                good: []
            }
        },
        computed:{
            storeNUm(){
              return  this.$store.state.count
            }
        },

        created() {
            bus.$on("num", (val) => {
                this.good = val
            })
        },
        mounted(){
            bus.$on("num1", (val) => {
                this.good = val
            })
        }

    }

</script>


<style lang="scss" scoped>
    footer {
        position: fixed;
        width: 100%;
        height: .9rem;
        left: 0;
        bottom: 0;
        background: #fff;
        display: flex !important;
        z-index: 100;
        border-top: 1px solid black;

        div {
            flex: 1;
            height: 0.9rem;

            a {
                display: block;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 0.06rem 0;
                text-align: center;
                font-family: "微软雅黑";
                color: #999;
                position: relative;

                i {
                    width: 100%;
                    height: 0.45rem;
                    line-height: 0.45rem;
                    font-size: 0.42rem !important;
                }

                span {
                    width: 100%;
                    height: 0.35rem;
                    line-height: 0.35rem;
                    font-size: 0.26rem;
                }

                .hot {
                    position: absolute;
                    top: 0;
                    left: 60%;
                    display: inline;
                    width: .25rem;
                }
            }

            .nav-active,
            .router-link-exact-active {
                color: #0dc441;
                border-color: #0dc441;
            }

        }
    }
</style>