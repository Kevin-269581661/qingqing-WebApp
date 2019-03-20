<template>
  <!-- 头部开始 -->
    <div class="difficult-homework">
      <mt-header title="作业疑难">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="帮助" slot="right"></mt-button>
      </mt-header>
      <!-- 头部结束 -->
      <!-- 作业疑难开始 -->
  
      <h4 class="one">1对1在线答疑</h4>
      <h6 class="homework">
        作业错题答疑讲解 试卷分析聚焦考点
        <span class="mui-icon mui-icon-arrowright"></span>
      </h6>
      <!-- 作业疑难结束 -->
      <!-- 图标开始 -->
      <div class="good-top">
        <div>
          <span>
              <img class="each1" src="../../assets/images/teacher.png" alt="">
          </span>
          <p class="test">在线名师</p>
        </div>
        <div>
          <span>
              <img class="each1" src="../../assets/images/teacher1.png" alt="">
          </span>
          <P class="test">题目讲解</P>
        </div>
        <div>
          <span>
              <img class="each1" src="../../assets/images/teacher2.png" alt="">
          </span>
          <p class="test">错因分析</p>
        </div>
        <div>
          <span>
              <img class="each1" src="../../assets/images/teacher3.png" alt="">
          </span>
          <p class="test">知识扩展</p>
        </div>
      </div>
      <!-- 图标结束 -->
      <!--红包开始  -->
      <router-link to="/shopdif">
        <div class="content">
          <div class="container">
            <div class="wrap-box">
              <div class="left">
                <div>购买15分钟（一次答疑）</div>
                <div class="info">
                  <span>¥1</span>
                  <span>原价¥20</span>
                  <span>首单特惠</span>
                </div>
              </div>
              <div class="right">
                <div class="btn1">购买</div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <!-- 红包结束 -->
      <div clas="allteacher">
        <img
          class="redpack"
          src="https://static.changingedu.com/static/assets/static/student/findteacher/images/new/to_gethelp.4d8cbf90d573ed306b0d96636e5e35fa.png "
          alt=" "
        >
      </div>
      <!-- 在线老师 -->
      <div class="teacher-teacher">
        <div class="nav-title">
          <h3 class="onteacher">在线老师</h3>
          <router-link to="/">
            <div class="level">一年级
              <span class="mui-icon mui-icon-arrowright"></span>
            </div>
          </router-link>
        </div>
        <!-- 在线老师栏结束 -->
        <!-- 滑动切换导航 -->
        <div class="view-swiper">
          <div class="nav-con">
            <mt-navbar v-model="selected">
              <mt-tab-item id="tab1">全部</mt-tab-item>
              <mt-tab-item id="tab2">语文</mt-tab-item>
              <mt-tab-item id="tab3">数学</mt-tab-item>
              <mt-tab-item id="tab4">英语</mt-tab-item>
              <mt-tab-item id="tab5">物理</mt-tab-item>
            </mt-navbar>
            <div class="split"></div>
            <div class="interview">
              <mt-tab-container v-model="selected" swipeable>
                <mt-tab-container-item id="tab1">
                  <!-- cell单元行 -->
                  <div
                    class="cell-container"
                    v-for="(item,i) in teacherList"
                    :key="i"
                    @click="getTo()"
                  >
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
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                  <div
                    class="cell-container"
                    v-for="(item,i) in yuwenTeacherList"
                    :key="i"
                    @click="getTo()"
                  >
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
                </mt-tab-container-item>
                <mt-tab-container-item id="tab3">
                  <div
                    class="cell-container"
                    v-for="(item,i) in shuxueTeacherList"
                    :key="i"
                    @click="getTo()"
                  >
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
                </mt-tab-container-item>
                <mt-tab-container-item id="tab4">
                  <div
                    class="cell-container"
                    v-for="(item,i) in yingyuTeacherList"
                    :key="i"
                    @click="getTo()"
                  >
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
                </mt-tab-container-item>
                <mt-tab-container-item id="tab5">
                  <div
                    class="cell-container"
                    v-for="(item,i) in wuliTeacherList"
                    :key="i"
                    @click="getTo()"
                  >
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
                </mt-tab-container-item>
              </mt-tab-container>
            </div>
          </div>
        </div>
      </div>
      <!-- 接口获取老师结束 -->
    </div>
  </template>
        <script>
  import { Navbar, TabItem } from "mint-ui";
  export default {
    data() {
      return {
        teacherList: [],  //根据所有老师的kumu属性分类
        yuwenTeacherList: [],
        shuxueTeacherList: [],
        yingyuTeacherList: [],
        wuliTeacherList: [],
        selected: "tab1", //顶部导航
      
      };
    },
    methods: {
      //点击老师信息，跳转详情
      getTo(){
        console.log("我被点击了")
      },
      //获取所有老师信息，并按科目分类
      getTeachers() {
        var url = "/teacher/index";
        this.axios.get(url).then(res => {
          console.log(res.data);
          this.teacherList = res.data.data;
          if (this.teacherList.length) {
            for (var i = 0; i < this.teacherList.length; i++) {
              if (this.teacherList[i].kemu == "语文") {
                this.yuwenTeacherList.push(this.teacherList[i]);
              } else if (this.teacherList[i].kemu == "数学") {
                this.shuxueTeacherList.push(this.teacherList[i]);
              } else if (this.teacherList[i].kemu == "英语") {
                this.yingyuTeacherList.push(this.teacherList[i]);
              } else if (this.teacherList[i].kemu == "物理") {
                this.wuliTeacherList.push(this.teacherList[i]);
              }
            }
            // console.log(this.yuwenTeacherList)
            // console.log(this.shuxueTeacherList)
            // console.log(this.yingyuTeacherList)
            // console.log(this.wuliTeacherList)
          }
        });
      }
    },
    created() {
      this.getTeachers();
    },
    mounted() {},
    components: {},
    watch: {}
  };
  </script>
        <style scoped>
  .interview {
    padding-bottom: 100px;
  }
  .difficult-homework {
    padding-bottom: 100px;
  }
  .one {
    margin-left: 0.2rem;
  }
  .homework {
    float: left;
    margin-top: -0.2rem;
    margin-left: 0.2rem;
  }
  .good-top {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    line-height: 100px;
    font-size: 0.8rem;
  
    /* margin-top: 40px; */
  }
  
  .buy {
    width: 90%;
    height: 1.5rem;
    border: 1px solid #ff734c;
    border-radius: 0.4cm;
    background: #e0c7c0;
    /* margin-top:0.5rem; */
    text-align: center;
    display: flex;
    margin: 0 auto;
  }
  .buyone {
    float: left;
    color: black;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }
  .buytwo {
    float: left;
    margin-left: -3.4rem;
    margin-top: 0.75rem;
  }
  .first {
    font-size: 6px;
    color: #ff734c;
  }
  .buythree {
    width: 2rem;
    height: 0.8rem;
    background: #ff734c;
    outline: 0 none !important;
    margin-left: 3rem;
    margin-top: 0.4rem;
    border-radius: 1cm;
    text-align: center;
  }
  .redpack {
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  .allteacher {
    background: #fff;
  }
  
  .each1 {
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    padding: 0 23px;
    line-height: 100px;
    font-size: 0.8rem;
    margin-left: -6px;
    text-align: center;
  }
  .test {
    width: 100%;
    height: 2rem;
    margin-left: 0.4rem;
    margin-top: -0.9rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
  }
  /* 红包开始 */
  .container{
  
}
.wrap-box {
  margin: 0 auto;
  height: 2rem;
  border: 1px solid #F9DDCF;
  background: #FEFBF9;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding:0 0.4rem;
}
.wrap-box .left,
.wrap-box .right {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.left div:first-child {
  font-size: 16px;
  font-weight: 800;
}
.info > span {
  display: inline-block;
}
.info span:first-child {
  font-size: 16px;
  font-weight: 800;
}
.info span:nth-child(2) {
  color: #333;
  font-size: 12px;
  text-decoration: line-through;
}
.info span:last-child {
  color: #EE7E41;
  font-size: 10px;
   padding: 3px 5px;
}
.wrap-box .right {
  width: 1rem;
  margin:0;

}
.right .btn1 {
  height: 0.5rem;
  width:1.5rem;
  line-height: -1.13rem;
  text-align: center;
  background: #ED8C3B;
  color:#fff;
  border-radius: 15px;
  font-size: 10px;
  margin-left:-0.5rem;
}
.left {
  width: 80%;
}
  /* 红包结束 */
  
  /* 在线老师开始 */
  .teacher-teacher {
    margin-bottom: 1rem;
  }
  .nav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px 10px;
  }
  .onteacher {
    font-size: 18px;
  }
  .level {
    font-size: 14px;
    color: #666;
  }
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
    margin-left: 0.27rem;
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
  .onteacher,
  .info {
    /* 不换行 */
    white-space: nowrap;
  }
  .info > div,
  .info > span,
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
  /* 在线老师结束 */
  </style>
        