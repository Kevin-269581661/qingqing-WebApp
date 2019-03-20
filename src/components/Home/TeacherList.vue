<template>
    <div class="app-good">
            <header id="header" class="mui-bar mui-bar-nav">
                <h1 class="mui-title">
                        <input type="search" class="search" placeholder="点击搜索" @click="goSearch($event)">
                </h1>
                <router-link to="/home">
                  <a  class="mui-icon mui-icon-left-nav mui-pull-left"></a>
                </router-link>
           
            </header>
            <div class="good-contain">
                <tab bar-active-color="#ff734d" active-color='#ff734d'>
                    <tab-item selected @on-item-click="onItemClick">口碑要好
                           
                    </tab-item>
                    <tab-item @on-item-click="onItemClick">一年级</tab-item>
                    <tab-item @on-item-click="onItemClick">
                        数学
                        <span v-show="isSaleDown" class="mui-icon mui-icon-arrowthindown"></span>
                        <span v-show="isSaleUp" class="mui-icon mui-icon-arrowthinup"></span>
                    </tab-item>
                    <tab-item @on-item-click="onItemClick">筛选</tab-item>
                </tab>
                <!-- 筛选 -->
                
                 <!-- 主界面具体展示内容 -->
                 <router-link to="/teacherdetail">
                 <div class="cell-container" v-for="(item,i) in teacherList" :key="i" @click="">
                        <div class="img1">
                            <img :data-src2="item.head" :src="'http://qq.aboy.me'+item.head" alt="">
                        </div>
                        <div class="right">
                          <div>
                            <div class="title">
                              <span>{{item.tname}}</span>
                              <div class="price">
                                <span>¥520</span><span>起</span>
                              </div>
                            </div>
                          </div>
                          <div class="info">
                            <div class="mark">{{item.auth}}</div>
                            
                            <span>教龄{{item.jiaoling}}年</span>
                            <span>已授{{item.shouke}}课</span>
                          </div>
                         <div class="onteacher">
                            <div class="msg" v-for="(tItem, i) in item.type" :key="i">
                                <span>{{tItem}}</span>
                               
                              </div>
                         </div>
                        </div>
                      </div>
                    </router-link>
            </div>
        </div>
</template>
<script>
import { Tab, TabItem } from 'vux';
import { PullRefresh } from 'vant';

export default {
   components: {
        Tab,
        TabItem,

    },
   data(){
       return{
           toLeft:true,
           toRight:false,
           goodlist:[],
           isSaleUp:false,
           isSaleDown:true,
           teacherList:[],
           show:true,
       
       }
   } ,
   methods:{
          //控制tabbar是否隐藏
      handleC() {
        this.$store.commit("setTabbarIsShow");
        //console.log(this.$store.getters.getisTabbarShow);
      },

    getTeachers() {
  var url="/teacher/index";
  this.axios.get(url).then(res=>{
    console.log(res.data);
    this.teacherList = res.data.data;
  })
},
    toSearch(){
            this.$router.push("/search");
        },
       showCanvasWrap(){
          
       },
       showgoodList(){
           
       },
       onItemClick(e){
            if(e==2){
                this.isSaleUp=!this.isSaleUp;
                this.isSaleDown=!this.isSaleDown;
                if(this.isSaleDown==true){
                    e=4;
                }
            }
            // console.log(e);
            
       },
       toDetail(){
            this.$router.push("/goodinfo")
       },
     
   },
   created(){
    this.getTeachers();
   },
   mounted(){
          //    document.getElementById("backdrop").addEventListener("tap",function(){
      //        mui('.mui-off-canvas-wrap').offCanvas('close');
      //    })
      this.showgoodList();
      this.handleC();
    },
    beforeDestroy () {
      this.handleC();
    }
    //    document.getElementById("backdrop").addEventListener("tap",function(){
    //        mui('.mui-off-canvas-wrap').offCanvas('close');
    //    })
    
}
  
</script>
<style scoped>
.app-good{
    width:100%;
    height:100%;
    /* background: #fff; */
    position: relative;
    touch-action: none;
}
.search{
    width:85%;
}
.good-contain{
    width:100%;
    height:100%;
    /* background:#fff; */
    margin-top: 40px;
    position: relative;
}
.good-top{
    width:100%;
    height:70px;
    display: flex;
    justify-content: space-between;
    padding:5px 10px;
    line-height: 100px;
    margin-left:0rem;
    font-size: 0.8rem;
    background:#fff;
    /* margin-top: 40px; */
}
.good-top span{
    font-size: 0.8rem;
}
.card-top{
    width:100%;
    height:150px;
    /* border-bottom: 2px solid #f00; */
}
.card-top img{
    width:100%;
    height:100%;
}
.card-content{
    min-height: 81px;
    padding-top: 10px;
    border-top: 1px solid #c8c7cc;
}
.good-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 70px;
}
.good-card{
    position: relative;
    width:49%;
    /* min-height: 175.9px; */
    margin:10px 0 0 0;
    background:#fff;
    text-align: left;
    padding:10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    border-radius: 8px;
}
.mui-card-content-inner{
    text-align: left;
}
.good-tip{
    /* border-radius: 10rem; */
    border: 1px solid #FF734C;
    color: #FF734C;
    font-size: 12px;
    /* padding: 0 0.28rem; */
    /* width:60px; */
        width: 36%;
    text-align: center;
    font-weight: 100;
    height: 16px;
    line-height: 16px;
    border-radius: 10px;
}
.good-title{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* white-space: nowrap; */
    -o-text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    font-size: 0.6rem;
    font-weight: 300;
}

.mui-card-content-inner,.mui-card-header, .mui-card-footer{
    padding:10px;
}
.good-price{
    color: #FF734C !important;
    font-size: 1rem;
}

.good-contain,.mui-inner-wrap{
    height:700px;
}
.toAside{
    visibility: visible !important; 
    transform: translate3d(0px, 0px, 0px) !important;
}
.mui-icon.mui-icon-arrowthindown,.mui-icon.mui-icon-arrowthinup{
    font-size: 20px;
}

.each1{
    width:100%;
    height:2rem;
    display: flex;
    justify-content: space-between;
    padding:0 23px;
    margin:0.4rem;;
    line-height: 100px;
    font-size: 0.8rem;
    background:#fff;
    /* margin-top: 40px; */
}
.test{
    width:100%;
    height:2rem;
    margin-left:1.8rem;
    margin-top:-2.5rem;
    display: flex;
    justify-content: space-between;
}
.cell-container {
display: flex;
padding: 0.32rem;
position: relative;
overflow: hidden;
border-bottom: 1px solid #e4e4e4;

}

.img1 {
width: 2rem;
height: 2rem;
overflow: hidden;
border-radius: 5px;
}
img {
width: 100%;
height: 100%;
}
.right {
height:1.91rem;
flex: 1;
margin-left: 0.27rem;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
}

.title {
font-size: 16px;
font-weight: 800;
}

.price {
float: right;
color: #EF8147;
font-weight: 400;
}

.price span:first-child {
font-size: 18px;
}

.price span:last-child {
font-size: 14px;
}
.onteacher{
display: flex;
justify-content: space-between;

}
.info > div,
.info > span,
.msg > span {
display: inline-block;
margin-right: 0.13rem;
font-size: 14px;
}
.msg {
color: #989898;
background-color: #f4f4f4;
margin-right:0.7rem;


}
.msg > span:not(:last-child) {
margin-right: 0.26rem;
}
.msg > span:last-child {
float: right;
}
.mark {
padding: 0.05rem 0.26rem;
border-radius: 0.56rem;
background: #dfab79;
color:#fff;
font-weight: 400; 
}


</style>
