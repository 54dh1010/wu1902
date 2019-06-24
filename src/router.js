import Vue from 'vue'
import VueRouter from 'vue-router'


// 0 模块化 编程    Vue.use(Router)  全局声明 使用 router 模块 
Vue.use(VueRouter)
// 1.创建路由组件
import Home from './views/Home.vue';
// 2.配置 routes参数
const routes = [
  {
    path: "/",
    redirect: { name: 'guide' }
  },
  {
    path: "/guide",
    name: 'guide',
    component: () => import("@/views/guide.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
    children: [
      {path:"",redirect:{name:"home"}},
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "buycar",
        name: 'buycar',
        component: () => import("@/views/buycar.vue")
      },
      {
        path: "my",
        name: 'my',
        component: () => import("@/views/my.vue")
      },
      {
        path: "find",
        name: 'find',
        component: () =>import("@/views/find.vue")
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import("@/views/login.vue")

  },
  {
    path:'/search',
    name:'search',
    component: () => import("@/views/search.vue")

  },
  {
    path:'/goods/:goodId',
    name:'goods',
    component: () => import("@/views/goods.vue")

  },
  {
    path: "*",
    redirect: { name: 'home' }
  }
]
// 3.创建路由对象
const router=new VueRouter({
  routes,
  mode:"hash",
  base:'/'
})
// 4.导出挂载路由对象
  export default router



// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
