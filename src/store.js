
//  vuex    采用集中式存储管理应用的所有组件的状态

//  每一个 Vuex 应用的核心就是 store（仓库） “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// Vuex 使用单一状态树  一个对象就包含了全部的应用层级状态  所有组件的数据存储 一个对象 state 

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {CHANGEMYNUM, MSGCHANGE,CHANGENUM,GETMV} from "@/utils/mutate_type"
import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {  // 对象就包含了全部的应用层级状态
    city: 'china-武汉',
    msg: "daydayup",
    num: 0,
    count:9,
    key:'',
    data:{
      mv:[],
      goods:[],
      types:[],
    }

  },
  // Action 提交的是 mutation，而不是直接变更状态  Action 可以包含任意异步操作  ajax 
  actions: {
    addnum(context, num) {  // context参数  vuex 注入 store 负责 提交 mutation
      console.log('进入到了actions')
      context.commit("addnum1", num) // commit 提交mutation type 
    },
    changeMsg(context, msg) {
      context.commit("changeMsg", msg)

    },
    numdesc(context, num) {
      context.commit("numdesc", num)
    },
    changenum({commit}){  //context== {commit:commit} = {commit }
    // changenum({commit:commit})
      // commit('changenum')
      commit(CHANGENUM)
    },
    msgchange({commit},msg){
      // commit('msgchange',msg)
      commit(MSGCHANGE,msg)
    },
    // changemynum({commit},num){    //直接commit 没经过action
    //   // commit("changemynum",num)
    //   commit(CHANGEMYNUM,num)
    // }
    getmv({commit},mv){  
      commit(GETMV,mv)
    },
    //获取search里的goods
    searchGoods({commit},{url,cb,params}){
      axios.get(url,{
       params:params,
      }).then(res=>{
        cb(),
        commit('searchGoods',res.data.result)
      })
    },
    changecity({commit},{url}){
      axios.get(url)
      .then(res=>{
        commit('changecity',res.data.msg)
      })
    },
    gettype({commit},{url}){
      axios.get(url)
      .then(res=>{
        commit('gettype',res.data.result)
      })
    }

  },
  mutations: { // Mutation  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    addnum1(state, num) {
      console.log(state);
      state.num += num
    },
    changeMsg(state, msg) {
      state.msg = msg
    },
    numdesc(state,num){
      state.num-=num
    },
    [CHANGENUM](state){
      state.num++;
    },
    changenum1(state){
      state.num++;
    },
    // msgchange(state,msg){
    [MSGCHANGE](state,msg){
      state.msg=msg
    },
    // changemynum(storenum){
    [CHANGEMYNUM](state,num){   // route[pathname](req,res)   changeMsg:function(){}
    // 对象里的key 是个变量 要用中括号包起来
      state.count+=num
    },
         
    [GETMV](state,mv){  
      state.data={...state.data,mv:mv}   
      // vuex 数据是响应式   但是修改的数据要让vuex 可以监测 (深浅拷贝)   新对象替换老对象
    },
    searchGoods(state,goods){
      state.data={...state.data,goods}
    },
    changecity(state,city){
      state.city=city
    },
    gettype(state,types){
      state.data={...state.data.types,types}
    },
    getkey(state,key){
      state.key=key
    }

    


  },
  getters:{   //过滤作用
    newMy(state){
      // return state.data.mv.filter((item,i)=>i%2==0)
      return state.data.mv.filter((m,i)=>i%2==0);

    }
  }

})
