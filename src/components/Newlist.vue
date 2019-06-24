<template>
    <div>
        <!-- <mt-loadmore 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="load"> -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul v-if="goods.length>0">
                <li v-for="(good,i) in goods" :key="i">
                    <Item :good="good"></Item>
                </li>
            </ul>
        </van-pull-refresh>
        <!-- </mt-loadmore> -->
    </div>
</template>
<script>
    import Item from "./item.vue"
    export default {
        name: 'NewList',
        props: ["m", "allGoods"],
        data() {
            return {
                allLoaded: false,  // 判断数据是否加载完毕
                goods: this.allGoods.filter(item => item.type.value == this.m.value),
                isLoading:false,

            }
        },
        components: {
            Item
        },
        methods: {
            onRefresh() {
                console.log("向下拉")
               this.$axios.get("/vue/getTypeGoods",{
                   params:{
                       type:this.m.value,
                   }
               }).then(res=>{
                   console.log(res.data.result)
                   this.goods=res.data.result.reverse() //假刷新
               })
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    
                }, 500);
            },
            // loadTop() {
            //     console.log("向下拉。。。")

            // },
            // loadBottom() {

            //     allLoaded: true,  // 判断数据是否加载完毕
            //         console.log("向上拉。。。")


            // }
        }
    }


</script>