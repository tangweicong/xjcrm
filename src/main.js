import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

axios.defaults.baseURL = "http://119.3.104.39:2302/api/"

// console.dir(Vue)
// console.dir(Vue.$http)
// console.dir(Vue.$http === axios)


// Vue.prototype.$http=axios.

// axios.post("/user_login/Login", {
//     "login_account": "15110283003",
//     "login_password": "283003"
// }).then(res => {
//     console.log(res);
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')