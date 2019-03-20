import Vue from 'vue'
import Router from 'vue-router'
// Home 组件
import Home from "./components/Home/Home.vue"
import Chatting from"./components/Home/Chatting.vue"
import English from"./components/Home/English.vue"
import Match from"./components/Home/Match.vue"
import Park from"./components/Home/Park.vue"
import TeacherList from "./components/Home/TeacherList.vue"
import TeacherDetail from "./components/Home/TeacherDetail.vue"
import Video from "./components/Home/Video.vue"
import City from "./components/Home/City.vue"
// 优等生组件
import GoodStudent from "./components/Student/GoodStudent.vue"
import Student from "./components/Student/Student.vue"
// 作业疑难组件
import Buynow from "./components/HomeDif/Buynow.vue"
import HomeDif from "./components/HomeDif/HomeDif.vue"
import ShopDif from "./components/HomeDif/ShopDif.vue"
// 学习组件
import Study from "./components/Study/Study.vue"

import Bag from "./components/Study/Bag.vue"
import Test from "./components/Study/Test.vue"
// 我的组件
import Profile from "./components/Profile/Profile.vue"
import Order from "./components/Profile/Order.vue"
import Wallet from "./components/Profile/Wallet.vue"
import Recharge from "./components/Profile/Recharge.vue"
import Qindou from "./components/Profile/Qindou.vue"


//登录组件
import Login from "./components/Login/Login.vue"
import GoodTeacher from "./components/Login/GoodTeacher.vue"



Vue.use(Router)

export default new Router({
    routes:[
        {path:"/",redirect:"/home"},
        {path:'/home',component:Home},
        {path:'/chatting',component:Chatting},
        {path:"/english",component:English},
        {path:"/match",component:Match},
        {path:'/park',component:Park},
        {path:"/teacherlist",component:TeacherList},
        {path:"/teacherdetail",component:TeacherDetail},
        {path:"/video",component:Video},
        {path:"/city",component:City},
        {path:"/goodstudent",component:GoodStudent},
        {path:"/student",component:Student},
        {path:"/buynow",component:Buynow},
        {path:"/homedif",component:HomeDif},
        {path:"/study",component:Study},
        {path:"/shopdif",component:ShopDif},
        {path:"/bag",component:Bag},
        {path:"/test",component:Test},
        {path:"/profile",component:Profile},
        {path:"/order",component:Order},
        {path:"/wallet",component:Wallet},
        {path:"/recharge",component:Recharge},
        {path:"/qindou",component:Qindou},
        {path:"/login",component:Login},
        {path:"/goodteacher",component:GoodTeacher},



        
        
    ]
})