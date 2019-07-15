<template>
    <div>
        <!-- <img :src="one" alt=""> -->



        <mt-swipe :auto="4000" class="guide" :continuous="false" :show-indicators="false">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt=""  @click="gotoHome(i)">
            </mt-swipe-item>
        </mt-swipe>

    </div>
</template>



<script>
    export default {
        name: "guide",
        data() {
            return {
                one: require("@/assets/images/slide1.png"),

                imgs: [
                    require("@/assets/images/slide1.png"),
                    require("@/assets/images/slide2.png"),
                    require("@/assets/images/slide3.png"),
                    require("@/assets/images/slide4.png"),
                ],
            }
        },
        methods: {
            gotoHome(id){
                if(id==this.imgs.length-1){
                    this.$router.push({name:'home'})
                }
            }
        },
        mounted(){
            if(localStorage.num){
                localStorage.num++;
                if(localStorage.num>4){
                    this.$router.push({name:'home'})
                }
            }else{
                localStorage.num=1
            }
        }

    }


</script>
<style lang="css" scoped>
    img {
        width: 100%;
        /* height: 100%; */
    }
</style>