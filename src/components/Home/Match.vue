<template>
    <div id="bg_body" class="body" style="">

        <div id="headerView" class="headerView">
            <router-link to="/home">
                <div class="lecture_icon_back">
                    <div></div>
                </div>
            </router-link>
            <img id="headerCoverImage"
                src="https://img.changingedu.com/pic/201806/72/728d036a-6b2c-44cf-ac48-a3ffc2e4dd02.jpg" alt="">
            <div class="spend">
                <div data-v-ce985f06="" class="headerViewBottom">
                    <div data-v-ce985f06="" class="courseTitleStyle">如何更好的过渡初三</div>
                    <div data-v-ce985f06="" class="courseContentStyle">
                        <div data-v-ce985f06="" class="status">
                            <span data-v-ce985f06=""
                                class="courseSubtitleStyle">6月28日 18:00-19:30
                            </span> 
                    </div>
                    </div>
                    <div data-v-ce985f06="" class="studentCountStyle">
                        <span data-v-ce985f06="">211人看过</span> 
                        <span
                            data-v-ce985f06="" class="subtitleSepLine"></span>
                             <span data-v-ce985f06="">已报名</span> <span
                            data-v-ce985f06="" class="mainPriceStyle">免费</span>
                        </div>
                </div>
            </div>
        </div>
        <div class="bodyContent">
            <div class="brief_bg mT12">
                <div class="lecturer">
                    <div class="l_title">
                        <div class="l_title_content">主讲专家</div>
                    </div>
                    <ul>

                        <div id="lec0" class="lecturer_content">
                            <!---->
                            <div class="external_teacher">
                                <div class="left_content">
                                    <div class="upper_content"><img data-v-75b3a05a=""
                                            src="https://img.changingedu.com/expert/201712/f9/cp_200x200/f94f512f-f30c-4e81-ae41-45ca796424f3.jpg"
                                            class="head_icon">
                                        <div class="value mL12">
                                            <div class="nick">
                                                <div class="name">小饭老师</div>
                                            </div>
                                            <div class="description">
                                                轻轻家教宁波升学主编，专注研究宁波小升初、中考和高考多年，对宁波升学的运行模式、民办公办院校都有深入了解，热心为家长提供及时的升学咨询。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="arrow">
                            </div>
                            <!---->
                            <div class="divider"></div>
                        </div>
                        <div id="lec1" class="lecturer_content">
                            <div class="normal_teacher">
                                <div class="left_content">
                                    <div class="upper_content"><img data-v-75b3a05a=""
                                            src="https://img.changingedu.com/headimg/201712/fd/cp_200x200/fd6ff909-c1f4-4b14-9908-4c8f3247b192.jpg"
                                            class="head_icon">
                                        <div class="value mL12">
                                            <div class="nick">
                                                <div class="name">科学周老师</div>
                                                <div class="role_type"><img data-v-75b3a05a=""
                                                        src="https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/icon_list_jiaoyanzuzhang.1b9c6566bc37683f6377e43060ce6bad.png"
                                                        alt="" class="role_type_image"></div>
                                            </div>
                                            <div class="teacher_desc">
                                                <div class="teacher_level"><img data-v-75b3a05a=""
                                                        src="https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/icon_kabc_a.8590f465976f85889cd7552aca1d5655.png"
                                                        alt="" class="kabc_image"></div>
                                                <div class="teacher_status_desc"><span>教龄9年 | 已授1909.5课</span></div>
                                            </div>
                                            <div data-v-75b3a05a="" class="teacher_phrases">
                                                <div id="phrase0" class="phrase_label">中考
                                                </div>
                                                <div id="phrase1" class="phrase_label">公校教学经验
                                                </div>
                                                <div id="phrase2" class="phrase_label">尖子培优
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lower_content">
                                        <div class="brief_intro"></div>
                                    </div>
                                </div>
                                <img class="arrow">
                            </div>                            
                        </div>
                    </ul>
                </div>
                <div class="divider mT12 mL12"></div>
                <div class="lecture_brief">
                    <div class="l_title">
                        <div class="l_title_content">课程简介</div>
                    </div>
                    <div class="brief_content">初三关键词“中考”
                        ——中考是综合能力的考察，不能对单独知识点的考查，初三既有新课的学习，又要进行系统的复习，学生经常抓不住重点、平均用力、效果欠佳。孩子需有计划、有重点地进行突破，才能在中考中取得优异成绩。
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
        data() {
            return {

            }
        },
        methods: {


        },
        mounted() {

        }
    }
</script>
<style scoped>
    .body {
        height: 20rem;
    }

    .spend {
        line-height: 16px;
        margin-left: 0.2rem;

    }

    body::-webkit-media-controls {
        opacity: 0;
    }

    #headerView {
        background: white;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
        height: 0.6rem;
    }

    .lecture_icon_back {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.33333rem;
        height: 1.33333rem;
    }

    .filter_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .filter_bg .filter_dialog_bg {
        position: relative;
        margin: auto;
        text-align: center;
        background: white;
        padding: 0.3rem;
    }

    .filter_bg .filter_dialog_bg .content {
        display: box;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 0.3rem;
    }

    .filter_bg .filter_dialog_bg .item {
        font-size: 0.3rem;
        padding: 0.1rem 0.4rem;
        width: fit-content;
        color: #666666;
        background: #ffffff;
        border: 0.02rem solid #cccccc;
        border-radius: 1rem;
        margin-top: 0.3rem;
        margin-right: 0.3rem;
    }

    .filter_bg .filter_dialog_bg .item.selected {
        color: #23cd77;
        background: rgba(35, 205, 119, 0.1);
        border-color: #23cd77;
    }

    .filter_bg .filter_dialog_bg .item.selected.ta_share {
        color: #ff8b19;
        background: rgba(255, 139, 25, 0.1);
        border-color: #ff8b19;
    }

    .max-750 .ta_bg .ta_dialog_bg {
        width: 7.466667rem;
    }

    .ta_bg {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .ta_bg .ta_dialog_bg {
        -webkit-border-radius: 0.133333rem;
        border-radius: 0.133333rem;
        position: relative;
        top: 5rem;
        margin: auto;
        text-align: center;
        width: 75%;
        background: white;
    }

    .ta_bg .ta_dialog_bg .head_icon {
        width: 1.5rem;
        min-width: 1.5rem;
        height: 1.5rem;
        box-pack: center;
        justify-content: center;
        -ms-flex-pack: center;
        border-style: solid;
        border-radius: 0.133333rem;
        border-width: 0.026667rem;
        border-color: #e6e6e6;
        margin-top: 0.5rem;
    }

    .ta_bg .ta_dialog_bg .nick {
        margin-top: 0.2rem;
        color: #333333;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .ta_bg .ta_dialog_bg .desc {
        margin-top: 0.2rem;
        color: #666666;
        font-size: 0.34rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .ta_bg .ta_dialog_bg .divider {
        width: 100%;
        height: 0.026667rem;
        background-color: #f0f0f0;
    }

    .ta_bg .ta_dialog_bg .confirm {
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        color: #23cd77;
        font-size: 0.4rem;
    }

    .mL12 {
        margin-left: 0.2rem;
    }

    .mR12 {
        margin-right: 0.2rem;
    }

    .head_icon {
        width: 1.5rem;
        min-width: 1.5rem;
        height: 1.5rem;
        box-pack: center;
        ;
        justify-content: center;
        border-style: solid;
        border-radius: 0.133333rem;
        border-width: 0.026667rem;
        border-color: #e6e6e6;
    }

    .name {
        padding-bottom: 0.1rem;
        margin-top: 0.133333rem;
        text-align: left;
        font-weight: normal;
        font-size: 0.35rem;
        color: #333333;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        /* number of lines to show */
        line-height: 0.5rem;
        /* fallback */
        max-height: 0.5rem;
        /* fallback */
    }

    .arrow {
        width: 0.25rem;
        height: 0.4rem;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        content: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/arrow.059251ef7f998b78fb33ae004fb005ee.png);
    }


    .upper_content {
        display: box;
        display: flex;
        width: 100%;
    }

    .left_content {
        max-width: 95%;
        margin-right: 0.2rem;
    }

    .normal_teacher {
        display: box;
        display: flex;
        vertical-align: top;
        width: 100%;
    }

    .normal_teacher .teacher_nick {
        margin-top: 0.133333rem;
        color: #333333;
        text-align: left;
        font-size: 0.346667rem;
        font-weight: normal;
        vertical-align: middle;
        line-height: 0.4rem;
        max-height: 0.4rem;
        min-height: 0.4rem;
        overflow: hidden;
    }

    .normal_teacher .role_type {
        
        display: box;
        display: flex;
        margin-left: 0.1rem;
        height: 0.35rem;
    }

    .normal_teacher .role_type .role_type_image {
        width: auto;
        height: 0.35rem;
    }

    .normal_teacher .teacher_desc {
        display: box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 0.133333rem;
        width: 100%;
        height: 0.4rem;
    }

    .normal_teacher .teacher_desc .teacher_level {
        display: box;

        display: flex;
        vertical-align: middle;
        padding-right: 0.133333rem;
    }

    .normal_teacher .teacher_desc .teacher_level .kabc_image {
        width: auto;
        height: 0.4rem;
    }

    .normal_teacher .teacher_desc .teacher_status_desc {
        color: #666666;
        font-size: 0.293333rem;
        line-height: 0.4rem;
        font-weight: normal;
        vertical-align: middle;
    }

    .normal_teacher .teacher_phrases {
        display: box;
        display: flex;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        height: 0.4rem;
        max-height: 0.4rem;
        margin-top: 0.133333rem;
        overflow: hidden;
    }

    .normal_teacher .teacher_phrases .phrase_label {
        color: #999999;
        margin-right: 0.133333rem;
        padding-left: 0.07rem;
        padding-right: 0.07rem;
        font-size: 0.27rem;
        line-height: 0.4rem;
        font-weight: normal;
        vertical-align: middle;
        background: #f7f7f7;
        border-radius: 2px;
    }

    .normal_teacher .brief_intro {
        word-break: break-all;
        color: #666666;
        margin-top: 0.1rem;
        font-size: 0.32rem;
        line-height: 0.45rem;
    }

    .external_teacher {
        display: box;
        display: flex;
        width: 100%;
    }

    .external_teacher .description {
        word-break: break-all;
        color: #666666;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* number of lines to show */
        font-size: 0.32rem;
        line-height: 0.45rem;
        /* fallback */
        max-height: 0.9rem;
        /* fallback */
    }

    .assistant {
        display: box;
        display: flex;
        width: 100%;
    }

    .assistant .brief {
        color: #666666;
        font-size: 0.32rem;
        line-height: 0.45rem;
        /* fallback */
    }

    .assistant .description {
        word-break: break-all;
        color: #666666;
        overflow: hidden;
        display: -webkit-box;
        /* number of lines to show */
        font-size: 0.32rem;
        line-height: 0.45rem;
        /* fallback */
        max-height: 0.9rem;
        /* fallback */
    }

    .divider {
        margin-top: 0.2rem;
        background-color: #f0f0f0;
        height: 0.026667rem;
    }

    body.max-750 .middle {
        width: 10rem;
    }

    .content_wrap {
        min-height: 100vh;
        background: #f0f0f0;
    }

    .l_title .l_title_content {
        font-size: 0.4rem;
        color: #333333;
        line-height: 0.4rem;
        font-weight: bold;
    }

    .brief_bg {
        background-color: white;
    }

    .brief_bg .divider {
        background-color: #f0f0f0;
        height: 0.013333rem;
    }

    .brief_bg .divider_wide {
        background-color: #f7f7f7;
        height: 0.2rem;
    }

    .brief_bg .lecturer {
        padding-top: 0.4rem;
        padding-left: 0.266667rem;
        padding-right: 0.266667rem;
        padding-bottom: 0.2rem;
    }

    .brief_bg .lecturer_content {
        padding-top: 0.4rem;
        padding-right: 0.266667rem;
    }

    .brief_bg .lecture_brief {
        padding-top: 0.4rem;
        padding-left: 0.266667rem;
        padding-right: 0.266667rem;
        padding-bottom: 0.346667rem;
    }

    .brief_bg .lecture_brief .brief_content {
        color: #666666;
        font-size: 0.33rem;
        overflow: hidden;
        padding-top: 0.253333rem;
    }

    .brief_bg .recommend_lecture {
        padding-top: 0.4rem;
        padding-left: 0.266667rem;
        padding-right: 0.266667rem;
        margin-bottom: 0.266667rem;
    }

    .body {
        position: relative;
    }

    .bodyContent {
        position: relative;
    }

    .addBottomMargin {
        padding-bottom: 2.133333rem;
    }

    .noBottomMargin {
        padding-bottom: 0;
    }

    .headerView {
        background: white;
    }

    .headerView>img {
        width: 100%;
        height: 5.466667rem;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .headerView.bannerShowed {
        padding-top: 1.4rem;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .headerViewBottom .top {
        display: box;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .headerViewBottom .top .left {
        display: box;
        display: flex;
        align-items: center;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        ;
    }

    .courseTitleStyle p {
        text-indent: -0.226667rem;
    }

    .courseSubtitleStyle {
        display: inline-block;
        font-size: 0.346667rem;
        color: #666666;
        margin-top: 0.106667rem;
        margin-bottom: 0.106667rem;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
        margin-left: -0.3rem;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }


    #headerView {
        background: white;
    }

    #headerView>img {
        width: 100%;
        height: 5.466667rem;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .mT12 {
        margin-top: 0.2rem;
    }

    .headerView.bannerShowed {
        padding-top: 1.4rem;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
    }

    .courseContentStyle {
        display: box;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        align-items: center;
        box-pack: justify;
        justify-content: space-between;
        -ms-flex-pack: justify;
    }

    .courseContentStyle .status {
        display: box;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        align-items: center;
        -ms-flex-align: center;
        margin-top: 0.186667rem;
    }

    .courseContentStyle .status .courseNoStart {
        display: box;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        align-items: center;
        box-pack: center;
        justify-content: center;
        -ms-flex-pack: center;
    }

    .courseContentStyle .status .courseStart {
        display: box;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        align-items: center;
        ;
        box-pack: center;
        justify-content: center;
        -ms-flex-pack: center;
    }

    .courseContentStyle .status .courseEnd {
        display: box;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        align-items: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        box-pack: center;
        justify-content: center;
        -ms-flex-pack: center;
    }

    .courseNoStart {
        padding-left: 0.106667rem;
        padding-right: 0.106667rem;
        width: 1.066667rem;
        height: 0.4rem;
        background: rgba(102, 102, 102, 0.2);
        -webkit-border-radius: 0.053333rem;
        border-radius: 0.053333rem;
        border: 1px;
        border-color: rgba(0, 0, 0, 0.2);
        border-style: solid;
        color: #666666;
        font-size: 0.266667rem;
    }

    .courseStart {
        padding-left: 0.106667rem;
        padding-right: 0.106667rem;
        width: 1.066667rem;
        height: 0.4rem;
        background: rgba(35, 205, 119, 0.1);
        -webkit-border-radius: 0.04rem;
        border-radius: 0.04rem;
        border: 1px;
        border-color: rgba(35, 205, 119, 0.15);
        border-style: solid;
        color: #23cd77;
        font-size: 0.266667rem;
    }

    .courseEnd {
        padding-left: 0.106667rem;
        padding-right: 0.106667rem;
        width: 1.066667rem;
        height: 0.4rem;
        background: rgba(48, 135, 255, 0.1);
        -webkit-border-radius: 0.053333rem;
        border-radius: 0.053333rem;
        border: 1px;
        border-color: rgba(69, 135, 255, 0.15);
        border-style: solid;
        color: #4385f5;
        font-size: 0.266667rem;
    }

    .courseSubtitleStyle {
        font-size: 0.346667rem;
        color: #666666;
        margin: 0.106667rem;
    }

    .remindBtn {
        float: right;
        width: 1.866667rem;
        height: 0.666667rem;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        border: 0.026667rem solid #4385f5;
        font-size: 0.346667rem;
        color: #4385f5;
        text-align: center;
        padding-top: 0.053333rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .cancelBtn {
        float: right;
        width: 1.866667rem;
        height: 0.666667rem;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        border: 0.026667rem solid #cccccc;
        font-size: 0.346667rem;
        color: #666666;
        text-align: center;
        padding-top: 0.053333rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .countLabel {
        float: right;
        width: 2.4rem;
        height: 0.666667rem;
        font-size: 0.346667rem;
        color: #999999;
        text-align: right;
        line-height: 0.666667rem;
    }

    .countdownStyle {
        width: 100%;
        height: 0.8rem;
        background: #fff0d9;
        position: fixed;
        bottom: 1.706667rem;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.346667rem;
        font-weight: 400;
        color: #ff8b19;
    }

    .bottomView {
        height: 1.706667rem;
        width: 100%;
        background: white;
        position: fixed;
        bottom: 0;
    }

    .notBeginBtn {
        width: 8.666667rem;
        height: 1.2rem;
        margin: 0 auto;
        background: #4385f5;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        text-align: center;
        font-size: 0.4rem;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.2rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 0.253333rem;
    }

    .beginBtn {
        width: 8.666667rem;
        height: 1.2rem;
        margin: 0 auto;
        background: #4385f5;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        text-align: center;
        font-size: 0.4rem;
        color: white;
        line-height: 1.2rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 0.253333rem;
    }

    .endBtn {
        width: 8.666667rem;
        height: 1.2rem;
        margin: 0 auto;
        background: #4385f5;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        text-align: center;
        font-size: 0.4rem;
        color: white;
        line-height: 1.2rem;
        box-sizing: border-box;
        margin-top: 0.253333rem;
    }

    .gap2 {
        padding-bottom: 2.533333rem;
    }

    .gap1 {
        padding-bottom: 1.626667rem;
    }

    .Floating {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        z-index: 999;
        position: fixed;
        padding-top: 2.4rem;
        padding-left: 0.933333rem;
    }

    .FloatingText {
        font-size: 0.506667rem;
        margin-bottom: 0.213333rem;
    }

    .FloatingText2 {
        margin-top: 0.666667rem;
        margin-bottom: 0.213333rem;
        font-size: 0.506667rem;
    }

    .Downloadbtn {
        font-size: 0.666667rem;
        color: white;
        width: 4.666667rem;
        height: 1.333333rem;
        background: #4385f5;
        -webkit-border-radius: 0.16rem;
        border-radius: 0.16rem;
        padding-top: 0.133333rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }

    .max-750 .bottomView {
        width: 10rem;
    }

    .max-750 .bottomView .bottomStyle {
        width: 10rem;
    }

    .max-750 .bottomView .loadingStyle {
        width: 10rem;
    }

    .body {
        position: relative;
    }

    .bodyContent {
        position: relative;
        padding-bottom: 2.133333rem;
    }

    .mT12 {
        margin-top: 0.2rem;
    }

    #headerView {
        background: white;
        position: relative;
    }

    #headerView>img {
        width: 100%;
        height: 5.466667rem;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .auditionView {
        display: box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        left: 0.426667rem;
        top: 4.4rem;
        width: 1.76rem;
        height: 0.693333rem;
        -webkit-border-radius: 0.373333rem;
        border-radius: 0.373333rem;
        background: rgba(51, 51, 51, 0.6);
    }

    .auditionView .image>img {
        width: 0.4rem;
        left: 0.266667rem;
        padding-left: 0.266667rem;
        padding-right: 0.08rem;
        vertical-align: bottom;
    }

    .auditionView .auditionStr {
        font-size: 0.346667rem;
        color: white;
    }

    .headerView.bannerShowed {
        padding-top: 1.4rem;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
    }

    .courseContentStyle {
        display: box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .courseContentStyle .status {
        display: box;
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
    }

    .courseContentStyle .status>img {
        position: absolute;
        width: 1.493333rem;
        right: 0;
        top: 0.133333rem;
    }

    .courseSubtitleStyle {
        font-size: 0.346667rem;
        color: #666666;
        margin: 0.106667rem 0.106667rem 0.106667rem 0;
    }

    .studentCountStyle {
        font-size: 0.32rem;
        color: #999999;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }

    .bottomView {
        width: 10rem;
        font-size: 0;
    }

    .greenStyle {
        background: #23cd77;
    }

    .oraStyle {
        background: #ed7f30;
    }

    .grayStyle {
        background: #23cd77;
    }

    .courseNoStart {
        font-size: 0.266667rem;
        padding-left: 0.106667rem;
        padding-right: 0.106667rem;
        -webkit-border-radius: 0.053333rem;
        border-radius: 0.053333rem;
        color: #999999;
        background-color: #f6f6f6;
    }

    .courseStart {
        font-size: 0.266667rem;
        padding-left: 0.106667rem;
        padding-right: 0.106667rem;
        -webkit-border-radius: 0.053333rem;
        border-radius: 0.053333rem;
        color: #23cd77;
        background-color: #f6f6f6;
    }

    .subtitleSepLine {
        display: inline-block;
        height: 0.266667rem;
        width: 0.026667rem;
        background: #999999;
        margin: 0;
    }

    .weixin_mark {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        padding-top: 2.666667rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/share_wechat.570907e6b95d933a87fcdad9c882412b.png) rgba(1, 1, 1, 0.6) no-repeat;
        -webkit-background-size: 5.333333rem 3.466667rem;
        background-size: 5.333333rem 3.466667rem;
        background-position: 3.773333rem 0.506667rem;
    }

    .weixin_mark div {
        color: #fff;
        font-size: 0.426667rem;
        text-align: center;
        padding-bottom: 0.333333rem;
    }

    .lecture_icon_back {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.33333rem;
        height: 1.33333rem;
    }

    .lecture_icon_back.bannerShowed {
        top: 1.4rem;
    }

    .lecture_icon_back>div {
        width: 0.72rem;
        height: 0.72rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.36rem;
        margin-top: -0.36rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/tips_llj.9a545536c34d674334a13a1484838b88.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .loadingStyle {
        width: 100%;
        height: 1.466667rem;
        border-top: 0.026667rem solid #e6e6e6;
        position: fixed;
        bottom: 0;
        background-color: #fcfcfc;
        font-size: 0;
    }

    .loadingBtn {
        width: 70%;
        margin-left: 15%;
        height: 1.066667rem;
        margin-top: 0.2rem;
        vertical-align: middle;
        background: #ccc;
        font-size: 0.426667rem;
        text-align: center;
        line-height: 1.066667rem;
        -webkit-border-radius: 0.533333rem;
        border-radius: 0.533333rem;
    }

    .spinner {
        left: 48%;
        top: 33%;
        width: 0.373333rem;
        height: 0.373333rem;
        position: relative;
    }

    .spinner .spinner-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .bottomStyle {
        width: 100%;
        height: 1.706667rem;
        border-top: 0.013333rem solid #f8f8f8;
        position: fixed;
        bottom: 0;
        background: white;
        font-size: 0;
    }

    .onlyBottomBtn {
        width: 90%;
        margin-left: 5%;
        height: 1.2rem;
        margin-top: 0.24rem;
        vertical-align: middle;
        color: white;
        font-size: 0.426667rem;
        text-align: center;
        line-height: 1.2rem;
        background: linear-gradient(133deg, #e1ba99 0%, #d2a06e 100%);
        -webkit-border-radius: 0.106667rem;
        border-radius: 0.106667rem;
    }

    .leftBottomLabel {
        line-height: 1.706667rem;
        margin-left: 0.426667rem;
        color: #252c34;
        font-size: 0.426667rem;
        display: inline-block;
    }

    .rightBottomBtn {
        position: absolute;
        width: 4.586667rem;
        height: 1.2rem;
        background: linear-gradient(133deg, #e1ba99 0%, #d2a06e 100%);
        -webkit-border-radius: 0.106667rem;
        border-radius: 0.106667rem;
        right: 0.333333rem;
        top: 0.24rem;
        vertical-align: middle;
        color: white;
        font-size: 0.426667rem;
        text-align: center;
        line-height: 1.2rem;
    }

    #headerCoverImage {
        width: 100%;
        min-height: 5.68rem;
    }

    .content_wrap {
        overflow: scroll;
        background: white;
        width: 100%;
        height: 100%;
        position: relative;
    }



    .body {
        position: relative;
    }


    body.max-750 .bottomStyle {
        width: 10rem;
    }

    body.max-750 .loadingStyle {
        width: 10rem;
    }

    .bodyContent {
        position: relative;
    }

    .addBottomMargin {
        padding-bottom: 2.133333rem;
    }

    .noBottomMargin {
        padding-bottom: 0;
    }

    .headerView {
        background: white;
    }

    .headerView>img {
        width: 100%;
        height: 5.466667rem;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .headerView.bannerShowed {
        padding-top: 1.4rem;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .headerViewBottom .top {
        display: box;
        display: flex;
        position: relative;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .headerViewBottom .top .left {
        display: box;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .headerViewBottom .top>img {
        position: absolute;
        width: 1.493333rem;
        right: 0;
        top: 0.133333rem;
    }

    .auditionView {
        position: absolute;
        left: 0.426667rem;
        top: 4.4rem;
        width: 1.76rem;
        height: 0.693333rem;
        -webkit-border-radius: 0.373333rem;
        border-radius: 0.373333rem;
        background: rgba(51, 51, 51, 0.6);
    }

    .auditionView>img {
        position: absolute;
        width: 0.373333rem;
        left: 0.266667rem;
        top: 0.16rem;
    }

    .auditionView .auditionStr {
        position: absolute;
        height: 0.48rem;
        line-height: 0.48rem;
        top: 0.146667rem;
        right: 0.293333rem;
        font-size: 0.346667rem;
        color: white;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
    }

    .courseSubtitleStyle {
        display: inline-block;
        font-size: 0.346667rem;
        color: #666666;
        margin-top: 0.106667rem;
        margin-bottom: 0.106667rem;
    }

    .studentCountStyle {
        font-size: 0.32rem;
        color: #999999;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }

    .bottomView {
        width: 10rem;
        font-size: 0;
    }



    #headerCoverImage {
        width: 100%;
        min-height: 5.68rem;
    }

    .body {
        position: relative;
    }

    .weixin_mark {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        padding-top: 2.666667rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/share_wechat.570907e6b95d933a87fcdad9c882412b.png) rgba(1, 1, 1, 0.6) no-repeat;
        -webkit-background-size: 5.333333rem 3.466667rem;
        background-size: 5.333333rem 3.466667rem;
        background-position: 3.773333rem 0.506667rem;
    }

    .weixin_mark div {
        color: #fff;
        font-size: 0.426667rem;
        text-align: center;
        padding-bottom: 0.333333rem;
    }

    .lecture_icon_back {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.33333rem;
        height: 1.33333rem;
    }

    .lecture_icon_back.bannerShowed {
        top: 1.4rem;
    }

    .lecture_icon_back>div {
        width: 0.72rem;
        height: 0.72rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.36rem;
        margin-top: -0.36rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/tips_llj.9a545536c34d674334a13a1484838b88.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .loadingStyle {
        width: 100%;
        height: 1.466667rem;
        border-top: 0.026667rem solid #e6e6e6;
        position: fixed;
        bottom: 0;
        background-color: #fcfcfc;
        font-size: 0;
    }

    .loadingBtn {
        width: 70%;
        margin-left: 15%;
        height: 1.066667rem;
        margin-top: 0.2rem;
        vertical-align: middle;
        background: #ccc;
        font-size: 0.426667rem;
        text-align: center;
        line-height: 1.066667rem;
        -webkit-border-radius: 0.533333rem;
        border-radius: 0.533333rem;
    }

    .regroupPopover>img {
        position: fixed;
        z-index: 999;
        right: 0.346667rem;
        bottom: 1.6rem;
        width: 4.88rem;
        height: 1.013333rem;
    }

    .spinner {
        left: 48%;
        top: 33%;
        width: 0.373333rem;
        height: 0.373333rem;
        position: relative;
    }


    /* 课程介绍开始 */
    #headerCoverImage {
        width: 100%;
        min-height: 5.68rem;
    }

    .body {
        position: relative;
    }

    .bodyContent {
        position: relative;
        padding-bottom: 2.133333rem;
    }

    .mT12 {
        margin-top: 0.2rem;
    }

    #headerView {
        background: white;
    }

    #headerView>img {
        width: 100%;
        height: 5.466667rem;
        object-fit: cover;
    }

    .headerView.bannerShowed {
        padding-top: 1.4rem;
    }

    .headerViewBottom {
        padding: 0.266667rem;
    }

    .courseTitleStyle {
        font-size: 0.426667rem;
        color: #333333;
    }

    .courseContentStyle {
        display: box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .courseContentStyle .status {
        display: box;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .courseSubtitleStyle {
        font-size: 0.346667rem;
        color: #666666;
        margin: 0.106667rem 0 0.106667rem 0;
    }

    .studentCountStyle {
        font-size: 0.32rem;
        color: #999999;
    }

    .mainPriceStyle {
        font-size: 0.373333rem;
        color: #ff6600;
        float: right;
    }

    .subPriceStyle {
        font-size: 0.373333rem;
        color: #999;
        float: right;
        margin-top: 0.066667rem;
    }

    .bottomView {
        width: 10rem;
        font-size: 0;
    }

    .groupingStyle {
        width: 100%;
        height: 1.466667rem;
        border-top: 0.026667rem solid #e6e6e6;
        position: fixed;
        bottom: 0;
        background-color: #fcfcfc;
        font-size: 0;
        padding-left: 0.466667rem;
    }

    .normalCourseBottomStyle {
        width: 100%;
        height: 1.466667rem;
        border-top: 0.026667rem solid #e6e6e6;
        position: fixed;
        bottom: 0;
        background-color: #fcfcfc;
        font-size: 0;
    }

    /* 课程介绍结束 */
    /* 左边返回键 */
    .weixin_mark {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        padding-top: 2.666667rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/share_wechat.570907e6b95d933a87fcdad9c882412b.png) rgba(1, 1, 1, 0.6) no-repeat;
        background-size: 5.333333rem 3.466667rem;
        background-position: 3.773333rem 0.506667rem;
    }

    .weixin_mark div {
        color: #fff;
        font-size: 0.426667rem;
        text-align: center;
        padding-bottom: 0.333333rem;
    }

    .lecture_icon_back {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.33333rem;
        height: 1.33333rem;
    }

    .lecture_icon_back.bannerShowed {
        top: 1.4rem;
    }

    .lecture_icon_back>div {
        width: 0.72rem;
        height: 0.72rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.36rem;
        margin-top: -0.36rem;
        background: url(https://static.changingedu.com/appstatic/assets/static/app/activity/lecture_detail/js/images/tips_llj.9a545536c34d674334a13a1484838b88.png) no-repeat;
        background-size: 100% 100%;
    }

    #headerCoverImage {
        width: 100%;
        min-height: 5.68rem;
    }
</style> 