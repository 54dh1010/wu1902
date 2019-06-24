<template>
    <div>
        <Head title="搜索" show="true"></Head>
        <form action="/vue">
            <van-search
              v-model="key"
              placeholder="请输入搜索关键词"
              show-action
              
              @cancel="onCancel"
            />
            <List :goods="data.goods"></List>

          </form>
        <!-- <mt-search v-model="key">
            <mt-cell :value="key">
                <List :goods="goods"></List>

            </mt-cell>
        </mt-search> -->
    </div>
</template>
<script>
    import {mapState,mapActions} from "vuex";

    export default {
        name: 'search',
        data() {
            return {
                // key: '',
                // goods: [],
            }
        },
        computed:{
            ...mapState([
                'data',
                
            ]),
            key:{
                get(){
                    return this.$store.state.key
                },
                set(val){
                    console.log(val)
                    this.$store.commit('getkey',val)
                }
            }
        },
        methods:{
            onCancel(){
                this.key=""
            },
            ...mapActions([
                'searchGoods'
            ])
        },
        watch: {
            key(newVal) {
                if(newVal!=""){
                    this.searchGoods({
                        url:"/vue/img",
                        cb(){},
                        params:{
                            key: newVal,
                        }
                    })
                    // this.$axios.get('/vue/img', {
                    //     params:
                    //     {
                    //         key: newVal,
                    //     }
                    // }).then(res => {
                    //     console.log(res.data.result)
                    //     this.goods = res.data.result
                    // })
                }
            }
        },
        


    }
</script>