import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
        el: '#app',
        render: h => h(App)
    })
    //1.两个网络请求
    // axios({
    //     url: 'http://123.207.32.32:8000/home/multidata',
    //     method: 'get'
    // }).then(res => {
    //     console.log(res);
    // })

// axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res);
// })

//2.两个并发网络请求（1）
// axios.all([
//     axios({
//         url: 'http://123.207.32.32:8000/home/multidata'
//     }),
//     axios({
//         url: 'http://123.207.32.32:8000/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })
// ]).then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
// })

//3.并发请求（2）
// axios.all([
//     axios({
//         url: 'http://123.207.32.32:8000/home/multidata'
//     }),
//     axios({
//         url: 'http://123.207.32.32:8000/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })
// ]).then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
// }))

//4.全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([
//     axios({
//         url: '/home/multidata'
//     }),
//     axios({
//         url: '/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })
// ]).then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
// }))

//5.创建axios实例
// const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
// })

// instance({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// })

// instance({
//     url: '/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res);
// })

//6.使用模块封装