<template>
  <div class="app-profile">
    <div class="profile-contain">
      <!-- 登录注册按钮 -->
      <div class="user-avatar"></div>
      <div class="user-info">
        <div class="mine">我的</div>
        <div class="user-level">
          <span>
              <img class="each1" src="../../assets/images/plan3.png" alt="">
          </span>
          <router-link to="/login">
            <div class="nologin">未登录</div>
          </router-link>
        </div>
      </div>
      <!-- 加入优等生弹框开始 -->
      <router-link to="/search">
        <div class="super-vip">
          <div class="icon-wraper">
            <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
          </div>
          <div class="vip-content">
            <div class="vip-top">加入优等生</div>
          </div>
        </div>
      </router-link>
         <!-- 加入优等生弹框结束 -->
      <!-- 九宫格部分 -->
    <!-- 第一行开始 -->
      
      <div class="myself-myself">
        <div class="about-myself">
          <div class="profile-grid">
            <grid class="profile-grid1 profile-grid2" :show-vertical-dividers="false">
              <grid-item class="profile-grid-item d-flex justify-content-between">
                <router-link to="/order">
                <span>
                    <img class="each2" src="../../assets/images/plan14.png" alt="">
                </span>
              </router-link>
                <span class="grid-center">订单</span>
              </grid-item>


              <grid-item class="profile-grid-item d-flex justify-content-between">
                <router-link to="/wallet">
                <span>
                    <img class="each2" src="../../assets/images/plan14.png" alt="">
                </span>
              </router-link>
                <span class="grid-center">钱包</span>
              </grid-item>
              <grid-item class="profile-grid-item d-flex justify-content-between">
                  <router-link to="/qindou">
                <span>
                    <img class="each2" src="../../assets/images/plan15.png" alt="">
                </span>
                  </router-link>
                <span class="grid-center">轻豆商城</span>
              </grid-item>
              <grid-item class="profile-grid-item d-flex justify-content-between">
                <router-link to="/wallet">
                <span>
                    <img class="each2" src="../../assets/images/plan16.png" alt="">
                </span>
              </router-link>
                <span class="grid-center">奖学券</span>
                
              </grid-item>
            </grid>
          </div>
        </div>
    <!-- 第一行结束 -->
    <!-- 第二行开始 -->
         <div class="profile-grid">
          <grid class="profile-grid1 profile-grid2" :show-vertical-dividers="false">
            <p class="other">教学</p>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan17.png" alt="">
              </span>
              <span class="grid-center">我的作业</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan18.png" alt="">
              </span>
              <span class="grid-center">我的评价</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan19.png" alt="">
              </span>
              <span class="grid-center">我的老师</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan20.png" alt="">
              </span>
              <span class="grid-center">我的公开课</span>
            </grid-item>
            
          </grid>
          <div class="profile-grid-grid4 profile-grid2">
            <grid>
              <grid-item class="second-line profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan21.png" alt="">
              </span>
              <span class="grid-center">帮助中心</span>
            </grid-item>
            </grid>
            
          </div>
        </div>
  <!-- 第二行结束 -->
  <!-- 第三行开始 -->
        <div class="profile-grid" style="border-top:0">
          <grid class="profile-grid1 profile-grid2" :show-vertical-dividers="false">
            <p class="other">服务</p>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan22.png" alt="">
              </span>
              <span class="grid-center">服务号</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan23.png" alt="">
              </span>
              <span class="grid-center">校长信箱</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan24.png" alt="">
              </span>
              <span class="grid-center">专属助教</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan25.png" alt="">
              </span>
              <span class="grid-center">客服电话</span>
            </grid-item>
          </grid>
        </div>
        <!-- 第三行结束 -->
        <!-- 第四行开始 -->
        <div class="profile-grid">
          <grid class="profile-grid1 profile-grid2" :show-vertical-dividers="false">
            <p class="other">其他</p>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan26.png" alt="">
              </span>
              <span class="grid-center">老师招募</span>
            </grid-item>

            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan26.png" alt="">
              </span>
              
              <span class="grid-center">邀请有礼</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan27.png" alt="">
              </span>
              <span class="grid-center">关于轻轻</span>
            </grid-item>
            <grid-item class="profile-grid-item d-flex justify-content-between">
              <span>
                  <img class="each2" src="../../assets/images/plan28.png" alt="">
              </span>
              <span class="grid-center">帮助中心</span>
            </grid-item>
          </grid>
        </div> 
      </div>
      <!-- 第四行结束 -->
    </div>
  </div>
</template>
<script>
  import { Grid, GridItem } from "vux";
  export default {
    components: {
      Grid,
      GridItem
    },
    data() {
      return {
        list: [],
        islogin: false,
        isloginout: true,
      
      };
    },
    methods: {},
    created() {},
    watch: {
      $route(now, old) {
        if (now.path != "/login") {
          if (this.$store.state.uid || this.$store.state.phone) {
            // this.myuser=this.$store.state.uid;
            console.log("我是个人页，这里有uid或phone了");
          }
        }
      }
    }
  };
</script>
<style scoped>
  .myself-myself {
    padding-bottom: 100px;
  }
  .user-level {
    height: 0.1rem;
  }
  .mine {
    text-align: center;
    margin-bottom: 1rem;
  }
  .mint-header {
    color: #000;
    border-bottom: 1px solid #e8e8ed;
  }
  .nine {
    width: 10rem;
    height: 10rem;
  }
  /* .about-myself{
     margin-bottom:0.5rem;
   
  } */
  .profile-contain {
    height: 2.5rem;
    width: 10rem;
    background: #0bc373;
    background-repeat: no-repeat;
    background-size: 100% 9.43rem;
    background-position: top center;
    border-top: 0;
  }
  .profile-top {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-top: 0;
  }
  .login-button {
    margin-top: 0.57142857rem;
    text-align: center;
    display: block;
    width: 5rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #fff;
    border-radius: 4rem;
    font-weight: 500;
    border-top: 0;
  }
  .profile-grid1 {
    width: 100%;
    background: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    border-top: 0;
    /* box-shadow: 0 0.286rem 0.43rem 0 #dee2e5; */
  }
  .profile-grid {
    width: 2rem;
    height: 3rem;
    border-top: 0;
  }
  .profile-grid1-top {
    background: #fff;
    width: 100%;
    height: rem;
    line-height: 3.14rem;
    padding: 0 1.14rem;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top: 0;
  }
  .profile-grid1-top a {
    font-size: 1rem;
    font-weight: 400;
    height: 2rem;
    border-top: 0;
  }
  .mui-icon {
    font-size: 18px;
  }
  .profile-grid {
    width: 100%;
    height: auto;
    padding: -10px 10px 0 10px;
    border-top: 0;
  }
  .profile-grid-item {
    flex-direction: column;
    align-items: center;
    font-size: 0.4rem;
    width: 3;
  }
  .profile-grid-item img {
    width: 32px;
    height: 47px;
  }
  .profile-grid-item1 img {
    width: 20px;
    height: 40px;
  }
  .profile-grid2 {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top: 0;
  }
  .profile-grid2 .profile-grid-item img {
    width: 20px;
    height: 20px;
  }
  .profile-grid2 span {
    margin-top: 8px;
  }
  .weui-grid:before {
    border-right: none;
  }
  .grid3-icon:before {
    font-size: 20px;
  }
  .grid3-icon {
    margin-top: 0 !important;
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .user-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #eee;
  }
  .profile-grid-grid4 {
    border-top: 0;
  }
  /* .mui-badge{
    margin-left:6rem;
  } */
  .other {
    margin: 0;
    padding: 0;
    font-size: 0.45rem;
    color: black;
    font-weight: bold;
    position: relative;
    left: 0.2rem;
    top: 0.4rem;
  }

  .grid-center {
    font-size: 0.3rem;
  }
  .grid-center1 {
    font-size: 0.3rem;
    position: relative;
    top: 0.3rem;
    left: 0.2rem;
  }
  .each1 {
    width: 1.8rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    line-height: 100px;
    position: relative;
    bottom: 0.98rem;
    text-align: center;
  }
  .each3 {
    width: 0.6rem;
    height: 0.65rem;
    display: flex;
    justify-content: space-between;
    line-height: 100px;
    position: relative;
    top: 0.2rem;
    left: 0.65rem;
    text-align: center;
  }
  .app-person {
    background-color: #f4f4f4;
  }
  .top {
    height: 1.35rem;
    width: 100%;
    background-image: linear-gradient(
      to top,
      #f4f4f4 0%,
      #e1d3b6 17%,
      #c0a368 100%
    );
    padding-left: 0.15rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
  }
  .user-avatar {
    width: 0.71rem;
    height: 0.71rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.15rem;
  }
  .user-avatar img {
    width: 100%;
    height: 100%;
  }
  .user-info {
    color: #fff;
  }
  .user-info .user-name {
    font-size: 0.18rem;
  }
  .nologin {
    display: inline-block;
    border-radius: 0.2rem;
    padding: 0 0.05rem;
    position: relative;
    top: -1.65rem;
    left: 2rem;
    color: #715821;
  }
  /* vip开通 */
  @keyframes vipshow {
    0% {
      transform: translate(0);
    }
    25% {
      transform: translate(0.1rem);
    }
    50% {
      transform: translate(0);
    }
    75% {
      transform: translate(0.1rem);
    }
    100% {
      transform: translate(0);
    }
  }
  .super-vip {
    width: 2.5rem;
    height: 0.6rem;
    background-color: #444;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -7.5rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    display: flex;
    align-items: center;
    animation: vipshow 1s linear;
  }
  .icon-wraper {
    width: 0.28rem;
    height: 0.28rem;
    line-height: 0.35rem;
    border-radius: 50%;
    text-align: center;
    background-color: #575757;
    margin: 0 0.05rem;
  }
  .mui-icon-extra-heart-filled {
    color: #ad7e1c;
    font-size: 0.22rem;
  }
  .vip-content {
    color: #ede7db;
    line-height: 0.2rem;
  }
  .vip-top {
    font-size: 0.14rem;
  }
  .vip-bottom {
    font-size: 0.12rem;
    white-space: nowrap;
    transform: translate(-0.06rem) scale(0.8);
    text-align: left;
  }
  .mui-icon-extra-arrowrightcricle {
    font-size: 0.08rem;
  }
  /* 主体 */
  .content {
    position: relative;
    top: 1.15rem;
    z-index: 99;
  }
  .wrap-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 95%;
    margin: 0 auto;
    border-radius: 0.1rem;
    padding: 0.1rem 0.15rem;
    /* box-shadow: 0px 1px 10px 2px #ddd; */
    border: 1px solid #f2f5f4;
  }
  .second-line{
    width:25% !important;
  }
  .weui-grids:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 0px;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.weui-grid:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 0px;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}


</style>
