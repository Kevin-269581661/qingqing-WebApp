<template>
 
    <div data-v-3069dd92="" class="rights has_page_header">
      <div data-v-3069dd92="" class="fixed-header">
        <div>
          <div class="header">
            <router-link to="/goodstudent">
              <i id="returnBack" class="returnBack"></i>
            </router-link>
            <h3>权益说明</h3>
          </div>
        </div>
      </div>
      <div class="view-swiper">
        <div class="nav-con">
          <mt-navbar v-model="selected">
            <mt-tab-item id="tab1">优选精品课</mt-tab-item>
            <div class="split"></div>
            <mt-tab-item id="tab2">公开课免费看</mt-tab-item>
            <div class="split"></div>
            <mt-tab-item id="tab3">专业升学指导</mt-tab-item>
            <div class="split"></div>

          </mt-navbar>

          <div class="interview">
            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab1">

                <div data-v-3069dd92="" class="rights_main">
                  <div class="rights_title">特权内容</div>
                  <div class="rights_text">1.从购买日起可观看该一年内的优选精品课3年</div>
                  <div class="rights_text">2.在有效期内，可享受无限次回放权益</div>
                  <div class="rights_title">使用规则</div>
                  <div class="rights_text">1.在轻轻家教app“优等生”模块，可观看所有上线的课程</div>
                  <!---->
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab2">

                <div data-v-3069dd92="" class="rights_main">
                  <div class="rights_title">特权内容</div>
                  <div class="rights_text">开通轻轻家教有登上后，在有效期内可免费观看公开</div>
                  <div class="rights_text">课的权益，无需分享和购买，且支持无限次回放权益</div>
                  <div class="rights_title">使用规则</div>
                  <div class="rights_text">1.在轻轻家教app“优等生”模块，可观看所有上线的课程</div>
                  <!---->
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab3">

                <div data-v-3069dd92="" class="rights_main" style="">
                  <div class="rights_title">特权内容</div>
                  <div class="rights_text">1. 在有效期内可以获得2次升学咨询服务</div>
                  <div class="rights_text">2. 咨询方式为微信咨询，单次咨询不计时长</div>
                  <div class="consult_teacher">
                    <div class="avatar"></div>
                    <div class="consult_info">
                      <div class="name">小轻老师</div>
                      <div class="time">咨询时间：周一至周五9:00-18:00</div>

                    </div>

                  </div>
                </div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </div>
      </div>
    </div>
    <!-- cell单元行 -->




</template>
<script>
  import { Navbar, TabItem } from "mint-ui";
  export default {
    data() {
      return {

        selected: "tab1", //顶部导航
        handleC() {
        this.$store.commit("setTabbarIsShow");
        //console.log(this.$store.getters.getisTabbarShow);
      },

      };
    },
    methods: {
      //点击老师信息，跳转详情
          //控制tabbar是否隐藏
          handleC() {
        this.$store.commit("setTabbarIsShow");
        //console.log(this.$store.getters.getisTabbarShow);
      },
    },
    created() {

    },
    mounted() { 
      this.showgoodList();
      this.handleC();
    },
    beforeDestroy () {
      this.handleC();
    
    },
    components: {},
    watch: {}
  };
</script>
<style scoped>
  .fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 10rem;
    margin: 0 auto;
    z-index: 1004;
  }

  .fixed-header .header {
    position: relative;
    height: 1.2rem;
    border-bottom: 0.013333rem solid #ccc;
    background-color: #f7f7f7;
  }

  .fixed-header .returnBack {
    position: absolute;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    background: url(https://static.changingedu.com/static/assets/static/student/prime_student/js/images/tips_lj_green.bd07b77c2474c0608cb141b67f631258.png) no-repeat 0.333333rem center;
    -webkit-background-size: 0.28rem 0.48rem;
    background-size: 0.28rem 0.48rem;
  }

  .fixed-header .header h3 {
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
    line-height: 1.2rem;
    color: #333;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header .topage {
    height: 100%;
    line-height: 1.2rem;
    position: absolute;
    top: 0;
    right: 0.3rem;
    color: #23cd77;
    font-size: 16px;
  }

  .rights {
    height: 100%;
    background-color: #fff;
  }

  .rights.has_page_header {
    padding-top: 1.2rem;
  }

  .rights * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .rights .rights_type_tab {
    position: fixed;
    max-width: 10rem;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 1002;
    box-shadow: 3px 2px 10px 0px rgba(173, 131, 101, 0.18);
    overflow-x: auto;
    white-space: nowrap;
    list-style: none;
    display: flex;
  }

  .rights .rights_type_tab.has_page_header {
    top: 1.2rem;
  }

  .rights .rights_type_tab .tab_item {
    min-width: 75px;
    width: 33.33%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: #848a91;
    font-size: 15px;
    position: relative;
    padding: 0 8px;
  }

  .rights .rights_type_tab .tab_item:first-child {
    padding-left: 16px;
  }

  .rights .rights_type_tab .tab_item:last-child {
    padding-right: 16px;
  }

  .rights .rights_type_tab .tab_item.is_active {
    color: #252c34;
    font-size: 16px;
  }

  .rights .rights_type_tab .tab_item.is_active::after {
    display: block;
    content: '';
    width: 15px;
    border: 2px solid #1ad974;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  .rights .rights_main {
    padding: 3px 16px 74px 16px;
    color: #848a91;
    font-size: 14px;
    background-color: #fff;
  }

  .rights .rights_main .rights_title {
    color: #252c34;
    font-size: 15px;
    margin: 15px 0 10px 0;
    font-weight: 500;
  }

  .rights .rights_main .rights_subtitle {
    color: #252c34;
    font-size: 14px;
    line-height: 25px;
  }

  .rights .rights_main .rights_subtitle:not(:first-child) {
    margin-top: 10px;
  }

  .rights .rights_main .rights_text {
    line-height: 25px;
    white-space: nowrap;
    font-size: 10px;
  }

  .rights .rights_main .consult_teacher {
    height: 87px;
    padding: 12px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    margin-top: 10px;
  }

  .rights .rights_main .consult_teacher .avatar {
    width: 63px;
    height: 63px;
    float: left;
    background: url(https://static.changingedu.com/static/assets/static/student/prime_student/js/images/rights/xiaoqing.13a97ddefe2abf750d349a2a664bea04.png) no-repeat;
    background-position: center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .rights .rights_main .consult_teacher .consult_info {
    margin-left: 78px;
    font-size: 14px;
  }

  .rights .rights_main .consult_teacher .consult_info .name {
    color: #252c34;
    margin-top: 10px;
  }

  @media only screen and (max-device-height: 568px) {
    .rights .rights_main .consult_teacher .consult_info .name {
      margin-top: 0;
      /*no*/
    }
  }

  .rights .rights_main .consult_teacher .consult_info .time {
    margin-top: 5px;
    color: #848a91;
  }

  .rights .exclusive_coupon_wrap {

    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
  }

  .rights .exclusive_coupon_wrap .exclusive_coupon_in_page {
    width: calc(50% - 5px);
  }

  .rights .bottom_btn {
    position: fixed;
    max-width: 10rem;
    bottom: 0;
    height: 64px;
    width: 100%;
    background-color: #fff;
    padding: 9px 16px;
  }

  .rights .bottom_btn .btn {
    background: linear-gradient(133deg, #e1ba99 0%, #d2a06e 100%);
    border-radius: 4px;
    height: 100%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    margin-top: -5rem;
  }

  .view-swiper {
    height: 13rem;
  }

  .wrap-box {
    margin: 0 auto;
    height: 2rem;
    border: 1px solid #f9ddcf;
    background: #fefbf9;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 0.4rem;
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

  .info>span {
    display: inline-block;
  }

  .info span:first-child {
    font-size: 16px;
    font-weight: 800;
  }

  .info span:nth-child(2) {
    color: #333;
    font-size: 12px;
    /* text-decoration: line-through; */
  }

  .info span:last-child {
    color: #ee7e41;
    font-size: 10px;
    padding: 3px 5px;
  }

  .wrap-box .right {
    width: 1rem;
    margin: 0;
  }

  .right .btn1 {
    height: 0.69rem;
    line-height: 0.69rem;
    text-align: center;
    background: #ed8c3b;
    color: #fff;
    border-radius: 15px;
    font-size: 16px;
  }

  .left {
    width: 80%;
  }

  /* 红包结束 */

  /* 在线老师开始 */
</style>