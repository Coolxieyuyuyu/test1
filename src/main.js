import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//axios支持promise，拿到数据之后不需要返回一个回调函数，直接.then,
//因为其本身返回一个promise，拿到数据后会在内部调用resolve

//1、发送普通请求
// axios({
//   url: " http://localhost:3000/toplist/detail"
// }).then(res => console.log(res))



// 2、传入参数
// axios({
//   url: " http://localhost:3000/song/url",
//   params: {
//     id: 33894312
//   }
// }).then(res => console.log(res))


// 3、使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {    //用axios.spread将两个数据分开
//   console.log(res1);
//   console.log(res2);
// }))
// 如果要请求两个不同服务器，全局就没办法了

// // axios.defaults.baseURL = 'http://222.111.33.33:8000'
// // axios.defaults.timeout = 10000

// axios({
//   url: 'http://123.207.32.32:8000/category'
// })


// 4.创建对应的axios的实例
// const instance1 = axios.create({      //有个creat方法可以创建实例
//   baseURL: 'http://localhost:3000',
//   timeout: 5000
// })

// instance1({
//   url: '/song/url',
//   params: {
//     id: 252884
//   }
// }).then(res => {
//   console.log(res);
// })




// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 10000,
//   // headers: {}
// })

// 5.封装request模块
import {request} from "./network/request";


request({
  url: '/song/url',
  params: {
    id: 33894312
  }
}).then(res => {
  console.log(res);   //发现对象里面有6个属性，这6个属性，只有data才是服务器真实的数据
  console.log(res.data); //，这才是真是的数据，发现里面有三个属性
})