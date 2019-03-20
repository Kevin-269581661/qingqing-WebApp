<template>
  <!-- 头部开始 -->
  <div class="shop-difficult">
    <div class="difficult-homework">
        <mt-header title="购买疑难">
          <router-link to="/homedif" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 头部结束 -->
        <!-- 中间图片开始 -->
          <img id="call_phone" class="buy-buy" data-external="actioncode=m_index_wenjuan " src="https://static.changingedu.com/static/assets/static/student/findteacher/images/new/to_gethelp.4d8cbf90d573ed306b0d96636e5e35fa.png " alt=" ">    
           <!-- 中间图片结束 -->
           <!-- 中间购买开始 -->
          <div class="content">
              <div class="container">
                <div class="wrap-box">
                  <div class="left">
                    <div>15分钟
                      <span class="first-price">首单特惠</span>
                    </div>

                    <div class="info">
                      <span>可使用1次作业疑难(有效期5天)</span>
                      <span >原价￥20</span>
                     
                    </div>
                  </div>
                  <div class="right">
                    <div class="btn1">￥1</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="content">
                <div class="container">
                  <div class="wrap-box">
                    <div class="left">
                      <div>150分钟</div>
                      <div class="info">
                        <span>可使用10次作业疑难(有效期5天)</span>
                        <span >原价￥200</span>
                       
                      </div>
                    </div>
                    <div class="right">
                      <div class="btn1">￥129</div>
                    </div>
                  </div>
                </div>
              </div>
              
            <div class="content">
                <div class="container">
                  <div class="wrap-box">
                    <div class="left">
                      <div>450分钟</div>
                      <div class="info">
                        <span>可使用30次作业疑难(有效期90天)</span>
                        <span >原价￥600</span>
                       
                      </div>
                    </div>
                    <div class="right">
                      <div class="btn1">￥199</div>
                    </div>
                  </div>
                </div>
              </div>
    
            <div class="content">
                <div class="container">
                  <div class="wrap-box">
                    <div class="left">
                      <div>900分钟</div>
                      <div class="info">
                        <span>可使用1次作业疑难(有效期5天)</span>
                        <span >原价￥1200</span>
                       
                      </div>
                    </div>
                    <div class="right">
                      <div class="btn1">￥359</div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    <!-- 中间购买结束 -->
    <!-- 套餐规则开始 -->
    <div data-v-3069dd92="" class="rights_main">
        <div class="rights_title">套餐使用规则：</div>
        <div class="rights_text">1.请在购买前确认您的套餐有效期。套餐购买后立即生效，套餐截止日期为截止日当天24点前。</div>
        <div class="rights_text">2.一次答疑胡时长为15分钟，不足15分钟按15分钟计算，您连线并进入课堂，老师审题后，开始计时，审题时间不计入收费。</div>
        <div class="rights_text">3.当前课堂15分钟后结束后，60秒内未退出，系统自动续费，单次课堂最多续费8次。</div>
        <div class="rights_text">4.续费时，账户若有可用套餐，则自动扣费15分钟；若无可用套餐，您可以在上完课程后，支付费用。</div>
        <div class="rights_text">5.若您当前账户有未缴费课程，无法继续发起下一次答疑。</div>
        <div class="rights_text">详细信息你可点击查看 
          <span class="online-answer">《在线答疑服务协议》</span>
        </div>
        <!---->
      </div>
   </div>
   <!-- 套餐规则结束 -->
  </div>
</template>

<script>


// import ToggleText from './ToggleText'

export default {
    components: {
     
    },
    data() {
      return {
        
      }
    },
    methods: {
      //   //控制tabbar是否隐藏
      // handleC() {
      //   this.$store.commit("setTabbarIsShow");
      //   //console.log(this.$store.getters.getisTabbarShow);
      // },
      handleC() {
        this.$store.commit("setTabbarIsShow");
        //console.log(this.$store.getters.getisTabbarShow);
      
        },
    },
    created() {
     
    },
    mounted() {
      //    document.getElementById("backdrop").addEventListener("tap",function(){
      //        mui('.mui-off-canvas-wrap').offCanvas('close');
      //    })
    //   this.showgoodList();
      this.handleC();
     },
     beforeDestroy () {
       this.handleC();
     }
    
  
  }

</script>

<style lang="less" scoped>
  /*  */
  .shop-difficult{
    height:25rem;
  }
  .buy-buy{
    margin-bottom: 0.5rem;
  }
   .container{
    margin-bottom: 0.5rem;
}
/* 中间购买开始 */
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
  font-size: 15px;
  font-weight: 800;
}
.info > span {
  display: inline-block;
  
}
.first-price{
  height: 16px;
    line-height: 16px;
    position: relative;
    top: 0px;
    font-size: 10px;
    padding: 0 3px;
    border-radius: 2px;
    text-align: center;
    border: 1px solid #F9DDCF;
    background: #F9DDCF;
    color: #EE7E41;
    margin-left: 3px;
}
.info span:first-child {
  font-size: 11px;
  font-weight: 500;
  
}
.info span:last-child{
  float:right;
  position: relative;
  left:1.5rem;
  top:0rem;
  color: #333;
  font-size: 10px;
  text-decoration: line-through; 
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
  color:#EE7E41;
  font-size: 15px;
  font-weight: 800;
  margin-left:-0.5rem;
  margin-top:-0.8rem;
}
.left {
  width: 80%;
}
/* 中间购买结束 */
/* 套餐规则开始 */
.online-answer{
  color:#52d58f;
}
.rights_main {
    width:10rem;
    height:8rem;
    padding: 3px 16px 74px 16px;
    color: #848a91;
    font-size: 11px;
    background-color: #fff;
  }
  /* 套餐规则结束 */
</style>
