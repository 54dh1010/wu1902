<template>
    <div>

        <Head title="购物车" :show="true"></Head>
        <div v-for="(g,i) in goods" :key='i'>

            <van-card :num="g.num" :tag="g.good.type.value" :price="(g.good.price*0.9).toFixed(2)  " :desc="g.good.name"
                :title="g.good.type.text" :thumb="g.good.img" :origin-price="g.good.price">
                <div slot="footer">
                    <van-stepper v-model="g.num" />
                </div>
            </van-card>
        </div>
        <div>

        </div>
        <div>
            <van-submit-bar :price="price" button-text="提交订单">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
        </div>

    </div>
</template>
<style scoped>
    .add {
        color: red;
    }

    .van-submit-bar {
        z-index: 1000;
    }
</style>



<script>
    import { bus } from "@/utils/bus"

    export default {
        name: "find",
        data() {
            return {
                goods: [],
                price: 0,
                checked: false,


            }
        },
        methods: {


        },
        watch: {
            checked(val) {
                if (val == true) {
                    var num = 0;
                    this.goods.forEach(item => {
                        var a = (item.good.price * 0.9).toFixed(0)
                        num += a * item.num
                    })
                    console.log(num)
                    this.price += num

                } else {
                    this.price = 0
                }

            },
            goods(val) {
                this.store.state.num = val
                bus.$emit("num1", val)
            }
        },
        created() {
            this.$axios.post('/vue/render')
                .then(res => {
                    console.log(res.data.result)
                    this.goods = res.data.result

                })
            bus.$emit('num', this.goods)

        },
        updated() {
            // bus.$emit('num',this.goods)
        }

    }


</script>