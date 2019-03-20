<template>
    <div class="app-dou">
       <header id="header" class="mui-bar mui-bar-nav htop">
           <!-- 返回箭头 -->
            <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left b1"></a>
            <!-- 我的轻豆 -->
            <h5 data-qindou=qindou>我的轻豆</h5>
        </header>
        <!--  -->
        <div class="dou-ionic">
            <div class="ionic-item">
                <p data-img=ionic>
                    <img src="../../assets/images/ionic4.jpg" alt="">
                </p>
                <h5>轻豆<span class="how">0</span></h5>
            </div>
            <div class="ionic-item">
                 <p data-img=ionic>
                    <img src="../../assets/images/ionic4-2.jpg" alt="">
                </p>
                <h5>兑换记录</h5>
            </div>
            <div class="ionic-item">
                 <p data-img=ionic>
                    <img src="../../assets/images/ionic4-3.jpg" alt="">
                </p>
                <h5>轻豆规则</h5>
            </div>
        </div>
        <!-- 分隔条 -->
        <div class="divide"></div>
        <!-- 做任务 -->
        <div class="todo">
            <!-- top -->
            <div class="todo1">
                <ul data-to=todo>
                    <li><h4 data-do=to>做任务赚轻豆</h4></li>
                    <li data-get=more>收起 <span data-more=more></span></li>
                </ul>
            </div>
            <!-- todo列表 -->
            <div class="tolist">
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5.jpg" alt="">
                            </span>
                            <span>邀请新家长注册</span>
                                <p data-how=zoro>+0轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >任务说明</span>
                    </div>
                </div>
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5-2.jpg" alt="">
                            </span>
                            <span>关注轻轻服务号</span>
                                <p data-how=zoro>+300轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >去关注</span>
                    </div>
                </div>
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5-3.jpg" alt="">
                            </span>
                            <span>填写家长问卷</span>
                                <p data-how=zoro>+100轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >去填写</span>
                    </div>
                </div>
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5-4.jpg" alt="">
                            </span>
                            <span>首次参与直播课堂</span>
                                <p data-how=zoro>+100轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >去参与</span>
                    </div>
                </div>
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5-5.jpg" alt="">
                            </span>
                            <span>分享活动页(1次/日)</span>
                                <p data-how=zoro>+10轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >任务说明</span>
                    </div>
                </div>
                <div class="toitem">
                    <!-- 任务介绍 -->
                    <div class="item1">
                        <h5>
                            <span data-img=item1>
                                <img src="../../assets/images/ionic5-5.jpg" alt="">
                            </span>
                            <span>分享老师主页(1次/日)</span>
                                <p data-how=zoro>+0轻豆</p>
                        </h5>
                    </div>
                    <!-- 任务按钮 -->
                    <div class="item2">
                        <span  data-how=say >任务说明</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分隔条 -->
         <div class="divide"></div>
         <!-- 好礼兑换 -->
         <div class="gift">
             <!-- top -->
             <div>
                 <h4 data-gift=gift class="">好礼兑换</h4>
             </div>
             <!-- gift ionic -->
             <div class="gift-list">
                 <div class="gift-item">
                     <div class="gift-pic">
                        <img src="../../assets/images/ionic6.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>15分钟1对1答疑课程</li>
                             <li data-how=many>1500轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic6-2.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>30分钟1对1答疑课程</li>
                             <li data-how=many>2850轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic6-3.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>45分钟1对1答疑课程</li>
                             <li data-how=many>4200轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic6-4.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>75分钟1对1答疑课程</li>
                             <li data-how=many>6900轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic6-5.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>150分钟1对1答疑课程</li>
                             <li data-how=many>13200轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic6-6.jpg" alt="" data-tui=jian>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>450分钟1对1答疑课程</li>
                             <li data-how=many>20000轻豆</li>
                         </ul>
                     </div>
                 </div>
                  <!-- 卷 -->
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7.jpg" alt="" data-img=juan>
                     </div>
                     <div class="gift-text">
                         <ul data-text=jia>
                             <li>小轻书签(8个)</li>
                             <li data-how=more>338轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-1.jpg" alt="" data-img=long>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>10元奖学券</li>
                             <li data-how=more>1998轻豆</li>
                         </ul>
                     </div>
                 </div>
                
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-2.jpg" alt="" data-img=juan>
                     </div>
                     <div class="gift-text">
                         <ul data-text=jia >
                             <li>20元奖学券</li>
                             <li data-how=more>3996轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-3.jpg" alt="" data-img=juan>
                     </div>
                     <div class="gift-text">
                         <ul data-text=jia>
                             <li>50元奖学券</li>
                             <li data-how=more>9950轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-4.jpg" alt="" data-img=juan>
                     </div>
                     <div class="gift-text">
                         <ul data-text=jia>
                             <li>100元奖学券</li>
                             <li data-how=more>17900轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-5.jpg" alt="" data-img=juan>
                     </div>
                     <div class="gift-text">
                         <ul data-text=jia>
                             <li>小轻定制手机</li>
                             <li data-how=more>5000轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-8.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>小轻定制手机</li>
                             <li data-how=more>16820轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-9.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>十万个为什么小学版</li>
                             <li data-how=more>10080轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-10.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>福尔摩斯探案全集</li>
                             <li data-how=many>10200轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-11.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>小王子中文精装版</li>
                             <li data-how=many>8500轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-12.jpg" alt="" data-img=book>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>鲁滨逊漂流记&汤姆索亚...</li>
                             <li data-how=many>9960轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-13.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>Lamy钢笔礼盒套装</li>
                             <li data-how=many>39000轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-14.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>小米电磁炉</li>
                             <li data-how=many>56999轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-15.jpg" alt="" data-img=deng>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>AR地球仪</li>
                             <li data-how=many>48800轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-16.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>小米无人机</li>
                             <li data-how=many>538600轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-17.jpg" alt="" data-img=feiji>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>美的压力锅</li>
                             <li data-how=many>58880轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-18.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>小天才电话手表(下单备...</li>
                             <li data-how=many>68800轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-19.jpg" alt="" data-img=shoubiao>
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>kindle(黑)</li>
                             <li data-how=many>78800轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-20.jpg" alt="">
                     </div>
                     <div class="gift-text">
                         <ul>
                             <li>Airpods苹果蓝牙耳机</li>
                             <li data-how=many>188600轻豆</li>
                         </ul>
                     </div>
                 </div>
                 <div class="gift-item">
                      <div class="gift-pic">
                        <img src="../../assets/images/ionic7-21.jpg" alt="" data-img=erji>
                     </div>
                     <div class="gift-text">
                         <ul data-text=text>
                             <li>15分钟1对1答疑课程</li>
                             <li data-how=many>1500轻豆</li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
         <div class="nomore">没有更多了</div>
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
    /*  */
    .app-dou{
        background:#fff;
    }
    .app-dou h5[data-qindou=qindou]{
        text-align: center;
        line-height:1rem;
        color:#000;
    }
    .app-dou .htop{
        background: #fff;
    }
    /* 3个图标 */
    .app-dou .dou-ionic{
        width:100%;
        height:3rem;
        /* border:1px solid #f00; */
        margin-top:1.2rem;
        border-top:1px solid #eeeeee;
        display: flex;
        justify-content: space-around;
        background:#fff;
      
    }
    /*  */
    .app-dou .dou-ionic .ionic-item{
        width:30%;
        height:3rem;
        /* border:1px  solid #f00; */
        text-align: center;
        line-height: 2rem;
    }
    /*  */
    .ionic-item p[data-img=ionic]{
        margin-bottom: 0;
    }
    .ionic-item p[data-img=ionic]>img{
        width:40%;
        height:100%;
        text-align: center;
    }
    .ionic-item .how{
        color:#f00;
    }
        /* 分隔条 */
    .divide{
        width:100%;
        height:0.25rem;
        background:#efefef;
    }
    /* 做任务 */
    .todo{
        height:auto;
        /* border:1px solid #f00; */
    }
    /*  */
    .todo .todo1{
        height:1rem;
        /* border:1px solid #f00; */
        margin-left:0.22rem;
    }
    /*  */
    .todo1 ul[data-to=todo]{
        display: flex;
        justify-content: space-between;
    }
    .todo1 ul[data-to=todo]>li h4[data-do=to]{
        line-height: .75rem;
        font-weight: bold;
    }
     .todo1 ul[data-to=todo]>li{
         line-height: 1rem;
         font-size: .38rem;
     }
    .todo1 li>span[data-more=more]{
        display: block;
        width: 10px;
        height: 10px;
        /* border: 1px solid #f00; */
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        float: right;
        margin-top: 17px;
        margin-left: 7px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        margin-right: 8px;
    }
    /*  */
    .todo1 li[data-get=more]{

    }
    .tolist{
        width:100%;
        height:auto;
        /* border:1px solid #f00; */
        /* margin-top:15px; */

    }
    .tolist .toitem{
        width:100%;
        height:1.8rem;
        /* border:1px solid #f00; */
        display: flex;
        justify-content: space-between;
        padding:10px 10px;
        border-bottom: 1px solid #ccc;
    }
    .item1{
        width:50%;
        height:1.2rem;
        /* border:1px solid #f00; */
    }
    .item2{
        width:30%;
        height:1rem;
        /* border:1px solid #f00; */
        border-radius: 20px;
         text-align: center;
         border:1px solid #ccc;
    }
    .item2 span[data-how=say]{
        text-align: center;
        line-height: 1rem;
        font-size:.40rem;
    }
    .item1 span[data-img=item1] img{
        width:16%;
        height:100%;
    }
    .item1 p[data-how=zoro]{
        margin-left: 32px;
        margin-top: -1px;
    }
    /* 好礼兑换 */
    .gift{
        height:auto;
        /* border:1px solid #ccc; */
    }
    .gift .gift-list{
        width:100%;
        height:auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .gift-item{
        width:50%;
        height:6rem;
        border:1px solid #0000001a;
        text-align: center;
    }
    .gift-pic{
        margin-top:10px;
    }
    .gift .gift-pic img{
        width:70%;
        height:100%;
    }
    .gift .gift-text{
        margin-top:20px;
        margin-left:0.2rem;
    }
    .gift h4[data-gift=gift]{
        margin-left:0.2rem;
        font-weight: 800;
    }
    .gift .gift-text li[data-how=many]{
        font-size: .40rem;
        color:#ff6600;
        float:left;
        margin-left:0.85rem;
    }
    .gift .gift-text li[data-how=more]{
        font-size: .40rem;
        color:#ff6600;
        /* float:left; */
        margin-left:-0.1rem;
    }
    /*  */
    .gift .gift-pic img[data-img=long]{
        width:22%;
        height:100%;
    }
    /* 推荐 */
    .gift .gift-pic img[data-tui=jian]{
        width: 85%;
        height: 100%;
        margin-top: -10px;
        margin-left: 20px;
    }
    .gift .gift-pic img[data-img=juan]{
        margin-top:45px;
    }
    .gift .gift-text ul[data-text=jia]{
        margin-top:45px;
        /* margin-left:-2rem; */
    }
    .gift .gift-pic img[data-img=book]{
        width:55%;
        height:100%;
    }
    .gift .gift-pic img[data-img=deng]{
        margin-top:39px;
    }
    .gift .gift-pic img[ data-img=feiji]{
        margin-top:20px;
    }
    .gift .gift-pic img[data-img=shoubiao]{
        margin-top:20px;
    }
    .gift .gift-pic img[ data-img=erji]{
        margin-top:22px;
    }
    .gift .gift-text ul[data-text=text]{
        margin-bottom: 50px;
    }
    /* 没有更多了 */
    .nomore{
        font-size:17px;
        margin-left:4rem;
       
    }
</style>