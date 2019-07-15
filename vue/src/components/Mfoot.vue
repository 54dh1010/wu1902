<template>
    <footer class="box1">
        <mt-tabbar v-model="active">
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <i slot="icon" class="icon iconfont " v-html="foot.icon"></i>
                <mt-badge type="error" v-if="i==2" class="hot">10</mt-badge>
                <span> {{foot.txt}} </span>
            </mt-tab-item>
        </mt-tabbar>

    </footer>
</template>

<script>
import {bus} from "@/utils/bus"
    export default {
        name: "mfoot",
        data() {
            return {
                foots: [
                    { txt: "首页", path: "/index/home", name: "home", icon: "&#xe62a;" },
                    { txt: "朋友圈", path: "/index/find", name: "find", icon: "&#xe778;" },
                    { txt: "购物车", path: "/index/buycar", name: "buycar", icon: "&#xe614;" },
                    { txt: "我", path: "/index/my", name: "my", icon: "&#xe60c;" }
                ],
                active: 'home'
            }
        },
        watch: {
            active(val) {
                this.$router.push({ name: val })
            }
        },
        mounted() {
            // console.log(this.$route)//载入时  当前路由参数对象
            this.active = this.$route.name

            bus.$on('change',(a)=>{
                this.active=a
            })
        }
    }

</script>