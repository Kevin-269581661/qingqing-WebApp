<template>
  <!-- 头部开始 -->
  <div class="study-center">
    <mt-header title="学习中心">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 头部结束 -->
    <!-- 登录开始 -->
    <div>
      <img class="header-photo"
        src="https://img.changingedu.com/pic/201901/eb/cp_75x75/eb6a1002-b02e-47b5-a39f-c5f201dfe684.jpg" alt="">
      <p class="login">未登录--</p>
      <p class="study">已学0课时</p>
   
    <!-- 登录结束 -->
    <!-- 第一行图标文字开始 -->
    
<!-- 第一行图标文字结束 -->
<!-- 中间轮播开始 -->
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 中间轮播结束 -->
      <!-- 最下九宫格开始 -->
      <div class="good-top1">
        <div>
          <router-link to="/bag">
          <img class="each1" src="../../assets/images/plan5.png" alt="">
          <p class="test1">轻豆商城</p>
          </router-link>
        </div>
        <div>
          <img class="each1" src="../../assets/images/plan6.png" alt="">
          <P class="test1">专属助教</P>
        </div>
        <div>
          <img class="each1" src="../../assets/images/plan7.png" alt="">
          <p class="test1">调课通知</p>
        </div>
        <div>
          <img class="each1" src="../../assets/images/plan8.png" alt="">
          <p class="test1">退课通知</p>
        </div>
        
      </div>
      <div class="good-top1">
          <div>
            <img class="each1" src="../../assets/images/plan5.png" alt="">
            <p class="test1">续课通知</p>
          </div>
          <div>
            <img class="each1" src="../../assets/images/plan6.png" alt="">
            <P class="test1">教学计划</P>
          </div>
          <div>
            <img class="each1" src="../../assets/images/plan7.png" alt="">
            <p class="test1">阶段总结</p>
          </div>
          <div>
            <img class="each1" src="../../assets/images/plan8.png" alt="">
            <p class="test1">课堂表现</p>
          </div>
          
        </div>
    </div>

      
    <!-- 最下九宫格结束 -->
    <!-- 登录提醒开始 -->
    <div class="loginafter">
      <div class="listen">
        <p>登录后查看老师的教学计划，课后作业</p>
        <p>还可以在线旁听老师讲课哦</p>
      </div>
      <router-link to="/login">
        <div>
          <button class="please">请先登录</button>
        </div>

      </router-link>
    </div>
<!-- 登录提醒结束 -->
  </div>

</template>
<script>
  import { Navbar, TabItem } from 'mint-ui';
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'HomeSwiper',
    data() {
      return {


        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 2000,


        },
        swiperList: [{
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/e697130a2879aa23cf2e468ff28e5a0f.jpg_750x200_7e0fd8f4.jpg'
        }, {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/2e090c7af936930c119a28c2f62717f2.jpg_750x200_9fce1256.jpg'
        }, {
          id: '0004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/6ad4363486f1fd6ff159f122bd838acd.jpg_750x200_dc715f94.jpg'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg'
        }]
      }

    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    components: {


    },
    watch: {
    }
  }
</script>
<style scoped>
  /* .study-center{
    margin-bottom:3rem;
  } */
  .all {
    background: #ffffff;
    height: 9rem;
  }

  .header-photo {
    width: 1rem;
    height: 1rem;
    float: left;
    margin-left: 0.2rem;
    border-radius: 3rem;
  }

  .login {
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
  }

  .study {
    float: left;
    margin-left: -1.4rem;
    margin-top: 0.5rem;
  }
/* 九宫格开始 */
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

  .each2 {
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 23px;
    font-size: 0.8rem;
    /* margin-top: 40px; */
  }

  .test {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-top: -1rem;
    font-size: 0.2rem;
  }

  .good-top1 {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    line-height: 100px;
    font-size: 0.8rem;
    margin-top: 1rem;
    border-bottom: 0.8px solid #2125292b;
  }

  .each1 {
    width: 1.9rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    line-height: 100px;
    font-size: 0.8rem;
    margin-left: 0rem;
    text-align: center;
  }

  .test1 {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: -0.8rem;
    margin-left: 0.2rem;
    float: left;
    font-size: 0.2rem;
  }

  .good-top2 {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 106px;
    line-height: 100px;
    font-size: 0.8rem;
    margin-top: 15px;
    margin-left: -2.2rem;
  }

  .each2 {
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 23px;
    line-height: 100px;
    /* margin-top: 40px; */
  }

  .test2 {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    position: relative;
    right: -0.2rem;
    top: -0.8rem;
    float: left;
    font-size: 0.2rem;
  }
  /* 九宫格结束 */
/* 轮播开始 */
  .swiper.swiper-pagination {
    bottom: 0rem
  }

  .swiper .swiper-pagination-bullet-active {
    background: #fff;
  }

  .swiper {
    overflow: hidden;
    width: 100%;
    padding: 0 .2rem;
    margin: 0 auto;
  }

  .swiper-img {
    width: 100%;

  }
/* 轮播结束 */
  .plan {
    width: 100%;
    height: 10rem;
    border: 1px solid rgb(221, 207, 206);
    position: absolute;
    top: 17rem;
  }

  .listen {
    margin-top: 0.5rem;
    text-align: center;

  }
/* 登录开始 */
  .loginafter {
    width: 10rem;
  }

  .please {
    width: 3rem;
    height: 1rem;
    position: relative;
    left: 3.3rem;
    border: 1px solid #4cd964;
  }
  /* 登录开始 */
</style>