<template>
  <div class="app-home">
    <!-- 导航栏 -->

    <header class="mui-bar mui-bar-nav my-nav" :style="'background:rgba(247,247,247,'+cc+')'">
      <div class="header-log rel">
        <div class="logo"></div>
        <router-link to="city">
          <div class="city_select" data-external="actioncode=citychange">

            <span id="city_name" data-external="actioncode=citychange">北京</span>
            <div class="icon-drop" data-external="actioncode=citychange">
              <em data-external="actioncode=citychange"></em>
            </div>
          </div>
        </router-link>
        <a class="dowload_teacher_app" href="https://front.changingedu.com/activity/teacher_register?chid=1006590"
          data-external="actioncode=c_tr_download"></a>
      </div>
      <div class="search-go">

        <input type="search" class="search" placeholder="输入老师/科目/年纪/特点" @click="goSearch($event)">
        <span @click="toSearch" :class="isscroll?'toblack':'towhite'">
          <img class="icon-search" src="../../assets/images/search.png" alt="">

        </span>
        <router-link :class="isscroll?'toblack':'towhite'" to="/login">登录</router-link>
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="'http://qq.aboy.me'+item.photo" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 九宫格 -->
  <!-- 九宫格 -->
  <div class="gongge">
    <mt-swipe :auto="0" :continuous="false">
      <mt-swipe-item>
        <ul class="mui-table-view mui-grid-view mui-grid-9 d-flex justify-content-between">
          <li class="mui-table-view-cell mui-media" v-for="(item,i) in kemuList1" :key="i">
            <div>
               <!-- 给图片添加点击事件，获取当前点击的元素下标 -->
              <img :src="'http://qq.aboy.me'+item.icon" @click="toGoodList1(i)">
              <div class="mui-media-body">{{item.title}}</div>
            </div>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul class="mui-table-view mui-grid-view mui-grid-9 d-flex justify-content-between">
          <li class="mui-table-view-cell mui-media" v-for="(item,i) in kemuList2" :key="i">
           <!-- 给图片添加点击事件，获取当前点击的元素下标 -->
           <div>
              <img :src="'http://qq.aboy.me'+item.icon" @click="toGoodList2(i)">
              <div class="mui-media-body">{{item.title}}</div>
          </div>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>

    <section class="scene">
      <div class="scene-list">
        <div class="scene-item">
          <a href="javascript:;">
            <img
              src="https://static.changingedu.com/static/assets/static/student/findteacher/images/new/newop1.4e57cb05db0419d4087025e08c0d7415.png">
          </a>
        </div>

        <div class="scene-item">
          <a href="javascript:;">
            <img
              src="https://static.changingedu.com/static/assets/static/student/findteacher/images/new/newop2.5dc22b366e5b8f17eb65031fe5a782aa.png ">
          </a>
        </div>
      </div>
      <div>
        <div class="modetitle">热门活动</div>
        <div class="activity">
          <div class="act-left">
            <img src="../../assets/images/height1.png" alt="">
          </div>
          <div class="act-right">
            <div>
              <img src="../../assets/images/height2.png" alt="">
            </div>
            <div>
              <img src="../../assets/images/height3.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="modetitle">轻轻开课</div>
      <div class="kaike">
        <!-- 滚动 -->
        <div class="tab" ref="tab">
          <ul class="tab_content" ref="tabWrapper">
            <li class="tab_item" v-for="(item,i) in itemList" :key="i" ref="tabitem">
              <div>
                <div class="tab_img">
                    <img :src="item.imgurl" alt="" @click="toDetail(i)">
                </div>
                <div class="tab_title">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div></div>
    </section>
    <!--  教师介绍开始  -->
    <div class="modetitle">为您推荐</div>

    <!-- cell单元行 -->
    <div class="cell-container" v-for="(item,i) in teacherList" :key="i" @click="getget()">
      <div class="img1">
        <img :data-src2="item.head" :src="'http://qq.aboy.me'+item.head" alt>
      </div>
      <div class="cell-right">
        <div>
          <div class="title">
            <span>{{item.tname}}</span>
            <div class="price">
              <span>¥520</span>
              <span>起</span>
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

    <!-- 商品介绍 -->
    <!-- 返回顶部 -->
    <div v-show="isTop" class="to-top" @click="toTop(15)">
      <span>
        <img src="../../assets/images/goup.png" alt="">
      </span>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll";
  export default {
    methods: {
          // 点击轮播图跳转到详情页
    toDetail(i){
      //console.log(i)
      //对下标进行判断，对应哪个就跳转到哪个路由，可以携带参数跳转
      switch(i){
        case 0:
        this.$router.push('/chatting')
        break;
        case 1:
        this.$router.push('/english')
        break;
        case 2:
        this.$router.push('/park')
        break;
        case 3:
        this.$router.push('/match')
        break;
      }
    },
    //点击不同科目跳转到不同列表（分两页）
    //第一页
      toSearch() {
        this.$router.push("/search");
      },
      InitTabScroll() {
        let width = 0;
        for (let i = 0; i < this.itemList.length; i++) {
          width += this.$refs.tabitem[0].getBoundingClientRect().width + 11; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        }
        this.$refs.tabWrapper.style.width = width + "px";
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.tab, {
              startX: 0,
              click: true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: "vertical"
            });
          } else {
            this.scroll.refresh();
          }
        });
      },

      getBanner() {
        var url = "/banner/index";
        this.axios.get(url).then(result => {
          this.list = result.data.data;
          console.log(result.data);
        });
      },
      getKemu() {
        var url = "/kemu/index";
        this.axios.get(url).then(result => {
          var arr = result.data.data;
          // console.log(result.data.data);
          this.kemuList1 = arr.slice(0, 5);
          this.kemuList2 = arr.slice(5);
        });
      },
      handleScroll() {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // var offsetTop = document.querySelector('#searchBar').offsetTop
        if (scrollTop > 50) {
          this.isscroll = true;
        } else {
          this.isscroll = false;
        }
        if (scrollTop > 200) {
          this.isTop = true;
        } else {
          this.isTop = false;
        }
        this.cc = scrollTop > 160 ? 1 : scrollTop / 160;
      },
      getProduct() {
        var url = "";
        this.axios.get(url).then(result => {
          this.productlist = result.data;
        });
      },
      toTop(i) {
        //参数i表示间隔的幅度大小，以此来控制速度
        document.documentElement.scrollTop -= i;
        if (document.documentElement.scrollTop > 0) {
          var c = setTimeout(() => this.toTop(i), 16);
        } else {
          clearTimeout(c);
        }
      },
      //请求教师数据
      getTeachers() {
        var url = "/teacher/index";
        this.axios.get(url).then(res => {
          console.log(res.data);
          this.teacherList = res.data.data;
        });
      },
      toGoodList1(i){
      switch(i){
        case 0:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"语文"}
        })
        break;
        case 1:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"数学"}
        })
        break;
        case 2:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"英语"}
        })
        break;
        case 3:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"物理"}
        })
        break;
        case 4:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"化学"}
        })
        break;
      }
    },
    //第二页
    toGoodList2(i){
      switch(i){
        case 0:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"生物"}
        })
        break;
        case 1:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"地理"}
        })
        break;
        case 2:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"政治"}
        })
        break;
        case 3:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"高数"}
        })
        break;
        case 4:
        this.$router.push({
          path:'/teacherlist',
          query:{kemu:"奥数"}
        })
        break;
      }
    },
    //跳到搜索页面
    },
    data() {
      return {
        list: [],
        kemuList1: [],
        kemuList2: [],
        isscroll: false,
        productlist: [],
        isTop: false,
        cc: 0,
        itemList: [
          {
            title: "未开始 爸妈必听|山里老师",
            imgurl:
              "https://img.changingedu.com/pic/201806/bf/cp_392x220/bfa4ed94-0731-452d-9057-13693a1cfefd.png"
          },
          {
            title: "看重播 中考英语阅读理解",
            imgurl:
              "https://img.changingedu.com/pic/201806/d5/cp_392x220/d5b56c0a-8515-4740-83c2-aa4a4d26e195.png"
          },
          {
            title: "看重播 一节课：理清句子成",
            imgurl:
              "https://img.changingedu.com/pic/201806/5e/cp_392x220/5ea9789f-72f0-4aa0-a083-34861b53e97f.png"
          },
          {
            title: "看重播 搞定三角函数，三角",
            imgurl:
              "https://img.changingedu.com/pic/201806/03/cp_392x220/0357210b-9a28-46b1-92e7-7763875adfbe.png"
          }
        ],
        teacherList: [],

      };
    },
    created() {
      this.getBanner();
      this.getProduct();
      this.getKemu();
      this.$nextTick(() => {
        this.InitTabScroll();
      });
      this.getTeachers();
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    watch: {
      $route(now, old) {
        if (now.path != "/login") {
          if (this.$store.state.uid || this.$store.state.phone) {
            // this.myuser=this.$store.state.uid;
            console.log("我是主页，这里有uid或phone了");
          }
        }
      }
    },
    
  };
</script>
<style scoped>
  ul li {
    list-style: none;
  }

  .search-go {
    margin-top: -1.1rem;
    margin-left: 0.8rem;
  }

  .icon-search{
  width:0.7rem;
  height:0.7rem;
  position:absolute;
  left: 1rem;
  top:0.02rem;
}

  .logo {
    text-align: center;
    color: #fff;
    height: 1.13333rem;
    line-height: 1.13333rem;
    width: 2rem;
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }

  .find-home .header-log .city_select {
    position: absolute;
    top: 0;
    left: .33333rem;
    color: #fff;
  }

  .header-log .city_select span,
  .find-home .header-log {
    font-size: 15px;
    height: 1.13333rem;
    line-height: 0.13333rem;
    vertical-align: middle;
    margin-left: -9rem;
  }

  .icon-drop>em {
    width: -0.44rem;
    height: .36rem;
    display: inline-block;
    margin-left: -3rem;
    margin-top: 3rem;
    transform: translate(-50%, -50%);
    background: url(https://static.changingedu.com/static/assets/static/student/findteacher/images/sprite/findteacher-min.adfc3cb….png) no-repeat;
    background-position: -4.88rem -4.6rem;
    background-size: 10rem 6.97333rem;
    background: #f10215;
  }

  .modetitle {
    font-size: 0.5rem;
    color: #000;
    padding-bottom: 15px !important;
    margin-left: -0.5rem;
  }

  .look {
    position: absolute;
    left: 18rem;
    top: 50rem;
  }

  .app-home {
    /* touch-action: pan-y; */
    overflow: hidden;
    padding-bottom: 80px;
  }

  .banner .mint-swipe {
    width: 100%;
    height: 228px;
  }

  .banner .mint-swipe img {
    /* width:100%; */
    height: 100%;
    display: block;
    /* width:375px; */
  }

  .gongge .mint-swipe {
    width: 100%;
    height: 124px;
    padding-bottom: 10px;
  }

  .gongge .mint-swipe img {
    height: 100%;
    display: block;
  }

  .test {
    height: 4000px;
    background: #789;
  }

  .my-nav {
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    /* line-height: 44px; */
  }

  .nav-search {
    position: fixed;
    left: 14px;
  }

  .my-nav a {
    position: fixed;
    top: 12px;
    /* display: inline-block; */
    right: 14px;
  }

  .towhite {
    color: #fff;
  }

  .toblack {
    color: black;
  }

  .nav-logo {
    width: 150px;
    height: 20px;
    margin-top: 12px;
    vertical-align: top;
  }

  .mui-table-view-cell img {
    width: 36px;
    height: 36px;
  }

  .mui-media-body {
    font-size: 0.02rem !important;
  }

  .scene {
    width: 100%;
  }

  .scene-list {
    display: flex;
    padding: 0 6px;
  }

  .scene-item {
    position: relative;
    margin: 0 0.14rem;
    /* height:130px; */
    border-radius: 0.28rem;
    overflow: hidden;
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }

  .scene-item a {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
  }

  .scene-item-title {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 14px;
  }

  .scene>.scene-list+.scene-list {
    margin-top: 0.57rem;
  }

  .scene-item.scene-item-bg {
    display: block;
    position: relative;
    /* box-sizing: border-box; */
    text-align: left;
    width: 182px;
    /* height:153px; */
    padding: 12px;
    border: 1px solid #e9ecf0;
    background-image: url("http://127.0.0.1:3888/img/home/home_scene8.png");
    margin: 0;
    height: 9.57rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .scene-item-name {
    margin: 0;
  }

  .scene-item-desc {
    font-size: 0.78rem;
    color: #71797f;
    margin: 0;
  }

  .scene-item-bottom {
    position: absolute;
    bottom: 0.86rem;
    left: 0.86rem;
    z-index: 1;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 25px;
  }

  .scene-item-bottom-label {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 2rem;
    background: #ff734c;
    padding: 0 0.3rem;
    color: #fff;
    text-align: center;
    /* margin-right: 2rem; */
  }

  .scene-item.scene-item-bg:nth-child(2n) {
    /* border-left: 0; */
    background-image: url("http://127.0.0.1:3888/img/home/home_scene9.png");
  }

  .scene-item-bottom-text>s {
    color: #b4babf;
  }

  .scene-item-pange {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(35, 38, 40, 0.8);
    color: #fff;
    text-align: center;
    font-size: 0.86rem;
    padding: 0.28rem 0;
  }

  .kaike {
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
  }

  .tab {
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
  }

  .tab_content {
    padding: 0;
    display: flex;
  }

  .tab_item {
    flex: 0 0 159px;
    width: 159px;
    margin-right: 12px;
  }

  .tab_img {
    height: 95px;
    border: 1px solid #ccc;
  }

  .tab_title {
    font-size: 12px;
    padding-top: 10px;
    text-align: center;
  }

  .product {
    margin: 10px;
  }

  .product-contain {
    margin-bottom: 10px;
    box-shadow: 0 5px 10px 1px rgba(120, 120, 120, 0.3);
  }

  .product-title {
    width: 100%;
    font-size: 1.1rem;
    padding: 1.2rem 0;
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  .product-img {
    width: 176px !important;
    height: auto !important;
  }

  .product-info {
    padding-left: 20px;
    margin-top: 18px;
  }

  .mui-media-body p {
    text-align: left;
    margin-top: 0;
    font-size: 0.75rem;
    font-weight: 300;
  }

  .product-name {
    font-size: 0.85rem !important;
    font-weight: 500 !important;
  }

  .product-adv {
    font-size: 0.65rem !important;
    font-weight: 500 !important;
  }

  .mui-media-body hr {
    margin: 10px 0;
  }

  .product-tips {
    color: #ff734c;
    font-size: 10px !important;
    border: 0.8px solid #ff734c;
    border-radius: 10px !important;
    margin-top: 5px !important;
    width: 38% !important;
    height: 16px;
    line-height: 16px;
    text-align: center !important;
  }

  .product-price {
    padding: 0;
  }

  .product-cart {
    width: 20px !important;
    height: 20px !important;
    margin-top: 15px;
  }

  .mui-ellipsis strong {
    font-size: 1.28571429rem;
    color: #ff734c;
    font-weight: 500;
  }

  .mui-ellipsis s {
    font-size: 0.71428571rem;
    color: #71797f;
    margin-left: 0.42857143rem;
  }

  .to-top {
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    position: fixed;
    right: 20px;
    bottom: 80px;
    box-shadow: 0 3px 6px 0 #dee2e5;
    cursor: pointer;
    z-index: 666;
  }

  .to-top img {
    width: 20px;
    height: 20px;
    margin-top: 8px;
  }

  .mui-grid-view.mui-grid-9 {
    padding-top: 2%;
  }

  .swiper {
    width: 8rem;
    height: 100px;
  }

  .activity {
    display: flex;
    height: 183px;
    justify-content: space-between;
    padding: 0 10px;
  }

  .act-left,
  .act-right {
    width: 48%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  .act-right>div {
    height: 47%;
  }

  /* .photo1 {
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0.5rem;
  display: inline;
  margin-top: -0.5rem;
} */

  /* 教师介绍开始 */

  /* 教师介绍完毕 */
  .cell-container {
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
    float: left;
    margin-right: 0.27rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .cell-right {
    height: 1.91rem;
    /* display: flex; */
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  .title {
    font-size: 16px;
    font-weight: 800;
  }

  .price {
    float: right;
    color: #ef8147;
    font-weight: 400;
  }

  .price span:first-child {
    font-size: 18px;
  }

  .price span:last-child {
    font-size: 14px;
  }

  .onteacher {
    /* 不换行 */
    white-space: nowrap;
  }

  .info>div,
  .info>span,
  .msg {
    display: inline-block;
    margin-right: 0.13rem;
    font-size: 14px;
  }

  .msg {
    color: #989898;
    background-color: #f4f4f4;
    margin-right: 0.7rem;
  }

  .mark {
    padding: 0.05rem 0.26rem;
    border-radius: 0.56rem;
    background: #dfab79;
    color: #fff;
    font-weight: 400;
  }
</style>
<style lang="css">
  .gongge .mint-swipe-indicator.is-active {
    background: #aaa;
  }

  .banner .mint-swipe-indicator.is-active {
    width: 8px;
  }

  .mui-bar input {
    width: 88%;
  }
</style>