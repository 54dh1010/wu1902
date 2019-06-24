




// import axios from "axios";

// import { Indicator, Toast } from 'mint-ui';

// axios.defaults.baseURL = 'http://localhost:1902/';

// // let token = "";
// // axios.defaults.withCredentials = false;
// // axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
// // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头



// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // let arr = window.sessionStorage.token;
//   // console.log(arr)
//   //   if(arr){
//   //       arr = JSON.parse(arr);
//   //       token = arr.arr;
//   //   }
//   //   config.headers.common['token'] = token;

//   Indicator.open({
//     text: '加载中...',
//     spinnerType: 'fading-circle'
//   });
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   Toast({
//     message: '错误-req',
//     duration: 500
//   });
//   Indicator.close();

//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   Indicator.close();
//   Toast({
//     message: "加载成功",
//     duration: 400
//   });
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   Toast({
//     message: '错误-res',
//     duration: 500
//   });
//   Indicator.close();
//   return Promise.reject(error);
// });

// export default axios;






import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902/";   // 应用的基路径 

// 很强大  拦截器 

import { Indicator ,Toast} from 'mint-ui';


let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


import router from "@/router"

// 请求的拦截器  // 很强大  拦截器 
axios.interceptors.request.use(function (config) {

    let userInfo = window.sessionStorage.userInfo;
    // console.log(userInfo)
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;

    // ajax 请求发送之前 
    Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
    });
    return config;
  }, function (error) {
    Toast({
        message:"未知错误-req",
        duration:400
    });
    Indicator.close();
    // ajax 请求无法发送  
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    // console.log(111111111111)

    // console.log(response)
    Indicator.close();
    if(response.data.code=='401'){
        // 默认token 失效  
        router.push({name:'login'})
    }
    Toast({
        message:response.data.msg,
        iconClass: 'icon iconfont icon-success',
        duration:400
    });


    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast({
        message:"未知错误-res",
        duration:400
    });
    Indicator.close();
    return Promise.reject(error);
});



export default axios;