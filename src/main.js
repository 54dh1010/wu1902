import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log("这是项目的启动入口文件")


import MintUI from "mint-ui";
Vue.use(MintUI);   // 全局声明   还要引入样式 
import Vant from "vant";
Vue.use(Vant)

import VueResource from "vue-resource"
Vue.use(VueResource)  //全局声明

import Head from "@/components/head.vue"
Vue.component("Head", Head);
import foot from "@/components/foot.vue"
Vue.component("Footer", foot);
import list from "@/components/list.vue"
Vue.component("List", list);

import"@/style/index.scss";   //全局声明

import ajax from "@/utils/ajax";

Vue.prototype.$axios=ajax  //this.$axios

import swipe from "@/components/swipe.vue"
 Vue.component("Swipe",swipe)


import {bus} from "@/utils/bus"
new Vue({
  router,
  store,
 watch:{
    "$route":function(to,from){
      console.log(to)
      bus.$emit('change',to.name)

    },
  },
  render: h => h(App)  //项目的根组件
}).$mount('#app')

function render(h) {
  return h(App)
}