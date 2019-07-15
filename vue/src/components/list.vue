<template>

    <div>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul v-if="goods.length>0">
                <li v-for="(good,i) in goods"  :key="i">
                    <img :src="good.img" alt="" width="100%" height="250">
                    <h2>{{good.name}}</h2>
                    <h2>价格 : {{good.price}} / 折扣 {{good.discount }}</h2>
                    <h2> 分类 : {{good.type.text}}</h2>
                </li>
                
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
    export default{
        name:"list",
        props:["goods"],
        methods:{
            loadTop(){

            },
            loadBottom(){

            },
            allLoaded(){

            }

        }
    }


</script>