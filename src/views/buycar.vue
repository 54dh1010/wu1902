<template>
    <div >
        <Head title="商品列表" :show="true"></Head>
        <div v-if="show">
            <mt-navbar v-model="selected">
                <mt-tab-item :id="m.value" v-for="(m,i) in data.types" :key="i">{{m.text}}</mt-tab-item>
            </mt-navbar>
            <div>
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item :id="m.value" v-for="(m,i) in data.types" :key="i">
                        
                           <Newlist 
                            :m="m"
                            :allGoods="allGoods"
                           ></Newlist>                    
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>

    </div>
</template>



<script>
import Newlist from "@/components/Newlist.vue"
    import {mapState,mapActions} from "vuex"
    export default {
        components:{
            Newlist
        },
        name: "buycar",
        data() {
            return {
                // types: [],
                selected: "shirt",
                allGoods: [],
                show:false,

            }

        },
        computed:{
            ...mapState(['data'])
        },
        methods:{
            ...mapActions(['gettype'])
        },
        created() {
            this.gettype({url:'/vue/goodsType'})

            // this.$axios.get('/vue/goodsType')
            //     .then(res => {
            //         // console.log(res.data.result)
            //         this.types = res.data.result
            //     })
        },
        mounted() {
            this.$axios.get('/vue/goods')
                .then(res => {
                    console.log(res.data.result)
                    this.allGoods = res.data.result
                    this.$nextTick(()=>{
                        this.show=true
                    })
                })
            
        }
    }


</script>