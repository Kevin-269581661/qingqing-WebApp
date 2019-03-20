<template>
        <div class="app-order">
            <header id="header" class="mui-bar mui-bar-nav">
                <!-- 返回箭头 -->
                <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
                <!-- 课程介绍 -->
                <div class="Sel-class">      
                     <div class="Sel-btn1 Sel-color">
                        <span>一对一课</span>
                    </div>
                    <div class="Sel-btn2">
                        <span>小组课</span>
                    </div>
                </div>
            </header>
            <!-- 订单列表 -->
            <div class="Sel-Order">
                <!-- 一对一课 -->
                <div class="Order-list">
                   <span class="order-item sel-one">代付款</span>
                   <span class="order-item">全部订单</span>
                </div>
                <!-- 小组课 -->
                <!-- <div class="Order-list2">
                    <span class="order-item2 sel-one">代付款</span>
                    <span class="order-item2">未开组</span>
                    <span class="order-item2">全部订单</span>
                </div> -->
                <!-- 一对一订单为空的状态 -->
                <div class="noCart">
                    <!-- 代付款为空 -->
                    <div class="noSel"></div>
                    <!-- 全部订单为空 -->
                    <!-- <div class="noOrder"></div> -->
                    <!-- 小组课订单为空 -->
                    <!-- <div class="noGroup"></div> -->
                </div>
            </div>
        </div>
    </template>
    <script>
    import { Tab, TabItem } from 'vux';
    import { PullRefresh, Toast } from 'vant';
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            // 返回上级
            toBack(){
                this.$router.go(-1);
           }
        },
    }
    </script>
    <style scope>
        /*  */
        .Sel-class{
            width:5rem;
            height:1rem;
            display:flex;
            justify-content: center;
            margin:0.075rem  auto;
            border-radius:.40rem;
        }
        /* 两个选项按钮 */
        .Sel-btn1,.Sel-btn2{
            width:2.5rem;
            text-align: center;
            line-height: 1rem;
            font-size: 0.40rem;
            color:#fff;
            height:1rem;  
        }
        /* 左侧按钮 */
        .Sel-btn1{
           border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        /* 选中按钮 */
       .Sel-color{
           background: #46cf81;
       }
       /*右侧按钮  */
       .Sel-btn2{
           color:green;
           border-top:1px solid green;
           border-right: 1px solid green;
           border-bottom: 1px solid green;
           border-top-right-radius: 3px;
           border-bottom-right-radius: 3px;
       }
       /* 订单 */
       .Sel-Order{
        width:100%;
        margin-top:1.25rem;
       }
       /* 订单列表 */
       .Order-list,.Order-list2{
           height:1rem;
           display: flex;
           justify-content: space-around;
           background:#fff;
       }
       .order-item,.order-item2{
           width:20%;
          text-align: center;
          line-height:1rem;
          font-size: 0.40rem;
       }
       /* 选中的列表 */
       .sel-one{
        color:green;
        border-bottom: 2px solid #58bc80;
       }
    
       /* 订单为空 */
        .noCart{
           background:#f8f8f8;
       }
       /* 代付款  */
       .noSel{
           height:14.4375rem;
           width:100%;
           margin:0 auto;
           background:url(../../assets/images/bg.jpg) no-repeat center;
           background-size:50%;
           background-position: 50%;
       }
     /*全部订单为空的图片  */
        .noOrder{
            height:14.4375rem;
            width:100%;
            margin:0 auto;
            background:url(../../assets/images/bg2.jpg) no-repeat center;
            background-size:50%;
            background-position: 50%;
        }
     /* 小组课订单为空 */
        .noGroup{
            height:14.4375rem;
            width:100%;
            margin:0 auto;
            background:url(../../assets/images/bg3.jpg) no-repeat center;
            background-size:50%;
            background-position: 50%;
        }
    </style>
    