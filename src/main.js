// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import 'mint-ui/lib/style.css'
import '../static/css/mmint.css'

import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
import './assets/mui/js/mui.js'
import '../static/css/base.css'
Vue.config.productionTip = false

// 0.1:引入Vuex
import Vuex from "vuex"
// 0.2:注册Vuex组件
Vue.use(Vuex)
// 0.3:创建Vuex实例对象
var store = new Vuex.Store({
  state: {
    uid: "",
    phone: "",
    islogin: false,
    isloginout: true,
    isTabbarShow: true
  },
  mutations: {
    //更改显示下部分导航tabbar状态
    setTabbarIsShow(state) {
      state.isTabbarShow = !state.isTabbarShow;
    
    },
    setUid(state, newmsg) {
      state.uid = newmsg.uid;
      // state.phone=newmsg.phone;
      state.islogin = true;
      state.isloginout = false;
     
    },
    setPhone(state, newmsg2) {
      state.phone = newmsg2.phone;
      state.islogin = true;
      state.isloginout = false;
     
  
    },
    removeUid(state) {
      state.uid = undefined;
      state.phone = undefined;
      state.islogin = false;
      state.isloginout = true;
      
     
    }
  },
  getters: {
    getisTabbarShow(state) {return state.isTabbarShow }
  }
})
// 0.4:将Vuex对象注册Vue对象

// 1:引入mint-ui Header组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  TabContainer,
  TabContainerItem,
  Navbar,
  TabItem,
  Cell,
  Popup
} from "mint-ui"
// 2:注册Header组件
Vue.component(Header.name, Header);
//vant插件
import {
  PullRefresh,
  List,
  Tab,
  Tabs,
  CouponCell,
  CouponList
} from 'vant';
import {
  Card
} from 'vux';
import {
  Grid,
  GridItem
} from 'vux'
// import VueAMap from 'vue-amap';


//3:引入和注册mint-ui Swipe轮播组件
// import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Popup.name, Popup);
Vue.component(Cell.name, Cell);
Vue.component(Grid.name, GridItem);

// Vue.use(VueAMap);




//引入vant
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Tab).use(Tabs);
Vue.use(CouponCell).use(CouponList);
Vue.component('card', Card)
Vue.use(Popup);


// 3.1:引入axios库(VueResource)
import axios from "axios"
// 3.2:跨域保存session值
// axios.defaults.withCredentials=true
//3.3:注册组件
// Vue.prototype.axios=axios

//引入解决跨域的配置文件
import apiConfig from '../config/api.config'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
axios.defaults.baseURL = apiConfig.baseUrl

// 4引入和注册swiper组件
import Swiper from 'swiper' //插件
import 'swiper/dist/css/swiper.min.css' //css样式


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
