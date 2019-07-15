<template>
  <div>

    <Head title="首页" :show="true"></Head>
    <img src="https://puui.qpic.cn/tv/0/137180098_498280/0" alt="" width="176" >
    <div v-if="islogin">
      <Photo></Photo>
    </div>
    <demo></demo>
    <van-button type="primary">主要按钮</van-button>
    <h2>{{this.$store.state.msg}}-----city1-{{city1}}--num1={{num1}}---num2={{num2}}</h2>
    <h2>{{msg1}} ----msg2={{msg2}}---city2={{city2}}--city={{city}}</h2>
    <van-button type="primary">{{this.$store.state.city}}</van-button>

    <mt-button type="primary" @click="add(10)">add num 10</mt-button>
    <mt-button type="primary" @click="numdesc(5)">desc num -10</mt-button>
    <mt-button type="primary" @click="changenum">changenum</mt-button>
    <mt-button type="primary" @click="changenum1">changenum1</mt-button>

    <mt-button type="primary" @click="changeMsg('ok 我来改变msg')">changeMsg</mt-button>
    <p>
      <input type="text" placeholder="请输入" ref="one" @input="getMsg">
    </p>
    <p>
      <mt-button type="primary" @click="changemynum(4)">changemynum</mt-button>

    </p>
    <p>
        <mt-button type="primary" @click="changecity({url:'/vue/index'})">异步修改city</mt-button>
  
      </p>
    <mt-button type="primary" @click="gotologin">登录</mt-button>
  </div>
</template>

<script>

  // @ is an alias(别名) to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import demo from '@/components/demo.vue'
  import Photo from '@/components/upImg.vue'

  import store from "@/store.js" //tisi.$store 已经全局注册 可以不用引用
  import { mapState, mapActions,mapMutations } from "vuex"
  export default {
    name: 'home',
    data() {
      return {
        imgs: "",
        islogin: sessionStorage.userInfo,
        city1: this.$store.state.city,
        num1: this.$store.state.num,
        msg1: store.state.msg
      }

    },
    // computed:{
    //   num2(){
    //     return this.$store.state.num
    //   },
    //   msg2(){
    //     return this.$store.state.msg
    //   },
    //   city2(){
    //     return this.$store.state.city
    //   }
    // },
    // computed: mapState({ //对象的写法  会把这些属性 传入 computed this.count3 
    //   msg2(state) {  //state 就是 mapState 把store.state当成参数传入
    //     return state.msg + "---ok"
    //   },
    //     // 箭头函数可使代码更简练
    //   num2: state => state.num,
    //   //字符串参数'city' 相当于 `state => state.city`,
    //  city2:'city',
    // }),
    computed: {//... 展开运算符
      ...mapState({ //对象的写法  会把这些属性 传入 computed this.count3 
        msg2(state) {  //state 就是 mapState 把store.state当成参数传入
          return state.msg + "---ok"
        },
        // 箭头函数可使代码更简练
        num2: state => state.num,
        //字符串参数'city' 相当于 `state => state.city`,
        city2: 'city',
      }),
      num4: {
        get() {
          return this.$store.state.num
        }
      },
      ...mapState([//数组方法 key相同
        'city',  //映射 this.city  为 store.state.city
        'num',
      ])
    },
    methods: {
      gotologin() {
        this.$router.push({ name: 'login' })
      },
      // add() { // dispatch(actionType,参数)
      //   this.$store.dispatch("addnum", 10)
      // },
      ...mapActions({//函数名与action类型不一样 用对象
        add: 'addnum',  // 将 `this.add()` 映射为 `this.$store.dispatch('addnum')`
        changenum1:'changenum'
      }),
      ...mapActions([//函数名与action类型一样  用数组  参数在方法里写
        'changeMsg',   // 将 `this.changeMsg()` 映射为 `this.$store.dispatch('changeMsg')`
        'numdesc',   
        'changenum',
        'msgchange',
        'changecity'
        
      ]),
      ...mapMutations([ //函数名与mutate类型一样  参数在方法里写
          'changemynum'   //  this.changemynum  映射为  this.$store.commit('changemynum')
      ]),
      // changeMsg(msg) {
      //   this.$store.dispatch("changeMsg", msg)
      // },
      // numdesc(num) {
      //   this.$store.dispatch("numdesc", num)
      // },
      // changenum() {
      //   // this.$store.dispatch("changenum")
      //   this.$store.commit('changenum')
      // },
      // changenum1() {//不是异步请求 可以跳过action 
      //   this.$store.commit('changenum1')

      // },
      // msgchange(msg) {
      //   this.$store.dispatch("msgchange", msg)
      // },
      getMsg() {
        console.log(this.$refs.one.value)
        this.msgchange(this.$refs.one.value)
      },
      // changemynum() {
      //   // this.$store.dispatch("changemynum",2)
      //   this.$store.commit("changemynum", 4)//不是异步请求 可以跳过action 

      // }




    },
    components: {
      HelloWorld,
      demo,
      Photo,

    }
  }
</script>