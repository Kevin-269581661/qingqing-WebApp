<template>
<div class="choose_lesson_live_wrap js_choose_lesson_new_wrap">
    <div class="icon-close" id="closeChoose">
        <em></em>
    </div>
    <div class="com_pad_h ovh">
        <div class="swiper-wrapper">
            <div class="css_swipe_wrap swiper-slide">
                <div class="teacher_infos">
                    <div class="teacher_img">
                        <img src="https://img.changingedu.com/headimg/201708/6c/cp_250x250/6cac2e0e-417b-4c2f-a066-e21b77b92643.jpg.webp" alt="">
                    </div>
                    <div class="teacher_name">高中数学陈老师</div>
                </div>
            </div>
            <div class="css_swipe_wrap swiper-slide">
                <div class="title">适用年级</div>
                <div class="grade_wrap">
                    <div class="grade_item active" data-id="7" data-courseid="2" data-course_name="数学">
                        初一
                    </div>
                    <div class="grade_item " data-id="8" data-courseid="2" data-course_name="数学">
                        初二
                    </div>
                    <div class="grade_item " data-id="9" data-courseid="2" data-course_name="数学">
                        初三
                    </div>
                    <div class="grade_item " data-id="10" data-courseid="2" data-course_name="数学">
                        高一
                    </div>
                    <div class="grade_item " data-id="11" data-courseid="2" data-course_name="数学">
                        高二
                    </div>
                    <div class="grade_item " data-id="12" data-courseid="2" data-course_name="数学">
                        高三
                    </div>
                    <!-- <div class="grade_item active">
                 一年级
             </div>
             <div class="grade_item">二年级</div>
             <div class="grade_item">三年级</div>
             <div class="grade_item">四年级</div>
             <div class="grade_item">五年级</div>
             <div class="grade_item">六年级</div>
             <div class="grade_item">初一</div>
             <div class="grade_item">初二</div>
             <div class="grade_item">初三</div>
             <div class="grade_item">高一</div>
             <div class="grade_item">高二</div>
             <div class="grade_item">高三</div> -->

                </div>
            </div>
            <div class="css_swipe_wrap swiper-slide hidden">
                <div class="title">授课方式</div>
                <div class="site_type_wrap">
                     <div class="site_item js_live active" data-type="price_for_living" data-price="254"><p>在线授课</p><p>¥254/小时</p></div>
                    <!-- <div class="site_item">
                 <p>老师上门</p>
                 <p>￥100/小时</p>
             </div>
             <div class="site_item">
                 <p>学生上门</p>
                 <p>￥100/小时</p>
             </div>
             <div class="site_item">
                 <p>在线授课</p>
                 <p>￥150/小时</p>
             </div> -->
                </div>
            </div>
             
            <div class="css_swipe_wrap swiper-slide">
                <div class="title">
                    <p>优惠套餐</p>
                </div>
                <div class="pkg_course_wrap">
                    <div class="pkg_item js_buy_online js_online_package" data-total_hours="56" data-online_pay_hours="56" data-offline_pay_hours="0" data-online_free_hours="4" data-offline_free_hours="0" data-id="1464702">
                        <div>买56课时送4课时</div>
                    </div>
                    <div class="pkg_item ignore_calculate">
                        <div>有钱任性 不使用优惠</div>
                    </div>
                </div>
            </div>
             
            <div class="css_swipe_wrap swiper-slide">
                <p class="fazhi_info">课时费将根据老师时间剩余情况进行调整
                    <em id="link_to_fazhi"></em>
                </p>
            </div>
            <!-- <div class="title">
           <p>优惠课程包</p>
           <p>线下课（老师上门&学生上门2小时/次） 线上课（在线授课1小时/次）</p>
        </div>
        <div class="pkg_course_wrap">
           <div class="pkg_item">
               <div>线上+线上包（共计11小时）</div>
               <div>购买5次线下课 送1次线上课</div>
           </div>
           <div class="pkg_item">
               <div>线上+线下包（共计12小时）</div>
               <div>购买5次线下课 送1次线上课</div>
           </div>
           <div class="pkg_item">
               <div>线下线上组合包（共计23小时）</div>
               <div>
                   <p>购买5次线下课 送1次线下课</p>
                   <p>购买5次线上课 送1次线上课</p>
               </div>
           </div>
        </div> -->
            <!--<div class="css_swipe_wrap swiper-slide">-->
            <!--<div class="notice">-->
            <!--注：老师上门&学生上门 2小时/次；在线授课1小时/次-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
    
    <div class="price_wrap_ordinary cf">
        <div class="price_ord"><div class="one">价格：<em id="lesson_money" style="color:#FF763A;">¥<span class="price-num">254</span>/小时</em></div></div>
        <div class="buy_now " id="confirmBtn">立即购买</div>
    </div>
      
</div>
</template>
<script>
  import { Navbar, TabItem } from "mint-ui";
  export default {
    data() {
      return {
      
       

      };
    },
    methods: {
      //点击老师信息，跳转详情


    },
    created() {
    
    },
    mounted() { },
    components: {},
    watch: {}
  };
</script>
<style scoped>


.choose_lesson_live_wrap {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	font-size: 16px;
	background: #fff;
	color: #999;
	z-index: 101
}

.choose_lesson_live_wrap * {
	box-sizing: border-box
}

.choose_lesson_live_wrap .origin_price {
	color: #bbb;
	font-size: 12px;
	text-decoration: line-through;
	font-weight: 400;
	margin-left: .2rem
}

.choose_lesson_live_wrap .teacher_infos {
	width: 100%;
	height: 1.6667rem;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-moz-box-pack: start;
	box-pack: start;
	-webkit-justify-content: start;
	-moz-justify-content: start;
	-ms-justify-content: start;
	-o-justify-content: start;
	justify-content: start;
	-ms-flex-pack: start;
	-webkit-box-align: center;
	-moz-box-align: center;
	box-align: center;
	-webkit-align-items: center;
	-moz-align-items: center;
	-ms-align-items: center;
	-o-align-items: center;
	align-items: center;
	-ms-flex-align: center;
	border-bottom: 1px solid #e6e6e6
}

.choose_lesson_live_wrap .teacher_infos .teacher_img {
	width: 1rem;
	height: 1rem;
	border-radius: 5px;
	overflow: hidden;
	position: relative
}

.choose_lesson_live_wrap .teacher_infos .teacher_img img {
	width: 100%;
	height: auto
}

.choose_lesson_live_wrap .teacher_infos .teacher_name {
	font-size: .4rem;
	color: #333;
	margin-left: 5px
}

.choose_lesson_live_wrap .swiper-slide img {
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	-ms-transform: translate(0);
	-webkit-transform: translate(0);
	-moz-transform: translate(0);
	transform: translate(0);
	position: relative;
	left: 0;
	top: 0
}

.choose_lesson_live_wrap .title {
	padding-top: .333333rem;
	padding-bottom: .333333rem;
	font-size: 16px;
	margin-top: 0;
	color: #666
}

.choose_lesson_live_wrap .title p {
	margin: 0;
	line-height: 1.5;
	font-size: 16px
}

.choose_lesson_live_wrap .css_swipe_wrap {
	background: #fff;
	text-align: left
}

.choose_lesson_live_wrap .css_swipe_wrap.swiper-slide {
	width: 100%;
	height: auto;
	-webkit-flex-shrink: 0;
	-ms-flex: 0 0 auto;
	flex-shrink: 0
}

.choose_lesson_live_wrap .css_swipe_wrap>p.fazhi_info {
	position: relative;
	font-size: 12px;
	color: #9f9f9f;
	margin: 8px 0;
	padding-left: .333333rem;
	padding-right: .333333rem
}

.choose_lesson_live_wrap .css_swipe_wrap>p.fazhi_info>em {
	position: relative;
	display: inline-block;
	top: .05rem;
	margin-left: 5px;
	width: .3333rem;
	height: .3333rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/icon_fz_wh@3x.a02f1fe5382fb0590b2ede4878ac45ee.png) no-repeat;
	background-size: 100% 100%
}

.choose_lesson_live_wrap .swiper-wrapper {
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	-ms-flex-direction: column;
	-webkit-flex-direction: column;
	flex-direction: column
}

.choose_lesson_live_wrap .mtR40 {
	margin-top: .533333rem
}

.choose_lesson_live_wrap .grade_wrap,.choose_lesson_live_wrap .site_type_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-lines: multiple;
	-moz-box-lines: multiple;
	box-lines: multiple;
	-webkit-flex-wrap: wrap;
	-moz-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	font-size: 14px
}

.choose_lesson_live_wrap .site_item {
	padding: .2rem .266667rem;
	line-height: 1.5;
	border-radius: 5px;
	border: 1px solid #dedede;
	text-align: center;
	color: #666;
	margin-right: .333333rem;
	margin-bottom: .333333rem;
	position: relative;
	z-index: 100
}

.choose_lesson_live_wrap .site_item.active {
	border: 1px solid #ff9f0f;
	background: #fff4e5;
	color: #ff6e10
}

.choose_lesson_live_wrap .site_item p {
	margin: 0
}

.choose_lesson_live_wrap .pengyoutuan_price_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-lines: multiple;
	-moz-box-lines: multiple;
	box-lines: multiple;
	-webkit-flex-wrap: wrap;
	-moz-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	font-size: 14px
}

.choose_lesson_live_wrap .t_item {
	padding: .2rem .266667rem;
	line-height: 1.5;
	border-radius: 5px;
	border: 1px solid #dedede;
	text-align: center;
	color: #666;
	margin-right: .333333rem;
	margin-bottom: .333333rem
}

.choose_lesson_live_wrap .t_item.active {
	border: 1px solid #ff9f0f;
	background: #fff4e5;
	color: #ff6e10
}

.choose_lesson_live_wrap .t_item p {
	margin: 0
}

.choose_lesson_live_wrap .grade_item {
	width: 1.65333rem;
	height: .8rem;
	line-height: .8rem;
	vertical-align: middle;
	border-radius: 5px;
	border: 1px solid #dedede;
	text-align: center;
	color: #666;
	margin-right: .333333rem;
	margin-bottom: .333333rem
}

.choose_lesson_live_wrap .grade_item.active {
	border: 1px solid #ff9f0f;
	background: #fff4e5;
	color: #ff6e10
}

.choose_lesson_live_wrap .pkg_item {
	width: 90%;
	height: 1rem;
	border-radius: 5px;
	border: 1px solid #dedede;
	padding-left: .333333rem;
	padding-right: .333333rem;
	margin-bottom: .333333rem;
	line-height: 1.2;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-moz-box-pack: justify;
	box-pack: justify;
	-webkit-justify-content: space-between;
	-moz-justify-content: space-between;
	-ms-justify-content: space-between;
	-o-justify-content: space-between;
	justify-content: space-between;
	-ms-flex-pack: justify;
	font-size: .4rem;
	color: #666
}

.choose_lesson_live_wrap .pkg_item.active {
	border: 1px solid #ff9f0f;
	background: #fff4e5;
	color: #ff6e10
}

.choose_lesson_live_wrap .pkg_item.disable {
	background: #f0f0f0
}

.choose_lesson_live_wrap .pkg_item.disable.js_online_package.teacher_owner {
	display: none
}

.choose_lesson_live_wrap .pkg_item p {
	margin: 0
}

.choose_lesson_live_wrap .pkg_item div {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center
}

.choose_lesson_live_wrap .item.item-pad {
	padding-top: .266667rem;
	margin-top: 0
}

.choose_lesson_live_wrap .item.item-pengyoutuan {
	display: none
}

.choose_lesson_live_wrap .item .course-item-wrap {
	width: 2.03333rem;
	color: #666
}

.choose_lesson_live_wrap .item .course-item-wrap,.choose_lesson_live_wrap .item .fake-div {
	display: block;
	height: 1rem;
	line-height: 1rem;
	border-radius: 5px;
	font-size: 14px;
	text-align: center;
	background-color: #e6e6e6
}

.choose_lesson_live_wrap .item .fake-div {
	width: 2.33333rem
}

.choose_lesson_live_wrap .item .free_audition_btn {
	width: 4.66667rem
}

.choose_lesson_live_wrap .item .free_audition_btn.active {
	border: 1px solid #ff9f0f;
	background: #fff4e5;
	color: #ff6e10
}

.choose_lesson_live_wrap .item span {
	display: block;
	height: 1rem;
	line-height: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 2.93333rem;
	float: left;
	font-size: 14px;
	text-align: center
}

.choose_lesson_live_wrap .item span b,.choose_lesson_live_wrap .item span i {
	font-weight: 400;
	font-style: normal
}

.choose_lesson_live_wrap .item .free_audition {
	width: 4.66667rem;
	text-align: center;
	padding-left: 0;
	padding-right: 0
}

.choose_lesson_live_wrap .item .active {
	border: 1px solid #f90;
	background: #f90;
	color: #fff
}

.choose_lesson_live_wrap .price_wrap_ordinary {
	margin-top: .133333rem;
	width: 100%;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-moz-box-align: center;
	box-align: center;
	-webkit-align-items: center;
	-moz-align-items: center;
	-ms-align-items: center;
	-o-align-items: center;
	align-items: center;
	-ms-flex-align: center;
	border-top: 1px solid #e0e0e0
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord {
	-webkit-box-flex: 25;
	-moz-box-flex: 25;
	box-flex: 25;
	-webkit-flex: 25;
	-moz-flex: 25;
	-ms-flex: 25;
	flex: 25;
	font-size: 18px;
	padding-left: .333333rem;
	color: #666;
	line-height: 1.33333rem
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord span {
	color: #f60
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord .big {
	font-size: 20px
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord .small {
	font-size: 14px
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord .service_charge,.choose_lesson_live_wrap .price_wrap_ordinary .price_ord b.service_charge {
	color: #999;
	font-size: 12px;
	margin-left: .2rem;
	text-decoration: none
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord.two-line {
	line-height: normal;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: distribute;
	-moz-box-pack: distribute;
	box-pack: distribute;
	-webkit-justify-content: space-around;
	-moz-justify-content: space-around;
	-ms-justify-content: space-around;
	-o-justify-content: space-around;
	justify-content: space-around;
	-ms-flex-pack: distribute;
	font-size: 14px
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord.two-line .one {
	line-height: normal
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord.two-line .one #lesson_money {
	color: #f60;
	font-weight: 400
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ord.two-line .two {
	line-height: normal
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_now {
	font-size: 14px;
	margin-right: .4rem;
	color: #f60;
	float: left
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_ {
	float: left;
	font-size: 14px
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_before {
	float: left;
	font-size: 12px;
	margin-right: .133333rem;
	position: relative;
	top: 2px;
	color: #999
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_before>.del_price {
	text-decoration: line-through;
	margin-right: .15rem
}

.choose_lesson_live_wrap .price_wrap_ordinary .price_before>span {
	color: #999
}

.choose_lesson_live_wrap .price_wrap_ordinary .buy_now {
	-webkit-box-flex: 13;
	-moz-box-flex: 13;
	box-flex: 13;
	-webkit-flex: 13;
	-moz-flex: 13;
	-ms-flex: 13;
	flex: 13;
	background-color: #f60;
	width: 3rem;
	height: 1.2rem;
	line-height: 1.2rem;
	background: linear-gradient(137deg,#ff9f2d,#fd8018);
	border-radius: .1066rem;
	font-size: 20px;
	margin-right: .333rem;
	color: #fff;
	text-align: center
}

.choose_lesson_live_wrap .notice {
	font-size: 12px;
	padding-left: .333333rem;
	padding-right: .333333rem;
	line-height: .666667rem;
	vertical-align: middle
}

.choose_lesson_live_wrap .icon-close {
	width: 1rem;
	height: 1rem;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 999
}

.choose_lesson_live_wrap .icon-close em {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/535/icon_close.95ddaff5ede09909b16e60295bc38bb2.png) no-repeat;
	background-size: 100% 100%;
	width: .5rem;
	height: .5rem;
	left: 50%;
	top: 50%;
	margin-left: -.25rem;
	margin-top: -.25rem;
	position: absolute;
	z-index: 3
}

.choose_lesson_live_wrap .pkg_final_price {
	margin-right: .6rem
}

.choose_lesson_live_wrap .pkg_final_price b {
	font-style: normal;
	text-decoration: line-through;
	color: #999;
	margin-right: 5px;
	font-size: .346rem;
	font-weight: 400
}

.choose_lesson_live_wrap .pkg_final_price b.service_charge {
	color: #999;
	font-size: 12px;
	margin-left: .2rem;
	text-decoration: none
}

.choose_lesson_live_wrap .pkg_final_price em {
	color: #f60;
	margin-right: 5px
}

.choose_lesson_live_wrap .info_package_wrap {
	padding-top: .333333rem;
	border-bottom: 1px solid #e6e6e6
}

.choose_lesson_live_wrap .info_package_wrap .t {
	font-size: 16px;
	padding-bottom: .333333rem;
	color: #333
}

.choose_lesson_live_wrap .info_package_wrap .info {
	color: #999;
	font-size: 14px;
	padding-bottom: .333333rem;
	border-bottom: 1px solid #e6e6e6
}

.is_winter_package {
	background: #f90!important
}

.activity_stock {
	clear: both;
	display: block;
	margin-bottom: .2rem;
	font-size: 13px;
	color: #ff4d28
}

.recommend_list {
	font-size: 14px;
	background: #fff
}

.recommend_list .title {
	font-size: 16px;
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	vertical-align: middle;
	padding-left: .333333rem
}

.recommend_list .icon {
	float: left;
	height: 20px;
	width: 20px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	border-radius: 4px;
	font-size: 11px;
	margin-left: 3px;
	position: relative;
	top: 3px
}

.recommend_list .icon_tuan {
	background: #f60;
	color: #fff
}

.recommend_list .icon_live {
	background: #23cd77;
	color: #fff;
	width: auto;
	padding-left: 3px;
	padding-right: 3px
}

.recommend_list .icon_offprice {
	background: #f90;
	color: #fff
}

.recommend_list .icon_hot {
	background: #ff4966;
	color: #fff
}

.recommend_list .tags {
	color: #666
}

.recommend_list .tags em {
	display: inline-block;
	width: 12px;
	height: 12px;
	line-height: 12px;
	vertical-align: middle;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/540/icon_ok.31686c305742996a23fb798216ecb373.png) no-repeat;
	background-size: 100% 100%;
	margin-right: .133333rem
}

.recommend_list h3 {
	margin: 0;
	font-size: 16px;
	color: #333;
	position: relative;
	height: 22px
}

.recommend_list h3 .t_name {
	max-width: 5rem;
	float: left;
	vertical-align: top;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.recommend_list h3 .is_trm {
	padding-left: 65px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trm.0a537858de63ae81c49f12b5b18ad999.png) no-repeat;
	background-size: auto 14px;
	background-position: 0
}

.recommend_list h3 .is_trmt {
	padding-left: 65px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trmt.4ca4cf1be0769379f340a5877f769899.png) no-repeat;
	background-size: auto 14px;
	background-position: 0
}

.recommend_list .item {
	border-top: 1px solid #f0f0f0;
	padding: .333333rem
}

.recommend_list .l {
	width: 2.05333rem;
	height: 2.05333rem;
	float: left;
	overflow: hidden
}

.recommend_list .l img {
	width: 100%;
	border-radius: 5px;
	height: auto
}

.recommend_list .price {
	color: #f60;
	right: 0;
	bottom: 0;
	position: absolute;
	vertical-align: bottom
}

.recommend_list .price span {
	font-size: 12px
}

.recommend_list .star_icons {
	overflow: hidden
}

.recommend_list .star_icons .star-wrap {
	float: left;
	display: inline-block;
	width: 2.13333rem;
	height: .533333rem;
	line-height: .533333rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/540/star_normal.072ba3ec917492632db30616d115ba18.png) no-repeat;
	background-size: 100% 100%;
	margin: .08rem .133333rem .08rem -.0533333rem
}

.recommend_list .star_icons .star-wrap .abs {
	position: absolute;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/540/star_full.ac3fd152688e71479a8e16e93eed3256.png) no-repeat;
	background-size: 2.13333rem .533333rem;
	height: .533333rem
}

.recommend_list .distance {
	position: absolute;
	right: 0;
	top: 0
}

.recommend_list .recommend_reason {
	position: relative;
	height: 18px
}

.recommend_list .recommend_reason span {
	position: absolute;
	left: 0;
	top: 0;
	display: inline-block;
	padding: 0 10px;
	border-radius: 10px;
	border: 1px solid #23cd77;
	color: #23cd77;
	font-size: 12px
}

.recommend_list .r {
	margin-left: 2.33333rem
}

.package_info_notice {
	width: 100%;
	vertical-align: middle;
	padding-left: .3333rem;
	box-sizing: border-box;
	background: #fff;
	position: relative
}

.package_info_notice .icon_offsale {
	position: absolute;
	width: 1rem;
	height: 1rem;
	left: 0;
	top: 0
}

.package_info_notice .icon_offsale>div {
	position: absolute;
	width: .48rem;
	height: .48rem;
	left: .333333rem;
	top: 50%;
	margin-top: -.24rem;
	color: #fff;
	border-radius: 5px;
	background: #f60;
	line-height: .48rem;
	vertical-align: middle;
	text-align: center;
	font-size: 12px
}

.package_info_notice .package_notice_title {
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	padding-left: .7rem;
	box-sizing: border-box
}

.package_info_notice .package_notice_title .is_shujia_package {
	padding-right: 1rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/570/icon_teacherlist_jxkc.23e21978bfc1e273484ba264f18ef6ea.png) no-repeat;
	background-size: auto 14px;
	background-position: 100%
}

.package_info_notice .package_notice {
	width: 100%;
	margin-bottom: .333rem
}

.package_info_notice .package_notice span {
	box-sizing: border-box;
	margin-left: .7rem;
	display: inline-block;
	max-width: 8rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
}

.package_info_notice .icon_more {
	position: absolute;
	top: 0;
	width: .5rem;
	height: 100%;
	right: .2rem
}

.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.page-pengyoutuan {
	background: #f0f0f0
}

.whole_container {
	width: 100%;
	min-height: 100%;
	padding-bottom: 1.0133333rem
}

.header_wrap {
	position: relative;
	border-top: .053333rem solid #e6e6e6
}

.header_wrap,.header_wrap .banner {
	width: 100%;
	height: 4.66667rem
}

.header_wrap .banner img {
	width: 100%;
	height: 100%
}

.header_wrap .banner .question {
	position: absolute;
	right: 0;
	bottom: .213333rem;
	width: 2.613333rem;
	height: .666667rem;
	line-height: .666667rem;
	background-color: #fd822f;
	opacity: .8;
	color: #fff;
	text-align: center;
	border-top-left-radius: .333333rem;
	border-bottom-left-radius: .333333rem
}

.content_wrap {
	width: 100%;
	position: relative;
	background-color: #f0f0f0;
	padding-bottom: .32rem
}

.text_prompt {
	width: 100%;
	height: 1.04rem;
	line-height: 1.04rem;
	padding-left: .373333rem;
	color: #6c6c6c;
	font-size: 14px
}

.lists_wrap {
	width: 100%;
	padding-left: .32rem;
	padding-right: .32rem
}

.list_item {
	width: 100%;
	background-color: #fff;
	border-radius: .133333rem;
	margin-bottom: .32rem
}

.list_item .infos_up {
	padding-top: .16rem;
	padding-left: .32rem;
	padding-right: .32rem;
	border-bottom: .053333rem solid #f9f9f9
}

.infos_up .course {
	height: .64rem;
	line-height: .64rem;
	font-size: 16px;
	color: #2f2f2f;
	font-weight: 700;
	position: relative
}

.infos_up .course .icon {
	display: inline-block;
	padding-left: .2rem;
	padding-right: .2rem;
	line-height: .5rem;
	text-align: center;
	background-color: #f90;
	border-radius: .106667rem;
	color: #fff;
	font-size: 10px;
	position: absolute;
	top: .32rem;
	margin-top: -.25rem;
	margin-left: .213333rem
}

.infos_up .contact {
	line-height: .56rem;
	color: #666;
	font-size: 13px
}

.infos_up .cource_nums,.infos_up .location {
	line-height: .56rem;
	color: #a3a3a3;
	font-size: 13px
}

.infos_up .cource_nums {
	height: .56rem
}

.infos_down {
	width: 100%;
	height: 1.013333rem;
	border-bottom-left-radius: .133333rem;
	border-bottom-right-radius: .133333rem
}

.infos_down .price {
	float: left;
	text-align: center;
	width: 5.68rem;
	height: 1.013333rem
}

.infos_down .price .price_before {
	height: .986667rem;
	line-height: .986667rem;
	color: #979797;
	text-decoration: line-through
}

.infos_down .price .price_ {
	height: .986667rem;
	line-height: .986667rem;
	color: #7a7a7a;
	font-size: 16px;
	font-weight: 700
}

.infos_down .price .price_now {
	height: .986667rem;
	line-height: .986667rem;
	color: #ff6000;
	font-size: 16px
}

.infos_down .go {
	float: right;
	width: 3.666667rem;
	height: 1.013333rem;
	line-height: 1.013333rem;
	text-align: center;
	background-color: #f60;
	border-bottom-right-radius: .133333rem;
	font-size: 15px;
	color: #fff
}

.footer_wrap {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1.333333rem;
	line-height: 1.333333rem;
	text-align: center;
	color: #fff;
	font-size: 18px;
	z-index: 5;
	background-color: #f90
}

.pengyoutuan_introduce {
	font-size: 14px;
	background: #fff
}

.pengyoutuan_introduce.fixed_bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1001
}

.pengyoutuan_introduce .p_title {
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	vertical-align: middle;
	text-align: center
}

.pengyoutuan_introduce .icon_close {
	position: absolute;
	top: 0;
	right: 0;
	width: .8rem;
	height: .8rem;
	background: url(https://static.changingedu.com/static/assets/common/images/common_icons/icon_close.95ddaff5ede09909b16e60295bc38bb2.png) no-repeat;
	background-size: 50% 50%;
	background-position: 50%
}

.pengyoutuan_introduce .item_wrap {
	padding-left: .6rem;
	padding-bottom: .333333rem
}

.pengyoutuan_introduce .item {
	position: relative;
	padding-left: .666667rem;
	line-height: .746667rem;
	vertical-align: middle;
	padding-right: .333333rem
}

.pengyoutuan_introduce .item .icon {
	position: absolute;
	left: 0;
	top: 0;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center;
	height: .746667rem
}

.pengyoutuan_introduce .item .icon div {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #f60
}

.pengyoutuan_introduce .confirm_btn {
	width: 100%;
	height: 1.33333rem;
	line-height: 1.33333rem;
	color: #fff;
	font-size: 18px;
	text-align: center;
	vertical-align: middle;
	background: #f60
}

.common-pad_web {
	padding-top: 2.8rem
}

.comment-wrap .comment_web_wrap .tag-grade {
	position: static
}

.comment_native_header {
	height: 1.4rem;
	line-height: 1.4rem;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	font-size: 18px;
	background: #fff;
	z-index: 5;
	border-bottom: 1px solid #f0f0f0;
	color: #999;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex
}

.comment_native_header.bar_web {
	position: static
}

.comment_native_header>div {
	-webkit-box-flex: 1;
	-moz-box-flex: 1;
	box-flex: 1;
	-webkit-flex: 1;
	-moz-flex: 1;
	-ms-flex: 1;
	flex: 1
}

.comment_native_header>div.active .tag_item {
	color: #23cd77;
	border-bottom: 1px solid #23cd77
}

.comment_native_header .tag_item {
	width: 2rem;
	height: 1.4rem;
	line-height: 1.4rem;
	margin-left: auto;
	margin-right: auto;
	vertical-align: middle;
	text-align: center;
	min-width: 100px
}

.new_m_header .header .save_back {
	position: absolute;
	right: 0;
	top: 0;
	width: 1.2rem;
	font-size: 14px;
	height: 1.4rem;
	line-height: 1.4rem;
	vertical-align: middle;
	text-align: center;
	color: #666
}

.pyt_share_notice_wrap {
	color: #666;
	font-size: 14px
}

.pyt_share_notice_wrap .title {
	font-size: 16px;
	height: .866667rem;
	line-height: .866667rem;
	color: #333;
	vertical-align: middle
}

.personal_tags_wrap {
	font-size: 14px;
	color: #999
}

.personal_tags_wrap h3 {
	margin: 0;
	font-size: 15px;
	color: #333;
	padding-bottom: .226667rem
}

.personal_tags_wrap .left {
	width: .413333rem;
	height: .4rem;
	float: left;
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: -3.38667rem -3.88rem;
	background-size: 5.73333rem 5.30667rem;
	position: relative;
	top: 3px
}

.personal_tags_wrap .right {
	margin-left: .56rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	color: #28ce7a
}

.personal_tags_wrap .right.line3 {
	-webkit-line-clamp: 3;
	margin-bottom: .266667rem
}

.ptR20 {
	padding-top: .266667rem
}

.school_tag_page {
	background: #fff
}

.cert-example .school_item {
	height: 1.33333rem;
	line-height: 1.33333rem;
	vertical-align: middle;
	padding-left: .333333rem;
	font-size: 16px;
	color: #333;
	border-bottom: 1px solid #f0f0f0
}

body {
	height: 100%;
	background-color: #f0f0f0
}

.info_package,body {
	width: 100%
}

.info_package .course_package_items {
	width: 100%;
	box-sizing: border-box;
	padding: .2rem .3333rem;
	position: relative;
	background-color: #fff;
	margin-bottom: .3333rem
}

.info_package .course_package_items .package_items_wrap {
	width: 100%;
	height: .74rem;
	line-height: .74rem
}

.info_package .course_package_items .package_items_wrap span {
	border-left: 3px solid #24cd77;
	padding-left: 5px;
	font-size: .38rem;
	color: #393939
}

.info_package .course_package_items .package_items_wrap em.online_pakeage {
	font-size: .3rem;
	color: #24cd77;
	border: .02rem solid #24cd77;
	border-radius: 5px;
	padding: 0 2px
}

.info_package .course_package_items .package_items_wrap .is_gf {
	padding-right: .75rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_teacherpage_gf@2x.64ac12d87b11692632a918f753b4f0ee.png) no-repeat;
	background-size: .6667rem .35rem;
	background-position: 100%
}

.info_package .course_package_items .official_icon {
	position: absolute;
	top: 0;
	right: 0;
	width: .73333rem;
	height: .73333rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_guanfang.61edcc7e20577ff94f2d37f3ab863eeb.png) no-repeat;
	background-size: 100%
}

.info_package .course_package_items .package_items_main {
	width: 100%;
	position: relative
}

.info_package .course_package_items .package_items_main .is_official {
	width: 100%;
	height: .74rem;
	line-height: .74rem;
	box-sizing: border-box;
	padding-left: .28rem
}

.info_package .course_package_items .package_items_main .is_official span {
	padding-left: .62rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_official.4483638bd29e2c6d7c44917e19ac576a.png) no-repeat;
	background-size: .6rem 100%;
	font-size: .38rem;
	color: #393939
}

.info_package .course_package_items .package_items_main .course_package_times {
	width: 100%;
	height: .64rem;
	line-height: .64rem;
	box-sizing: border-box;
	padding: 0 .28rem;
	font-size: .38rem;
	color: #5a5a5a;
	position: relative
}

.info_package .course_package_items .package_items_main .course_package_times .course_package_price {
	height: 100%;
	position: absolute;
	right: .5rem;
	top: 0;
	color: #ff8736
}

.info_package .course_package_items .package_items_main .course_package_times .course_package_price .old_price {
	color: #9b9b9b;
	text-decoration: line-through
}

.info_package .course_package_items .package_items_main .icon_more {
	position: absolute;
	width: .5rem;
	height: 100%;
	right: -.18rem;
	top: 0
}

.info_package .course_package_items .package_items_main .icon_more>div {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -.08rem;
	height: .28rem;
	width: .173333rem;
	margin-top: -.14rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/icons/icon-btn-more.f5774966148596f37a1fcac291bd4b76.png) no-repeat;
	background-size: 100% 100%
}

.intro_info_wrap .official_packages_wrap {
	width: 100%;
	box-sizing: border-box;
	padding-top: .347222rem;
	background-color: #fff;
	z-index: 10
}

.intro_info_wrap .official_packages_wrap .course_package_items {
	width: 100%;
	background-color: #fff;
	box-sizing: border-box;
	padding-left: .347222rem;
	border-bottom: 1px solid #f0f0f0
}

.intro_info_wrap .official_packages_wrap .course_package_items .package_items_wrap {
	width: 100%;
	height: .74rem;
	line-height: .74rem
}

.intro_info_wrap .official_packages_wrap .course_package_items .package_items_wrap span {
	display: inline-block;
	width: 100%;
	height: .45rem;
	line-height: .45rem;
	border-left: 3px solid #21cd76;
	box-sizing: border-box;
	padding-left: 10px;
	font-size: .45rem;
	color: #292929
}

.intro_info_wrap .official_packages_wrap .course_package_items .package_items_wrap em.online_pakeage {
	font-size: .3rem;
	color: #24cd77;
	border: .02rem solid #24cd77;
	border-radius: 5px;
	padding: 0 2px
}

.intro_info_wrap .official_packages_wrap .course_package_items .is_official {
	width: 100%;
	height: .74rem;
	line-height: .74rem;
	box-sizing: border-box;
	padding-left: .28rem
}

.intro_info_wrap .official_packages_wrap .course_package_items .is_official span {
	padding-left: .62rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_official.4483638bd29e2c6d7c44917e19ac576a.png) no-repeat;
	background-size: .6rem 100%;
	font-size: .38rem;
	color: #393939
}

.intro_info_wrap .official_packages_wrap .course_package_items .course_package_times {
	width: 100%;
	height: .64rem;
	line-height: .64rem;
	box-sizing: border-box;
	font-size: .38rem;
	padding-left: 10px;
	color: #5a5a5a;
	position: relative
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count {
	width: 100%;
	box-sizing: border-box;
	padding-left: 10px
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count .course_package_price {
	width: 100%;
	color: #ff8736;
	box-sizing: content-box;
	padding-bottom: 5px
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count .course_package_price .package_price {
	padding-right: .3rem
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count .course_package_price .package_price span {
	color: #5a5a5a
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count .course_package_price .pyt_price {
	padding-left: .3rem;
	border-left: 1px solid #ccc
}

.intro_info_wrap .official_packages_wrap .course_package_items .price_count .course_package_price .pyt_price span {
	color: #5a5a5a
}

.intro_info_wrap .official_packages_wrap .ziliao {
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0 5px 10px;
	overflow: hidden;
	border-bottom: 1px solid #f0f0f0
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_title {
	box-sizing: border-box;
	padding-left: .347222rem;
	font-size: .45rem;
	color: #333
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list {
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	padding-left: .347222rem;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-moz-box-pack: start;
	box-pack: start;
	-webkit-justify-content: flex-start;
	-moz-justify-content: flex-start;
	-ms-justify-content: flex-start;
	-o-justify-content: flex-start;
	justify-content: flex-start;
	-ms-flex-pack: start
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list .item {
	font-size: .32rem;
	margin-right: .25rem;
	color: #666;
	float: left;
	height: 1rem;
	line-height: 1rem;
	vertical-align: middle
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap {
	width: .5rem;
	position: relative;
	height: 1rem;
	line-height: 1rem
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap em {
	width: .32rem;
	height: .32rem;
	position: absolute;
	top: 50%;
	margin-top: -.16rem;
	vertical-align: middle;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/icon_teacher_yes@2x.5c30cea0db174dfbdd56de4bebf4035a.png) no-repeat;
	background-size: 100% 100%
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap b {
	width: .4rem;
	height: .4rem;
	position: absolute;
	top: 50%;
	margin-top: -.19rem;
	vertical-align: middle;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/icon_teacher_yes_gary@2x.e783d7b66af5d8a4db97eca3b73729fc.png) no-repeat;
	background-size: 100% 100%
}

.intro_info_wrap .official_packages_wrap .ziliao .ziliao_list .item span {
	line-height: 1rem;
	vertical-align: middle
}

.intro_info_wrap .official_packages_wrap .teacher_message {
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0 5px 10px;
	overflow: hidden
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_title {
	box-sizing: border-box;
	padding-left: .347222rem;
	height: .65rem;
	line-height: .65rem;
	font-size: .45rem;
	color: #333
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main {
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0;
	padding-left: .347222rem;
	position: relative
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_l {
	width: 1.2rem;
	height: 1.2rem;
	position: absolute;
	top: 7px;
	left: .347222rem;
	border-radius: 5px;
	overflow: hidden;
	z-index: 10
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_l img {
	width: 100%;
	height: auto
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r {
	width: 100%;
	box-sizing: border-box;
	padding: 3px 0 3px 1.3rem;
	min-height: 1.2rem;
	position: relative;
	z-index: 9
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_name {
	font-size: .426rem;
	color: #666
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .is_official {
	width: 100%;
	color: #666
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .is_official span {
	padding-left: .62rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_official.4483638bd29e2c6d7c44917e19ac576a.png) no-repeat;
	background-size: .6rem 100%;
	font-size: .38rem
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail {
	font-size: .32rem;
	color: #999
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span {
	margin: 0;
	padding: 0 4px 0 3px;
	border-right: 1px solid #e6e6e6;
	float: left
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span:first-child {
	padding-left: 0
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span:last-child {
	padding-right: 0;
	border-right: none
}

.intro_info_wrap .official_packages_wrap .teacher_message .teacher_main .teacher_r .not_official {
	position: absolute;
	bottom: 0;
	left: 1.3rem
}

.whole_container .official_packages_wrap {
	width: 100%;
	box-sizing: border-box;
	padding-top: .347222rem;
	padding-bottom: .3rem;
	background-color: #fff;
	z-index: 10
}

.whole_container .official_packages_wrap .course_package_items {
	width: 100%;
	background-color: #fff;
	box-sizing: border-box;
	padding-left: .347222rem;
	padding-right: .347222rem
}

.whole_container .official_packages_wrap .course_package_items .package_items_wrap {
	width: 100%;
	height: .74rem;
	line-height: .74rem
}

.whole_container .official_packages_wrap .course_package_items .package_items_wrap span {
	display: inline-block;
	width: 100%;
	height: .45rem;
	line-height: .45rem;
	border-left: 3px solid #21cd76;
	box-sizing: border-box;
	padding-left: 10px;
	font-size: .45rem;
	color: #292929
}

.whole_container .official_packages_wrap .course_package_items .package_items_wrap em.online_pakeage {
	font-size: .3rem;
	color: #24cd77;
	border: .02rem solid #24cd77;
	border-radius: 5px;
	padding: 0 2px
}

.whole_container .official_packages_wrap .course_package_items .is_official {
	width: 100%;
	height: .74rem;
	line-height: .74rem;
	box-sizing: border-box;
	padding-left: .28rem
}

.whole_container .official_packages_wrap .course_package_items .is_official span {
	padding-left: .62rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_official.4483638bd29e2c6d7c44917e19ac576a.png) no-repeat;
	background-size: .6rem 100%;
	font-size: .38rem;
	color: #393939
}

.whole_container .official_packages_wrap .course_package_items .course_introduction {
	width: 100%;
	height: .673rem;
	line-height: .673rem;
	padding: 0 .4rem 0 .333rem;
	font-size: .3733rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/585/icon_student_h5_page_arrow.d749d4e4c1bb9acd3300c55b0115bd5d.png) no-repeat;
	background-size: auto .3733rem;
	background-position: 100%
}

.whole_container .official_packages_wrap .course_package_items .course_package_times {
	font-size: .3733rem;
	color: #5a5a5a;
	position: relative
}

.whole_container .official_packages_wrap .course_package_items .course_package_times,.whole_container .official_packages_wrap .course_package_items .price_count {
	width: 100%;
	height: .673rem;
	line-height: .673rem;
	box-sizing: border-box;
	padding-left: 10px
}

.whole_container .official_packages_wrap .course_package_items .price_count .course_package_price {
	width: 100%;
	color: #ff8736;
	box-sizing: content-box;
	padding-bottom: 5px;
	font-size: .3733rem
}

.whole_container .official_packages_wrap .course_package_items .price_count .course_package_price .package_price {
	padding-left: .3rem;
	text-decoration: line-through;
	color: #999!important
}

.whole_container .official_packages_wrap .course_package_items .price_count .course_package_price .pyt_price span {
	color: #5a5a5a
}

.whole_container .official_packages_wrap .ziliao {
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0 5px 10px;
	overflow: hidden
}

.whole_container .official_packages_wrap .ziliao .ziliao_title {
	width: 100%;
	box-sizing: border-box;
	padding-left: 10px;
	font-size: .45rem;
	color: #292929
}

.whole_container .official_packages_wrap .ziliao .ziliao_title>span {
	display: inline-block;
	width: 100%;
	padding-top: .3rem;
	border-top: 1px solid #f0f0f0
}

.whole_container .official_packages_wrap .ziliao .ziliao_list {
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	padding-left: .347222rem;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-moz-box-pack: start;
	box-pack: start;
	-webkit-justify-content: flex-start;
	-moz-justify-content: flex-start;
	-ms-justify-content: flex-start;
	-o-justify-content: flex-start;
	justify-content: flex-start;
	-ms-flex-pack: start
}

.whole_container .official_packages_wrap .ziliao .ziliao_list .item {
	font-size: .32rem;
	margin-right: .25rem;
	color: #666;
	float: left;
	height: 1rem;
	line-height: 1rem;
	vertical-align: middle
}

.whole_container .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap {
	width: .5rem;
	position: relative;
	height: 1rem;
	line-height: 1rem
}

.whole_container .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap em {
	width: .32rem;
	height: .32rem;
	position: absolute;
	top: 50%;
	margin-top: -.16rem;
	vertical-align: middle;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/icon_teacher_yes@2x.5c30cea0db174dfbdd56de4bebf4035a.png) no-repeat;
	background-size: 100% 100%
}

.whole_container .official_packages_wrap .ziliao .ziliao_list .item .cert_wrap b {
	width: .4rem;
	height: .4rem;
	position: absolute;
	top: 50%;
	margin-top: -.19rem;
	vertical-align: middle;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/icon_teacher_yes_gary@2x.e783d7b66af5d8a4db97eca3b73729fc.png) no-repeat;
	background-size: 100% 100%
}

.whole_container .official_packages_wrap .ziliao .ziliao_list .item span {
	line-height: 1rem;
	vertical-align: middle
}

.whole_container .official_packages_wrap .teacher_message {
	width: 100%;
	box-sizing: border-box;
	padding: 5px .33rem 5px 10px;
	overflow: hidden
}

.whole_container .official_packages_wrap .teacher_message .teacher_title {
	box-sizing: border-box;
	padding-left: .347222rem;
	padding-right: .4rem;
	border-left: 3px solid #21cd76;
	height: .45rem;
	line-height: .45rem;
	font-size: .45rem;
	color: #333;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/585/icon_student_h5_page_arrow.d749d4e4c1bb9acd3300c55b0115bd5d.png) no-repeat;
	background-size: auto .3733rem;
	background-position: 100%
}

.whole_container .official_packages_wrap .teacher_message .teacher_main {
	width: 100%;
	box-sizing: border-box;
	padding-top: .3rem;
	position: relative
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_l {
	width: 1.2rem;
	height: 1.2rem;
	position: absolute;
	top: 7px;
	left: .347222rem;
	border-radius: 5px;
	overflow: hidden;
	z-index: 10
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_l img {
	width: 100%;
	height: auto
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r {
	width: 100%;
	box-sizing: border-box;
	padding-left: .347222rem;
	position: relative;
	z-index: 9
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_name {
	font-size: .426rem;
	color: #666
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .is_official {
	width: 100%;
	color: #666
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .is_official span {
	padding-left: .62rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/555/icon_official.4483638bd29e2c6d7c44917e19ac576a.png) no-repeat;
	background-size: .6rem 100%;
	font-size: .38rem
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail {
	font-size: .3733rem;
	color: #999;
	overflow: hidden
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span {
	margin: 0;
	padding: 0 4px 0 3px;
	border-right: 1px solid #e6e6e6;
	float: left
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span:first-child {
	padding-left: 0
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_detail span:last-child {
	padding-right: 0;
	border-right: none
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .not_official {
	position: absolute;
	bottom: 0;
	left: 1.3rem
}

.whole_container .official_packages_wrap .teacher_message .teacher_main .teacher_r .teacher_address {
	width: 100%;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/585/icon_student_h5_page_arrow.d749d4e4c1bb9acd3300c55b0115bd5d.png) no-repeat;
	background-size: auto .3733rem;
	background-position: 100%;
	padding: 0 .4rem 0 0;
	margin-top: .25rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #999;
	font-size: .3733rem
}

.whole_container .official_packages_wrap .teacher_imgs {
	width: 100%;
	height: 2.333rem;
	box-sizing: border-box;
	padding-left: .677222rem;
	margin-top: .3rem;
	z-index: 9
}

.whole_container .official_packages_wrap .teacher_imgs .img_wrap {
	height: 100%;
	font-size: 0
}

.whole_container .official_packages_wrap .teacher_imgs .img_wrap .item {
	width: 2.333rem;
	height: 2.333rem;
	margin-right: .3rem;
	border-radius: 5px;
	overflow: hidden;
	background-color: #fff
}

.whole_container .official_packages_wrap .teacher_imgs .img_wrap .item img {
	width: 100%;
	height: auto
}

.pop_course_mark {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	background-color: rgba(1,1,1,.6)
}

.fix_home_top {
	position: fixed!important;
	top: 0
}

.pop_course_wrap {
	width: 6.6667rem;
	height: 8rem;
	box-sizing: border-box;
	position: fixed;
	left: 1.6667rem;
	top: 3.5rem;
	background-color: #fff;
	z-index: 100!important;
	padding: .56rem;
	border-radius: 5px
}

.pop_course_wrap .close_btn {
	width: .6rem;
	height: .6rem;
	position: absolute;
	top: -.3rem;
	right: -.3rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/585/icon_student_h5_toast_close_.4cfaac8c1dedd2b3e13b5bd806e8bdb5.png) no-repeat;
	background-size: .6rem;
	background-position: 50%
}

.pop_course_wrap .pop_course_count {
	width: 100%;
	height: 100%;
	overflow: scroll
}

.pop_course_wrap .pop_course_count .pop_course_introduce {
	width: 100%
}

.pop_course_wrap .pop_course_count .pop_course_introduce .introduce_title {
	font-size: .4rem;
	color: #333
}

.pop_course_wrap .pop_course_count .pop_course_introduce .introduce_content {
	font-size: .373rem;
	color: #666;
	margin-top: .266rem
}

.pop_course_wrap .pop_course_count .course_outline {
	width: 100%;
	margin-top: .58rem
}

.pop_course_wrap .pop_course_count .course_outline .outline_title {
	font-size: .4rem;
	color: #333
}

.pop_course_wrap .pop_course_count .course_outline .outline_list {
	font-size: .373rem;
	color: #666;
	padding-top: .15rem
}

.pop_course_wrap .pop_course_count .course_outline .outline_list .outline_item {
	width: 100%;
	padding: .15rem 0
}

.pop_course_wrap .pop_course_count .course_outline .outline_list .outline_item .outline_index {
	float: left;
	width: 55px
}

.pop_course_wrap .pop_course_count .course_outline .outline_list .outline_item .outline_count {
	margin-left: 55px
}

.popup-common-mask {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: .6;
	top: 0;
	left: 50%;
	margin-left: -50%;
	z-index: 1000;
	background: rgba(0,0,0,.5)
}

.teacher-new .header-top {
	width: 100%;
	background: #fff;
	color: #666;
	position: relative
}

.teacher-new .header-top.show_download {
	margin-top: 2.53333rem
}

.teacher-new .header-top.show_download.mt0 {
	margin-top: 0
}

.teacher-new .header-top.mtbanner {
	margin-top: 1.2rem
}

.teacher-new .header-top .head-comment {
	height: 1.66667rem;
	bottom: 0;
	left: 0;
	position: absolute;
	font-size: 14px;
	border-top: 1px solid #f0f0f0;
	width: 100%;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: left;
	-moz-box-pack: left;
	box-pack: left;
	-webkit-justify-content: left;
	-moz-justify-content: left;
	-ms-justify-content: left;
	-o-justify-content: left;
	justify-content: left;
	-ms-flex-pack: left
}

.teacher-new .header-top .head-comment>div {
	-webkit-box-flex: 1;
	-moz-box-flex: 1;
	box-flex: 1;
	-webkit-flex: 1;
	-moz-flex: 1;
	-ms-flex: 1;
	flex: 1;
	text-align: center;
	padding-top: .24rem;
	padding-bottom: .24rem;
	height: 100%
}

.teacher-new .header-top .head-comment>div:last-child .item-wrap {
	border-right: none
}

.teacher-new .header-top .head-comment .item-wrap {
	border-right: 1px solid #f0f0f0;
	height: .56rem;
	line-height: .56rem
}

.teacher-new .header-top .head-comment .item-wrap:nth-child(2) {
	color: #999
}

.teacher-new .header-top .head-comment p {
	display: inline-block;
	margin-bottom: 0;
	font-size: 14px
}

.teacher-new .header-top .avatar-wrap {
	width: 100%;
	padding-top: .333333rem
}

.teacher-new .header-top .avatar-wrap .price {
	color: #f60
}

.teacher-new .header-top .avatar-wrap .l {
	width: 3.94667rem;
	height: 100%;
	float: left
}

.teacher-new .header-top .avatar-wrap .l .avatar {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center
}

.teacher-new .header-top .avatar-wrap .l .avatar .count {
	position: absolute;
	background: rgba(0,0,0,.5);
	border-radius: .18rem;
	height: .4rem;
	font-size: 12px;
	line-height: .4rem;
	vertical-align: middle;
	padding-left: .133333rem;
	padding-right: .133333rem;
	right: .55rem;
	bottom: .15rem;
	min-width: .666667rem;
	text-align: center;
	color: #fff
}

.teacher-new .header-top .avatar-wrap .l img {
	width: 3.06667rem;
	height: 3.06667rem;
	display: block;
	border-radius: .266667rem
}

.teacher-new .header-top .avatar-wrap .star-wrap {
	width: 2.13333rem;
	height: .533333rem;
	line-height: .533333rem;
	margin-right: .133333rem
}

.teacher-new .header-top .avatar-wrap .star-wrap .half-mask {
	position: absolute;
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: 0 -2.01333rem;
	background-size: 5.73333rem 5.30667rem;
	width: 2.13333rem;
	height: .533333rem
}

.teacher-new .header-top .avatar-wrap .star-wrap .abs {
	position: absolute;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/star_full.10db2ba6bde3e96c928edc130d034803.png) no-repeat;
	background-size: auto 100%;
	height: .533333rem
}

.teacher-new .header-top .avatar-wrap .r {
	margin-left: 3.94667rem;
	margin-top: .266667rem;
	height: 100%
}

.teacher-new .header-top .avatar-wrap .r h2 {
	font-size: 18px;
	line-height: 28px;
	height: 28px;
	color: #333;
	overflow: hidden
}

.teacher-new .header-top .avatar-wrap .r h2 .fl {
	max-width: 5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 28px;
	line-height: 28px
}

.teacher-new .header-top .avatar-wrap .r h2 .is_trm {
	padding-left: 75px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trm.0a537858de63ae81c49f12b5b18ad999.png) no-repeat;
	background-size: auto 16px;
	background-position: 0
}

.teacher-new .header-top .avatar-wrap .r h2 .is_trmt {
	padding-left: 76px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trmt.4ca4cf1be0769379f340a5877f769899.png) no-repeat;
	background-size: auto 16px;
	background-position: 0
}

.teacher-new .header-top .avatar-wrap .r h2 .icon {
	position: absolute;
	width: .4rem;
	height: .4rem;
	margin-left: .133333rem
}

.teacher-new .header-top .avatar-wrap .r h2 .male {
	height: 28px
}

.teacher-new .header-top .avatar-wrap .r h2 .male em {
	position: absolute;
	top: 50%;
	width: .293333rem;
	height: .373333rem;
	margin-top: -.186667rem;
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: -5.41333rem -1.65333rem;
	background-size: 5.73333rem 5.30667rem
}

.teacher-new .header-top .avatar-wrap .r h2 .female {
	height: 28px
}

.teacher-new .header-top .avatar-wrap .r h2 .female em {
	position: absolute;
	top: 50%;
	width: .293333rem;
	height: .373333rem;
	margin-top: -.186667rem;
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: -5.41333rem -.88rem;
	background-size: 5.73333rem 5.30667rem
}

.teacher-new .header-top .avatar-wrap .r p {
	line-height: .6rem;
	vertical-align: middle
}

.teacher-new .header-top .avatar-wrap .r .seperate {
	margin-right: .13333rem
}

.top-fixed-wrap {
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 15
}

.top-fixed-wrap .return-icon-wrap {
	background: #f7f7f7;
	border-bottom: 1px solid #f7f7f7;
	height: 1.2rem;
	line-height: 1.2rem;
	width: 100%;
	position: relative
}

.top-fixed-wrap .return-icon-wrap.bg {
	border-bottom: 1px solid #e6e6e6
}

.top-fixed-wrap .return-icon-wrap .icon-wrap .icon-back>div {
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: -5.41333rem 0;
	background-size: 5.73333rem 5.30667rem
}

.top-fixed-wrap .return-icon-wrap .icon-right-wrap .icon-star>div {
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: -4.08rem -1.33333rem;
	background-size: 5.73333rem 5.30667rem;
	width: .8rem;
	height: .8rem
}

.top-fixed-wrap .return-icon-wrap .icon-right-wrap {
	position: absolute;
	height: 100%;
	width: .426667rem;
	top: 0;
	right: 0
}

.top-fixed-wrap .return-icon-wrap .icon-right-wrap .icon-star {
	width: .76rem;
	height: .76rem;
	position: absolute;
	top: 50%;
	margin-top: -.4rem;
	right: .333333rem
}

.top-fixed-wrap .return-icon-wrap .icon-right-wrap .icon-star.active>div {
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/icon_teacher_yishoucang.efa7b4233370656ea7c28e747576a865.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 100%
}

.top-fixed-wrap .return-icon-wrap .nick-slide {
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	text-align: center;
	vertical-align: middle;
	height: 1.2rem;
	line-height: 1.2rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.top-fixed-wrap .icon-wrap {
	position: absolute;
	top: 0;
	left: 0;
	width: 1rem;
	height: 100%
}

.top-fixed-wrap .icon-wrap .icon-back {
	width: .32rem;
	height: .8rem;
	left: 50%;
	top: 50%;
	margin-top: -.4rem;
	margin-left: -.16rem;
	position: relative
}

.top-fixed-wrap .icon-wrap .icon-back>div {
	width: 100%;
	height: .48rem;
	top: 50%;
	margin-top: -.24rem;
	position: absolute;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/sprite/m_teacher.39b3905d811bccde91a17acef49be93e.png) no-repeat;
	background-size: 16.92rem 13.2133rem;
	background-position: -5.26667rem -11.2667rem
}

.top-fixed-wrap .banner-download {
	display: block
}

@media screen and (min-width:1000px) {
	.top-fixed-wrap {
		width: 100%;
		position: fixed;
		left: 50%;
		top: 0;
		z-index: 15;
		max-width: 600px;
		transform: translateX(-50%)
	}
}

.banner-download {
	width: 100%;
	height: 1.33333rem;
	background: url(https://static.changingedu.com/static/assets/common/images/download/downloadnew.99f9db8fc26069f983ca5a6ff8dc4207.jpg) no-repeat;
	background-size: 100% 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10
}

.banner-download.teacher_download {
	background-image: url(https://static.changingedu.com/static/assets/common/images/download/teacher_download.0eda31933d0a725d8a57a46090b22164.jpg);
	height: 1.18667rem
}

.banner-download.is_bottom {
	top: auto;
	bottom: 0
}

.banner-download.is_static {
	position: static
}

.banner-download .banner-close {
	width: 1rem;
	height: 1rem;
	position: absolute;
	right: 0;
	top: 0;
	background: url(https://static.changingedu.com/static/assets/common/images/download/h5_download_close.49c4fff0e1948bccbdfcb2996f5d1218.png) no-repeat;
	background-size: .666667rem .666667rem;
	background-position: 100% 0
}

.max_top {
	position: fixed!important;
	left: 0;
	top: 0;
	z-index: 10
}

.teacher_new_head {
	width: 100%
}

.teacher_new_head .top_video_wrap {
	width: 100%;
	height: 5.66667rem;
	background: #f0f0f0
}

.teacher_new_head .top_video_wrap .swiper-slide {
	background: #f0f0f0
}

.teacher_new_head .top_video_wrap .media_channel {
	position: absolute;
	left: .333333rem;
	bottom: 7px;
	color: #fff;
	font-size: 15px;
	z-index: 2
}

.teacher_new_head .top_video_wrap.swiper-container {
	z-index: 10
}

.teacher_new_head .top_video_wrap .source_type {
	position: absolute;
	right: .333333rem;
	bottom: 10px;
	z-index: 2;
	width: 81px;
	height: 15px
}

.teacher_new_head .top_video_wrap .source_type.official_icon {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_officialon.9bd5640efd17a17d8230e8f9f7e1ba4c.png);
	background-size: 100% 100%
}

.teacher_new_head .top_video_wrap .source_type.personal_icon {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_personal.5753e25df29d13dd9e230c8538fb933f.png);
	background-size: 100% 100%
}

.teacher_new_head .top_video_wrap .swiper-pagination.count-page {
	height: 28px;
	bottom: 7px
}

.teacher_new_head .top_video_wrap .swiper-pagination-bullet {
	background: #ededee;
	opacity: .8
}

.teacher_new_head .top_video_wrap .swiper-pagination-bullet-active {
	background: #fff;
	opacity: .9
}

.teacher_new_head .top_video_wrap .swiper_more {
	position: absolute;
	width: 1.6rem;
	height: 100%;
	right: -1.6rem;
	top: 0;
	background: #f0f0f0
}

.teacher_new_head .top_video_wrap .icon_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center;
	float: left;
	width: .373333rem;
	height: 100%;
	margin-left: .266667rem
}

.teacher_new_head .top_video_wrap .icon_wrap .revert_icon {
	width: .373333rem;
	height: .373333rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_study_album_loose@2x.879483b06f5b1676dd62370dcea2d3f8.png) no-repeat;
	background-size: 100% 100%
}

.teacher_new_head .top_video_wrap .txt_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center;
	margin-left: .266667rem;
	float: left;
	color: #b0b0b0;
	width: 16px;
	height: 100%;
	font-size: 14px;
	line-height: 1.2
}

.teacher_new_head .t_normal {
	padding-top: .333333rem;
	padding-left: .333333rem
}

.teacher_new_head .t_normal .swiper-container {
	z-index: 10
}

.teacher_new_head .t_normal .item {
	width: 2.33333rem;
	height: 2.33333rem;
	overflow: hidden;
	margin-right: .333333rem;
	border-radius: 5px;
	background: #fff
}

.teacher_new_head .t_normal .item img {
	width: 100%;
	height: auto;
	border-radius: 5px
}

.teacher_new_head .t_normal .swiper_more {
	background: #f0f0f0;
	padding-right: .333333rem;
	height: 2.33333rem;
	width: 2rem
}

.teacher_new_head .t_normal .swiper_more .icon_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center;
	float: left;
	width: .373333rem;
	height: 100%;
	margin-left: .266667rem
}

.teacher_new_head .t_normal .swiper_more .icon_wrap .revert_icon {
	width: .373333rem;
	height: .373333rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_study_album_loose@2x.879483b06f5b1676dd62370dcea2d3f8.png) no-repeat;
	background-size: 100% 100%
}

.teacher_new_head .t_normal .swiper_more .txt_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center;
	margin-left: .266667rem;
	float: left;
	color: #b0b0b0;
	width: 16px;
	height: 100%;
	font-size: 14px;
	line-height: 1.2
}

.teacher_new_head .t_normal .swiper-wrapper {
	width: 2000%
}

.teacher_new_head .mtR5 {
	margin-top: .0666667rem
}

.teacher_new_head .mlR10 {
	margin-left: .133333rem
}

.teacher_new_head .mrR10 {
	margin-right: .133333rem
}

.teacher_new_head .t_card {
	padding-top: .333333rem;
	padding-left: .333333rem;
	padding-right: .333333rem;
	background: #fff
}

.teacher_new_head .t_card h2 {
	font-size: 16px;
	color: #333;
	max-width: 85%;
	line-height: .44rem;
	vertical-align: top
}

.teacher_new_head .t_card .css_nick.is_trm {
	padding-left: 75px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trm.0a537858de63ae81c49f12b5b18ad999.png) no-repeat;
	background-size: auto 16px;
	background-position: 0
}

.teacher_new_head .t_card .css_nick.is_trmt {
	padding-left: 76px;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/590/icon_trmt.4ca4cf1be0769379f340a5877f769899.png) no-repeat;
	background-size: auto 16px;
	background-position: 0
}

.teacher_new_head .t_card p {
	color: #666;
	font-size: 12px
}

.teacher_new_head .t_card p span {
	color: #e6e6e6;
	margin-left: 5px;
	margin-right: 5px
}

.teacher_new_head .t_card .price_info {
	position: absolute;
	right: .333333rem;
	top: .3rem;
	color: #f60;
	font-size: 16px
}

.teacher_new_head .t_card .price_info span {
	font-size: 14px
}

.teacher_new_head .price-wrap {
	height: .5rem
}

.teacher_new_head .video_icon {
	background: #fff;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_video_play@2x.66fb4c53070eb80904f8fad07fde77c1.png);
	background-size: 100% 100%
}

.teacher_new_head .audio_icon_big,.teacher_new_head .video_icon {
	width: 1.38667rem;
	height: 1.38667rem;
	left: 50%;
	top: 50%;
	margin-left: -.693333rem;
	margin-top: -.693333rem;
	position: absolute;
	z-index: 2
}

.teacher_new_head .audio_icon_big {
	background: #fff;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_small@2x.909f28f488d01919c77119be5c838f3a.png);
	background-size: 100% 100%
}

.teacher_new_head .audio_icon {
	width: .693333rem;
	height: .693333rem;
	left: 50%;
	top: 50%;
	margin-left: -.346667rem;
	margin-top: -.346667rem;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_small@2x.909f28f488d01919c77119be5c838f3a.png);
	background-size: 100% 100%;
	position: absolute;
	z-index: 2
}

.teacher_new_head .kabc_type {
	height: 20px;
	display: inline-block
}

.teacher_new_head .kabc_type .icon_a_kabc_type,.teacher_new_head .kabc_type .icon_b_kabc_type,.teacher_new_head .kabc_type .icon_k_kabc_type {
	width: 1.52rem;
	height: .4rem;
	margin-top: 2px;
	line-height: .533333rem;
	margin-right: .133333rem
}

.teacher_new_head .kabc_type .icon_k_kabc_type {
	background: url(https://static.changingedu.com/static/assets/static/student/findteacher/images/kabc/icon_k_kabc_type@2x.246958c3bb76ec3c96fe0d5ad9f9a209.png) no-repeat;
	background-size: 100% 100%
}

.teacher_new_head .kabc_type .icon_a_kabc_type {
	background: url(https://static.changingedu.com/static/assets/static/student/findteacher/images/kabc/icon_a_kabc_type@2x.40894653276f136054131a3d17747802.png) no-repeat;
	background-size: 100% 100%
}

.teacher_new_head .kabc_type .icon_b_kabc_type {
	background: url(https://static.changingedu.com/static/assets/static/student/findteacher/images/kabc/icon_b_kabc_type@2x.c3077382a9a76d52a08b9bf41a8187a1.png) no-repeat;
	background-size: 100% 100%
}

.teacher_new_head .star-wrap {
	width: 2.13333rem;
	height: .533333rem;
	position: relative;
	top: -2px;
	left: -2px
}

.teacher_new_head .star-wrap .half-mask {
	position: absolute;
	background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
	background-position: 0 -2.01333rem;
	background-size: 5.73333rem 5.30667rem;
	width: 2.13333rem;
	height: .533333rem
}

.teacher_new_head .star-wrap .abs {
	position: absolute;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/star_full.10db2ba6bde3e96c928edc130d034803.png) no-repeat;
	background-size: auto 100%;
	height: .533333rem
}

.teacher_new_head .l {
	float: left;
	overflow: hidden;
	width: 1.33333rem;
	height: 1.33333rem
}

.teacher_new_head .l img {
	border-radius: 5px;
	width: 100%;
	height: auto
}

.teacher_new_head .r {
	margin-left: 1.55rem
}

@keyframes main_audio_animate {
	0% {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_1.25c6828c7f7f48503f650c786a20d9aa.png)
	}

	to {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_2.fefd86faa344eb0f837f999f76e34ece.png)
	}
}

@-webkit-keyframes main_audio_animate {
	0% {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_1.25c6828c7f7f48503f650c786a20d9aa.png)
	}

	to {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_2.fefd86faa344eb0f837f999f76e34ece.png)
	}
}

.main_audio_animate {
	animation-name: main_audio_animate
}

.infinite {
	animation-iteration-count: infinite
}

.page_video {
	width: 100%;
	height: 100%;
	background: #000
}

.page_video .video_wrap {
	width: 100%;
	height: 5.66667rem
}

.page_video .gif_wrap,.page_video .video_wrap {
	-ms-transform: translate(-50%,-50%);
	-webkit-transform: translate(-50%,-50%);
	-moz-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
	position: absolute;
	left: 50%;
	top: 50%
}

.page_video .gif_wrap {
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%
}

.page_video video {
	width: 100%;
	height: 5.66667rem;
	position: absolute;
	left: 0;
	top: 0
}

.pic_list_new {
	background: #fff
}

.pic_list_new .pad_h {
	padding-left: .333333rem;
	padding-right: .333333rem
}

.pic_list_new .c_title {
	padding-top: .333333rem;
	padding-bottom: .333333rem;
	font-size: 14px;
	color: #333
}

.pic_list_new .video_icon {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_video_play@2x.66fb4c53070eb80904f8fad07fde77c1.png);
	background-size: 100% 100%
}

.pic_list_new .audio_icon,.pic_list_new .video_icon {
	width: .693333rem;
	height: .693333rem;
	left: 50%;
	top: 50%;
	margin-left: -.346667rem;
	margin-top: -.346667rem;
	position: absolute
}

.pic_list_new .audio_icon {
	background: red;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_radio_play_small@2x.909f28f488d01919c77119be5c838f3a.png);
	background-size: 100% 100%
}

.pic_list_new .source_type {
	position: absolute;
	left: .133333rem;
	bottom: 10px;
	z-index: 2;
	width: 81px;
	height: 15px
}

.pic_list_new .source_type.official_icon {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_officialon.9bd5640efd17a17d8230e8f9f7e1ba4c.png);
	background-size: 100% 100%
}

.pic_list_new .source_type.personal_icon {
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/main/icon_teacher_personal.5753e25df29d13dd9e230c8538fb933f.png);
	background-size: 100% 100%
}

.pic_list_new .item_wrap .item:nth-child(2n) {
	float: right
}

.pic_list_new .item_wrap .item:nth-child(odd) {
	float: left
}

.pic_list_new .item_wrap .item {
	width: 4.53333rem;
	margin-bottom: .333333rem
}

.pic_list_new .item_wrap .txt {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	height: 34px;
	color: #666;
	margin-top: .2rem
}

.pic_list_new .item_wrap .img_count {
	font-size: 12px;
	padding-left: 10px;
	padding-right: 10px;
	height: 16px;
	line-height: 15px;
	vertical-align: middle;
	text-align: center;
	background: rgba(0,0,0,.6);
	position: absolute;
	left: .106667rem;
	bottom: .16rem;
	color: #fff;
	border-radius: 5px
}

.pic_list_new .item_wrap .img_item {
	width: 100%;
	height: 2.66667rem;
	overflow: hidden;
	border-radius: 5px
}

.pic_list_new .item_wrap .img_item img {
	width: 100%;
	height: auto;
	display: block;
	border-radius: 5px
}

.pic_list_new .pic_item_wrap {
	width: 100%;
	padding-left: .333333rem
}

.pic_list_new .pic_item_wrap .item {
	float: left;
	width: 2.90667rem;
	height: 2.90667rem;
	border-radius: 5px;
	margin-right: .333333rem;
	overflow: hidden;
	margin-bottom: .333333rem
}

.pic_list_new .pic_item_wrap .item img {
	width: 100%;
	height: auto
}

.pic_list_new .pic_item_wrap .item:nth-child(3n) {
	margin-right: 0
}

.teacher-new .bdb {
	border-bottom: 1px solid #e6e6e6
}

.teacher-new .bdt {
	border-top: 1px solid #e6e6e6
}

.teacher-new .buy_lession_ui {
	font-size: 14px;
	background: #fff
}

.teacher-new .buy_lession_ui .pad_h {
	padding-left: .333333rem;
	padding-right: .333333rem
}

.teacher-new .buy_lession_ui .pad_v {
	padding-top: .266667rem;
	padding-bottom: .266667rem
}

.teacher-new .buy_lession_ui .l {
	float: left;
	width: .48rem;
	height: .48rem
}

.teacher-new .buy_lession_ui .top_pad {
	padding-right: 2.4rem
}

.teacher-new .buy_lession_ui .icon_free_audition {
	position: absolute;
	margin-left: .16rem;
	width: 1.46667rem;
	height: .4rem;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/icon_teacherhomepage_mfst@2x.042740b13135759640fa799c49e4e8de.png) no-repeat;
	background-size: 100% 100%;
	margin-top: .12rem
}

.teacher-new .buy_lession_ui .obo_icon {
	width: .48rem;
	height: .48rem;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/online.6e6dec47048f531832af3664ab210b57.png) no-repeat;
	background-size: 100% 100%;
	margin-top: .333333rem;
	position: relative
}

.teacher-new .buy_lession_ui .pyt_icon {
	width: .48rem;
	height: .48rem;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/pengyoutuan.41125cf20cf64c3599ecbc039912be66.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	top: .08rem
}

.teacher-new .buy_lession_ui .olc_icon {
	width: .48rem;
	height: .48rem;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/online.6e6dec47048f531832af3664ab210b57.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	top: .08rem
}

.teacher-new .buy_lession_ui .other_wrap {
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex
}

.teacher-new .buy_lession_ui .other_wrap>div {
	-webkit-box-flex: 1;
	-moz-box-flex: 1;
	box-flex: 1;
	-webkit-flex: 1;
	-moz-flex: 1;
	-ms-flex: 1;
	flex: 1;
	padding-right: .666667rem;
	padding-left: .333333rem
}

.teacher-new .buy_lession_ui .other_wrap>div:nth-child(2) {
	border-left: 1px solid #e6e6e6
}

.teacher-new .buy_lession_ui .other_wrap .arrow_wrap {
	position: absolute;
	right: .333333rem;
	top: 0;
	height: 100%;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center
}

.teacher-new .buy_lession_ui .other_wrap .arrow_wrap>div {
	width: .146667rem;
	height: .266667rem;
	background: url(https://static.changingedu.com/static/assets/common/images/arrow/icon_teacher_arrow_999@3x.276e7b6ecb9e02713e34213bf4a37f72.png) no-repeat;
	background-size: 100% 100%
}

.teacher-new .buy_lession_ui .r {
	margin-left: .68rem
}

.teacher-new .buy_lession_ui h3 {
	margin: 0;
	vertical-align: middle;
	color: #333;
	font-size: 14px;
	line-height: .64rem
}

.teacher-new .buy_lession_ui p {
	margin: 0;
	font-size: 14px;
	color: #999;
	line-height: .64rem
}

.teacher-new .buy_lession_ui>div:nth-child(2) {
	border-top: 1px solid #e6e6e6
}

.teacher-new .buy_lession_ui .buy_btn {
	position: absolute;
	height: 100%;
	right: .333333rem;
	display: -webkit-box;
	display: -moz-box;
	display: box;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	box-orient: vertical;
	-webkit-box-direction: normal;
	-moz-box-direction: normal;
	box-direction: normal;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	flex-direction: column;
	-ms-flex-direction: column;
	-webkit-box-pack: center;
	-moz-box-pack: center;
	box-pack: center;
	-webkit-justify-content: center;
	-moz-justify-content: center;
	-ms-justify-content: center;
	-o-justify-content: center;
	justify-content: center;
	-ms-flex-pack: center
}

.teacher-new .buy_lession_ui .buy_btn>div {
	width: 1.66667rem;
	min-width: 80px;
	padding-top: .106667rem;
	padding-bottom: .106667rem;
	text-align: center;
	vertical-align: middle;
	background: #f60;
	color: #fff;
	border-radius: 5px
}

.live_order_page {
	background: #fff;
	line-height: 2;
	font-size: 14px;
	height: 100%;
	width: 100%
}

.live_order_page .live_top {
	width: 100%;
	height: 5rem
}

.live_order_page .live_top img {
	width: 100%;
	height: auto
}

.live_order_page .common_pad {
	padding-top: 1.4rem
}

.live_order_page .pad_25 {
	padding: .333333rem
}

.live_order_page .info {
	padding-bottom: 1rem
}

.live_order_page p {
	margin: 0
}

.live_order_page h2 {
	margin: 0;
	color: #23cd77;
	font-size: 14px;
	font-weight: 700
}

.live_order_page .item_wrap {
	padding-bottom: .8rem
}

.live_order_page .title {
	color: #333
}

.live_order_page .title span {
	display: inline-block;
	height: .4rem;
	line-height: .5rem;
	padding-left: .32rem;
	border-left: 2px solid #23cd77
}

.live_order_page .item {
	padding-top: .333333rem
}

.live_order_page .desc {
	padding-left: .32rem;
	color: #666;
	line-height: 1.4
}

.live_order_page .free_audition_link {
	color: #23cd77;
	line-height: 1;
	text-align: center;
	width: 100%
}

.tuike_notice.common_pad {
	padding-top: 1.4rem
}

.teacher-new .off_comments_wrap {
	padding: .266667rem .333333rem .4rem;
	background: #fff
}

.teacher-new .off_comments_wrap .t {
	width: 100%;
	height: .866667rem;
	line-height: .866667rem;
	vertical-align: middle
}

.teacher-new .off_comments_wrap .logo {
	width: .866667rem;
	height: .866667rem;
	float: left;
	background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/icon_teacherpage_changing@2x.63ce82ea1dbae7c4859177d9a9c910ee.png);
	background-size: 100% 100%
}

.teacher-new .off_comments_wrap .r {
	color: #555;
	font-size: 16px;
	font-weight: 700;
	margin-left: 1rem
}

.teacher-new .off_comments_wrap .b {
	line-height: 23px;
	vertical-align: bottom;
	color: #999
}

.teacher-new .off_comments_wrap .b.maxline3 {
	height: 69px;
	overflow: hidden;
	position: relative
}

.teacher-new .off_comments_wrap .b.maxline3 .fake_ellipsis {
	display: block
}

.teacher-new .off_comments_wrap .b .fake_ellipsis {
	display: none;
	position: absolute;
	right: 0;
	bottom: 0;
	line-height: 25px;
	vertical-align: middle;
	width: 15px;
	background: #fff
}

.teacher-new .off_comments_wrap .icon_more {
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg);
	-webkit-transform-origin: center center;
	-moz-transform-origin: center center;
	-ms-transform-origin: center center;
	-o-transform-origin: center center;
	transform-origin: center center;
	-webkit-transition: all .5s ease-in-out;
	-moz-transition: all .5s ease-in-out;
	transition: all .5s ease-in-out
}

.teacher-new .off_comments_wrap .icon_more.v_rotate {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
	-webkit-transform-origin: center center;
	-moz-transform-origin: center center;
	-ms-transform-origin: center center;
	-o-transform-origin: center center;
	transform-origin: center center
}

.teacher-new .off_comments_wrap .expand-info {
	position: absolute;
	right: .333333rem;
	top: 0;
	height: .866667rem;
	line-height: .866667rem;
	font-size: 14px;
	color: #999
}

.teacher-new .off_comments_wrap_new {
	padding: .3rem .72rem .333333rem .333333rem;
	font-size: 14px;
	background: #fff;
	color: #999;
	line-height: 22px;
	vertical-align: top
}

.teacher-new .off_comments_wrap_new span {
	color: #333
}

.teacher-new .off_comments_wrap_new.bdt1 {
	border-top: 1px solid #f0f0f0
}

.teacher-new .off_comments_wrap_new .icon_more {
	-webkit-transform: rotate(270deg);
	-moz-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	-o-transform: rotate(270deg);
	transform: rotate(270deg);
	-webkit-transform-origin: center center;
	-moz-transform-origin: center center;
	-ms-transform-origin: center center;
	-o-transform-origin: center center;
	transform-origin: center center;
	-webkit-transition: all .5s ease-in-out;
	-moz-transition: all .5s ease-in-out;
	transition: all .5s ease-in-out
}

.teacher-new .off_comments_wrap_new .icon_more.v_rotate {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
	-webkit-transform-origin: center center;
	-moz-transform-origin: center center;
	-ms-transform-origin: center center;
	-o-transform-origin: center center;
	transform-origin: center center
}

.teacher-new .off_comments_wrap_new .expand-info {
	position: absolute;
	right: 0;
	top: .32rem;
	width: .72rem;
	height: .5rem;
	line-height: .5rem;
	font-size: 14px;
	color: #999
}

.teacher-new .off_comments_wrap_new .l {
	width: .346667rem;
	height: .346667rem;
	float: left;
	background: url(https://static.changingedu.com/static/assets/common/images/teacher/icon_teacherpage_tj@2x.71657adc9285317f8649f283aad31245.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	top: 5px
}

.teacher-new .off_comments_wrap_new .r {
	margin-left: .45rem;
	word-break: break-all;
	line-height: 22px
}

.teacher-new .off_comments_wrap_new .r.maxline3 {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical
}

  /* 红包结束 */

  /* 在线老师开始 */
  
 
</style>