<template>
    <div class="wrapper">
			
        <div class="register_page">
				<router-link to="/" slot="left">
					<mt-button icon="back">back</mt-button>
				  </router-link>
				  <mt-button icon="more" slot="right"></mt-button>
            <div class="top_bg"></div>
            <div class="content">
				
                <h3>完成注册加入轻轻名师团队</h3>
                <div class="item teacher_name">
                    <input type="text" id="teacher_name" placeholder="姓名：例“张老师”">
                </div>
                <div class="item phone_number">
                    <input type="tel" oninput="this.value=this.value.replace(/[^0-9-]+/,'');" id="phone_number" placeholder="请输入手机号" maxlength="11">
                    <div class="get_code disable">获取验证码</div>
                </div>
                <div class="item img_code hide">
                    <input type="text" id="img_verify" placeholder="请输入图形验证码" maxlength="6">
                    <div class="imgcode_wrap">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="item captcha_code">
                    <input type="tel" oninput="this.value=this.value.replace(/[^0-9-]+/,'');" id="captcha_code" placeholder="请输入6位验证码" maxlength="6">
                </div>
                <div class="item city">
                    <div data-external="actioncode=c_select_city">授课城市</div>
                </div>
                <div id="submit" data-external="actioncode=c_register">注册成为轻轻老师</div>
            </div>
            <div class="about_qq">
                <h4>关于轻轻</h4>
                <div class="qingqing_intro">
                    轻轻家教提供全国中小学在线、上门全科辅导。精选全国各年级、各学科超两万名专业教师，打造"家课堂"教育服务模式，让家成为孩子钟爱的课堂。
                </div>
                <div class="qingqing_intro" style="padding-top: 0.3rem;">
                    目前已为全国家庭提供数百万小时的"家课堂"服务。 期待您的加入，共同携手，让家成为孩子钟爱的课堂。
                </div>
                <div class="tag_list">
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">优质师资顾问服务</div>
                            <div class="desc">通过平台认证即为您绑定专属师资顾问</div>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">教研与社群活动</div>
                            <div class="desc">定期开展教研与社群活动，快速提升教学能力</div>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">海量生源发布</div>
                            <div class="desc">平台生源实时发布，海量生源任老师挑选</div>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">智能教学系统</div>
                            <div class="desc">用科技改变教学方式，轻松获得家长信任</div>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">丰厚薪资待遇</div>
                            <div class="desc">课时费高于行业水平，保证老师课程收入</div>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="icon"></div>
                        <div class="intro">
                            <div class="title">个人品牌建立</div>
                            <div class="desc">平台媒体帮老师建立个人品牌，成为名师不
                                <br>再是梦</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   
  

    export default {
       components: {
            

        },
       data(){
           return{
           }
       } ,
       methods:{
   
         
       
       },
       created(){
       },
       mounted(){
     
       }
    }
			
</script>
<style scoped>
 
 .register_page {
	width: 100%;
	padding-bottom: 1.333333rem;
	overflow: hidden;
	background-color: #dd4734;
	background: linear-gradient(180deg,#fc7b5d,#ee4b35);
	height:35rem;
}

.register_page .top_bg {
	width: 100%;
	height: 5.213333rem;
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/inviter_bg.c06c65df6bde4e03ee3ed33e20aedd4e.png) no-repeat;
	background-size: 100%;
	background-position: 50%
}

.register_page .content h3 {
	font-family: PingFangSC-Semibold;
	font-size: .48rem;
	color: #fff;
	letter-spacing: -.006933rem;
	text-align: center;
	padding-bottom: .33333rem
}

.register_page .content {
	width: 100%;
	position: absolute;
	top: 4.133333rem
}

.register_page .content .item {
	width: 8.533333rem;
	height: .933333rem;
	border-radius: .053333rem;
	margin: 0 auto;
	margin-top: .306667rem;
	font-size: .346667rem;
	position: relative
}

.register_page .content .item input {
	width: 100%;
	height: 100%;
	line-height: .933333rem;
	appearance: none;
	-webkit-appearance: none;
	outline: none;
	border: none;
	font-size: .346667rem;
	color: #333;
	text-indent: 1.5em;
	border-radius: .053333rem
}

.register_page .about_qq {
	margin: 0 auto;
	margin-top: 9.333333rem;
	width: 9rem
}

.register_page .about_qq.mt {
	margin-top: 10.573333rem
}

.register_page .about_qq h4 {
	display: block;
	position: relative;
	font-size: .426667rem;
	width: 3.2rem;
	text-align: center;
	margin: 0 auto;
	margin-top: .533333rem;
	color: #fff
}

.register_page .about_qq h4:before {
	left: .266667rem;
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/icon_dec.6fe08370e74b0945046046cf21fc1411.png) no-repeat;
	background-position: 50%;
	background-size: 100%
}

.register_page .about_qq h4:after,.register_page .about_qq h4:before {
	content: "";
	position: absolute;
	top: .133333rem;
	width: .293333rem;
	height: .28rem
}

.register_page .about_qq h4:after {
	right: .266667rem;
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/icon_dec.6fe08370e74b0945046046cf21fc1411.png) no-repeat;
	background-position: 50%;
	background-size: 100%
}

.register_page .about_qq .qingqing_intro {
	font-size: .373333rem;
	color: #fff;
	width: 100%;
	margin: 0 auto;
	line-height: .533333rem;
	padding-top: .68rem;
	letter-spacing: -.007733rem
}

.register_page .about_qq .tag_list {
	width: 9.333333rem;
	margin: 0 auto;
	margin-top: .56rem
}

.register_page .about_qq .tag_list .tag {
	clear: both
}

.register_page .about_qq .tag_list .tag .icon {
	float: left;
	width: .8rem;
	height: .72rem;
	background-color: #f7f7f7;
	margin-top: .493333rem
}

.register_page .about_qq .tag_list .tag:first-child .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_1.e6cfc05c6f64c59081c1f83c41e8fed4.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag:nth-child(2) .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_2.983d70dff394f20d1f4de49bafbf7f8e.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag:nth-child(3) .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_3.71f83b27bad459472dd5b2e2e61b4f34.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag:nth-child(4) .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_4.c797a9d5c390e4474873f3d845a6e4fc.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag:nth-child(5) .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_5.d5d14820a4597875e07c7a3d5d99ad64.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag:nth-child(6) .icon {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/tag_6.f08eb15a673e956b71f002b57408fe1e.png) no-repeat;
	background-position: 50%;
	background-size: contain
}

.register_page .about_qq .tag_list .tag .intro {
	float: left;
	height: .933333rem;
	margin-left: .466667rem;
	margin-bottom: .293333rem;
	margin-top: .36rem
}

.register_page .about_qq .tag_list .tag .intro .title {
	font-size: .448rem;
	color: #fff;
	margin-top: .1rem;
	letter-spacing: -.0092rem;
	line-height: .626667rem;
	width: 100%
}

.register_page .about_qq .tag_list .tag .intro .desc {
	font-size: .384rem;
	margin-top: .05rem;
	color: #fff;
	letter-spacing: -.008rem;
	line-height: .546667rem;
	width: 100%
}

.register_page .content #submit {
	width: 8rem;
	height: 1.226667rem;
	border-radius: 1.226667rem;
	margin: 0 auto;
	margin-top: 1.946667rem;
	background-color: #e7e7e7;
	text-align: center;
	line-height: 1.226667rem;
	font-size: .506667rem;
	color: #8b572a;
	background-color: #ffe100;
	background: linear-gradient(-56deg,#ffe100,#fbef5d)
}

.register_page .content .item .get_code {
	font-family: PingFangSC-Semibold;
	background: linear-gradient(-123deg,#ff9f00,#ffe01d);
	text-align: center;
	font-size: .4rem;
	color: #fff
}

.register_page .content .item .get_code,.register_page .content .item .imgcode_wrap {
	position: absolute;
	top: 0;
	right: 0;
	width: 2.72rem;
	height: 100%;
	line-height: .933333rem
}

.register_page .content .item .imgcode_wrap img {
	display: block;
	width: 100%;
	height: 100%
}

.register_page .content .city>div {
	background: #fff;
	width: 100%;
	height: 100%;
	line-height: .933333rem;
	appearance: none;
	-webkit-appearance: none;
	outline: none;
	border: none;
	font-size: .346667rem;
	color: #757575;
	text-indent: 1.5em;
	border-radius: .053333rem
}

.register_page .content .hide {
	display: none
}

.register_page .content .item .disable_grey,.register_page .content .phone_number .get_code.disable {
	background: #ccc
}

.city>div:before {
	content: "";
	position: absolute;
	width: .506667rem;
	height: .373333rem;
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/icon_down.60862752d5ed07bc05bae59cf4918ab6.png) no-repeat;
	background-position: 50%;
	background-size: 100%;
	top: .333333rem;
	right: .293333rem
}

.pop_wrap {
	width: 100%;
	height: 100%;
	position: relative;
	display: none
}

.pop_wrap .active {
	background-color: #4285f4;
	color: #fff
}

.pop_wrap .pop_bg {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.5)
}

.pop_wrap .ico_close {
	position: absolute;
	top: 0;
	right: .493333rem;
	width: .693333rem;
	height: .8rem;
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/icon_close.10800d824a211a1c99df1eef1fcd9de2.png) no-repeat;
	background-position: 50%;
	background-size: 100%
}

.pop_wrap .pop_content {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 7.333333rem;
	height: 6.666667rem;
	margin-left: -3.666667rem;
	margin-top: -3.333333rem;
	border-radius: .373333rem;
	background-color: #fff;
	text-align: center
}

.prompt {
	font-size: .32rem;
	color: #ff6748;
	display: inline-block;
	margin-top: .1rem
}

.tab {
	margin-top: .266667rem;
	height: 4.2rem;
	overflow: hidden
}

.pop_wrap .pop_content h2 {
	width: 100%;
	line-height: .426667rem;
	font-size: .426667rem;
	margin-top: .9rem;
	text-align: center;
	color: #4285f4
}

.pop_wrap .pop_content .list_wrap {
	text-align: left;
	margin: 0 auto;
	width: 7.32rem;
	margin-left: .45rem
}

.pop_wrap .pop_content .list_wrap .item {
	display: inline-block;
	margin-bottom: .333333rem;
	margin-right: .6599995rem;
	width: 1.666667rem;
	height: .666667rem;
	border: 1px solid #4285f4;
	border-radius: .053333rem;
	text-align: center;
	line-height: .666667rem;
	font-size: .373333rem;
	color: #4285f4
}

.pop_wrap .pop_content .list_wrap .item.active {
	background-color: #4285f4;
	color: #fff
}

.pop_wrap .pop_content .list_wrap .item.vertical {
	width: 4.266667rem;
	height: .8rem;
	line-height: .8rem;
	margin: 0 auto .333333rem
}

.popup-img {
	background: url(https://static.changingedu.com/static/assets/static/front/images/teacher_register/fail.9364f7b484d2f265945851eccd926a1d.png) no-repeat;
	display: block;
	width: .933333rem;
	height: .933333rem;
	background-size: .933333rem;
	margin: .5rem auto;
	margin-bottom: .3rem
}

.popup-contents.toast-qingqing {
	box-sizing: border-box;
	position: fixed;
	top: 45%;
	width: 50%;
	left: 50%;
	margin-left: -25%;
	margin-top: -10%;
	line-height: .466667rem;
	text-align: center;
	background: rgba(3,3,3,.7);
	color: #fff;
	padding: .133333rem;
	font-size: .426rem;
	z-index: 999;
	box-shadow: 0 0 .133333rem rgba(0,0,0,.8);
	height: 3.2rem
}

.popup-contents.toast-qingqing .popup-main {
	margin: 0
}

.popup-contents.toast-qingqing .popup-info {
	margin: 0 auto;
	padding: 0;
	width: 60%
}

.popup-contents.toast-qingqing .toast-message {
	background: #333
}
</style>
