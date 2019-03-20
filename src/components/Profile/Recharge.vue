<template>
    <div class="app-rech">
             <!-- 顶部 -->
        <header  class="mui-bar mui-bar-nav bg">
            <!-- 返回箭头 -->
            <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left "></a>
            <!-- 我的钱包 -->
            <h4 data-text=text>充值</h4>
        </header>   
        <!--  -->
        <div class="rech-pic">
            <img src="static/images/ionic3.jpg" alt="">
        </div>
        <!-- 分隔条 -->
        <div class='divide'></div>
        <!-- 金额选项 -->
        <div class="rechMoney">
            <div class="rech-item" data-rech=money>
                <span  >3000元</span>
            </div>
            <div class="rech-item">
                <span>5000元</span>
            </div>
            <div class="rech-item">
                <span>10000元</span>
            </div>
        </div>
        <!-- 金额价格  -->
        <div class="rechInput">
            <span class="otherMoney">其他金额</span>
            <input type="text" data-input=input   placeholder="手动输入充值金额"> 
            <span class="HowMoney">元</span>
        </div>
        <div class="moneyBtn" @click="goRecharge()">
                <span>充值</span>
                <div>点击立即充值，即表示您已经同意《充值说明》</div>
            </div>
        
</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        toBack(){
            this.$router.go(-1);
        },
        goRecharge(){
            this.$router.push('/recharge')
        },
        handleC() {
        this.$store.commit("setTabbarIsShow");
        //console.log(this.$store.getters.getisTabbarShow);
      },

    },
    mounted() {
      //    document.getElementById("backdrop").addEventListener("tap",function(){
      //        mui('.mui-off-canvas-wrap').offCanvas('close');
      //    })
      
      this.handleC();
    },
    beforeDestroy () {
      this.handleC();
    }
  
}
</script>
<style lang="">
    .bg{
        background: #fff;
    }
    .app-rech{
        height:auto;
        background:#fff;
    }
    .app-rech h4[data-text=text]{
        text-align: center;
        line-height:1rem;
    }
    /* 图片 */
    .rech-pic{
        margin-top:1.25rem;
    }
    /* 分隔条 */
    .divide{
        width:100%;
        height:0.25rem;
        background:#efefef;
    }
    /* 充值金额 */
    .rechMoney{
        width:100%;
        height:3rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top:1rem;
    }
    /* 金额选项 */
    .rech-item{
        width:30%;
        height:1.5rem;
        border:1px solid #c9c9c9;
        border-radius: 10px;
        text-align: center;
        line-height: 1.5rem;
    }
    /* 选中金额 */
    .rech-item[data-rech=money]{
        border:1px solid #e57138;
        background:#fef5e6;
        color:#e57138;
    }
    .rechInput{
        position:relative;
    }
    .rechInput .otherMoney{
        position: absolute;
        top:8px;
        left:30px;
        font-size:.40rem;
    }
    /* 手动金额 */
    .rechInput input{
        width:90%;
        border-radius: 10px;
       margin-left:15px  ! important;
    }
    .rechInput input[placeholder]{
        text-indent: 90px;
    }
    .HowMoney{
        position:absolute;
        top:8px;
        right:30px;
        font-size:.40rem;
    }
    /* 立即充值按钮 */
    .moneyBtn{
        width:77%;
        height: 1.25rem;
        position: fixed;
        bottom: 7.25rem;   
        background:#fd6220;
        color:#fff;
        -webkit-border-radius:2.1875rem;
        left:1rem;
        text-align: center;
         line-height: 1.25rem;
        font-size: .40rem;
    }
    .detail-item div[data-money=ionic]{
        display: flex;
    }
    /* 余额 */
    .remaining{
        
    }
</style>
