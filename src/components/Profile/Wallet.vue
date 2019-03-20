<template>
        <div class="app-wallet">
            <!-- 顶部 -->
           <header id="header" class="mui-bar mui-bar-nav">
               <!-- 返回箭头 -->
                <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left b1"></a>
                <!-- 我的钱包 -->
                <div class="mySet">
                    <div data-my='mymoney'> <span>我的钱包</span> </div>
                    <div data-myionc='pic'>
                        <img src="../../assets/images/set.png" alt="">
                    </div>
                </div>
            </header>
            <!--总金额  -->
            <div class="myMoney">
                 <p data-all=money>总金额(元)</p>
                 <h2>0.00</h2>
            </div>
            <!-- 充值 -->
            <div class="showMoney">
                <div class="show-item">
                    <p data-all=money>充值余额(元)</p>
                    <h4>0.00</h4>
                </div>
                <div class="show-item">
                    <p data-all=money>不可提现余额(元)
                        <span data-answer=pic>
                            <img src="../../assets/images/answer.png" alt="">
                        </span>
                    </p>
                    <h4>0.00</h4>
                </div>
            </div>
            <!-- 钱包明细 -->
            <div class="moneyDetails">
                <div class="detail-item">
                    <div  data-money=ionic>
                        <span data-bg=bgionic2></span>
                        <span>钱包明细</span>
                    </div>
                     <span data-arrow=more></span>
                </div>
                <div class="detail-item">
                    <div data-money=ionic>
                      <span  data-bg=bgionic></span>
                       <span>申请提现</span> 
                    </div>
                     <span data-arrow=more> </span>
                </div>
            </div>
            <!-- 充值按钮 -->
            <div class="moneyBtn" @click="goRecharge()">
                <span>充值</span>
            </div>
        </div>
    </template>
    <script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            toBack(){
                this.$router.go(-1)
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
    <style scope>
        .app-wallet{
            height:auto;
        }
        #header{
             background: #ff8b04;
             margin-bottom: .44rem;
        }
        /* 顶部 */
        .mySet{
            width:92%;
            height:1.2rem;
            display: flex;
            justify-content: space-between;
            margin:0 auto;
            line-height:1.2rem;
            color:#fff;
        }
        .mySet>div[data-my=mymoney]{
            margin:0 auto;
            font-size:.40rem;
        }
        .mySet>div[data-myionc=pic]>img{
            width:0.5rem;
            height:0.5rem;
        }
        /* 总金额 */
        .myMoney{
            width: 100%;
            height: 2rem;
            margin-top: 1.156rem;
            text-align: center;
            background: #ff8b04;
            color:#fff;
        }
        .myMoney p[data-all=money]{
            color:#fff;
        }
        /* 显示金额 */
        .showMoney{
            height:2rem;
            display: flex;
            justify-content: space-around;
            text-align: center;
            padding:10px 10px;
            background: #ff8b04;
        }
        /* 左侧 右侧 */
        .show-item{
            width:48%;
            color:#fff;
        }
        .show-item p[data-all=money]{
            color:#fff;
        }
        /* 问号 */
        .show-item span[data-answer=pic] img{
            width: 12%;
            height:100%;
            margin-left:-5px;
        }
        /* 零钱明细 */
        .moneyDetails{
            width:100%;
            background:#fff;
            margin-top:2px;
        }
        /*  */
        .detail-item{
             height:1.2rem;
            display: flex;
            justify-content: space-between;
            padding:10px 10px;
            font-size:.40rem;
            border-bottom: 2px solid #fafafa;
        }
        /* 更多箭头 */
        .detail-item span[data-arrow=more]{
            display: inline-block;
            width:12px;
            height:12px;
            transform: rotate(-45deg);
            border-bottom:1px solid #999;
            border-right:1px solid #999;
            margin-top:8px;
        }
        /* 充值按钮 */
        .moneyBtn{
            width:9rem;
            height: 1rem;
            position: fixed;
            bottom: 1.25rem;
            background:#fd6220;
            color:#fff;
            -webkit-border-radius:2.1875rem;
            left:.5rem;
            text-align: center;
             line-height: 1rem;
            font-size: .40rem;
        }
        .detail-item div[data-money=ionic]{
            display: flex;
        }
        /* 图标1 */
        .detail-item span[data-bg=bgionic]{
            display: block;
            width:25px;
            height:27px;
            background:url(../../assets/images/withdraw.png) no-repeat;
            background-size:100%;
            margin-right:5px;
        }
        /* 图标2 */
        .detail-item span[data-bg=bgionic2]{
            display: block;
            width:25px;
            height:27px;
            background:url(../../assets/images/bag.png) no-repeat;
            background-size:100%;
            margin-right:5px;
        }
    </style>