<template>
    <div>

        <Head :title="$route.query.name" :show="true"></Head>
        <div v-if="good.type">
            <img :src="good.img" alt="" width="100%" height="240">
            <h2>{{good.name}}</h2>
            <h2>价格 : {{good.price}} / 折扣 {{good.discount }}</h2>
            <h2> 分类 : {{good.type.text}}</h2>
        </div>
        <div>

            <button @click="count++">加</button>
            <input type="text" :value="count">
            <button @click="count--">减</button>
            <van-stepper v-model="count" />
        </div>
       
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车"  />
            <van-goods-action-button type="warning" text="加入购物车" @click="gotocar" />
            <van-goods-action-button type="danger" text="立即购买" @click="adds" />
        </van-goods-action>

    </div>
</template>
<script>
    export default {
        name: "goods",
        data() {
            return {
                good: "",
                count: 1,
            }
        },
        methods: {
            adds() {
                this.$router.push({name:'find'})

            },
            gotocar() {
                this.$axios.post('/vue/gotocar',{
                    
                        num:this.count,
                        id:this.$route.params.goodId,
                        good:JSON.stringify(this.good)  
                    
                }).then(res=>{
                    
                    console.log(res.data.result)
                })

            }

        },
        mounted() {
            // console.log(this.$route.params.goodId)
            this.$axios.get('/vue/goodsOne', {
                params: {
                    goodId: this.$route.params.goodId,
                }
            }).then(res => {
                // console.log(res.data.result)
                this.good = res.data.result
            })
        }
    }


    // 渲染购物车
    

</script>