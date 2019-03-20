<template>
	<div class="js-homeview  ">
			
		<div class="page page_video">

			<div class="comment-header rel new_m_header">
				<div class="header">
					<router-link to="/teacherdetail">
					<i class="returnBack" id="returnBack">

					</i>
				</router-link>
					<h3></h3>
				</div>
			</div>
			<div class="video_wrap">
				<img class="gif_wrap"
					src="https://onlinebucket-10028515.file.myqcloud.com/teacher_profile/%E5%93%81%E7%89%8C%E6%9B%B4%E6%96%B0%E8%A7%86%E9%A2%91-%E7%89%87%E5%B0%BE.gif">
				<video id="main_page_video" controls="" class=""
					src="https://200015671.vod.myqcloud.com/200015671_c9bd943478cc11e6a5337dfc7cbfe1e2.f10.mp4"></video>
			</div>
		</div>


	</div>
</template>
<script>

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
	.js-homeview,
	body {
		width: 100%;
		height: 100%
	}

	.js-homeview {
		position: absolute;
		left: 0;
		top: 0
	}

	.new_m_header .header {
		display: block;
		width: 100%;
		height: 1.4rem;
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;
		vertical-align: middle;
		border-bottom: 1px solid #ccc;
		background-color: #f7f7f7;
		z-index: 100;
	}

	.new_m_header .cancel,
	.new_m_header i.returnBack {
		height: 1.4rem;
		line-height: 1.4rem;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.js-show-canvas-pop em {
		font-weight: 400
	}

	.mti0 {
		margin-top: 0 !important
	}

	.ovh-x {
		overflow-x: hidden
	}

	.page {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background-color: #f0f0f0
	}

	.ptR25 {
		padding-top: .333333rem
	}

	.swipe-page {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%
	}



	.rel {
		position: relative
	}


	.app_comments .new_m_header:before {
		width: 100%;
		height: 20px;
		background-color: #f7f7f7;
		content: "";
		display: block
	}

	.app_comments .new_m_header .header {
		height: 54px;
		display: block;
		position: relative;
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;
		vertical-align: middle;
		border-bottom: 1px solid #ccc;
		background-color: #f7f7f7
	}

	.app_comments .new_m_header i.returnBack {
		height: 54px;
		line-height: 54px;
		background-size: 10px 16px
	}

	.app_comments .new_m_header .header h3 {
		line-height: 54px
	}

	.app_comments .new_m_header .tag-switch {
		margin-top: 0;
		position: relative;
		top: 8px
	}

	.app_comments .new_m_header .tag-switch div {
		height: 35px;
		line-height: 35px
	}

	.css-app-ta .new_m_header i.returnBack {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/tips_lj_ta.dac5ba846275ffec36c80906c432ff91.png)
	}

	.css-app-ta .comment-header .tag-switch {
		border: 1px solid #fe9900;
		color: #fe9900
	}

	.css-app-ta .comment-header .tag-switch div.active {
		background: #fe9900
	}

	.css-app-teacher .new_m_header i.returnBack {
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/tips_lj_teacher.4d893912ed1b7961364eb25862493c22.png)
	}

	.css-app-teacher .comment-header .tag-switch {
		border: 1px solid #496eda;
		color: #496eda
	}

	.css-app-teacher .comment-header .tag-switch div.active {
		background: #496eda
	}

	.new_m_header {
		display: block;
		width: 100%;
		height: 1.4rem;
		top: 0;
		left: 0;
		position: fixed;
		color: #fff;
		z-index: 98
	}

	.new_m_header .r_p {
		position: absolute;
		height: 100%;
		line-height: 1.4rem;
		vertical-align: middle;
		padding-right: .333333rem;
		color: #23cd77;
		font-size: 14px;
		right: 0;
		top: 0;
		z-index: 2;
		min-width: 1rem;
		text-align: right
	}

	.new_m_header .common-margin {
		margin-top: 1.4rem
	}

	.new_m_header .header {
		display: block;
		width: 100%;
		height: 1.4rem;
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;
		vertical-align: middle;
		border-bottom: 1px solid #ccc;
		background-color: #f7f7f7;
		z-index: 100
	}

	.new_m_header .header h3 {
		height: 100%;
		line-height: 1.4rem;
		vertical-align: middle;
		color: #333;
		overflow: visible;
		max-width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
		margin-left: auto;
		margin-right: auto;
		font-size: .426667rem
	}

	.new_m_header .header .rechoose {
		width: 20%;
		height: 100%;
		line-height: 1.4rem;
		color: #23cd77;
		font-size: .373333rem;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0
	}

	.new_m_header header {
		display: block;
		width: 100%;
		height: 1.4rem;
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;
		vertical-align: middle;
		border-bottom: 1px solid #ccc;
		background-color: #f7f7f7;
		z-index: 100
	}

	.new_m_header i.returnBack {
		height: 1.4rem;
		line-height: 1.4rem;
		vertical-align: middle;
		background: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/500/tips_lj_green.bd07b77c2474c0608cb141b67f631258.png) no-repeat;
		background-size: .28rem .48rem;
		background-position: 50%;
		padding-left: 0;
		width: 1rem
	}

	.new_m_header header h3 {
		height: 100%;
		line-height: 1.4rem;
		vertical-align: middle;
		color: #333;
		overflow: visible;
		max-width: 70%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: auto;
		margin-right: auto;
		font-size: 18px
	}

	.new_m_header.studentcommentWrap header h3 {
		overflow: hidden
	}






	.header .icon_shouke {
		width: .493333rem;
		float: left;
		height: 100%;
		position: relative;
		margin-right: .2rem
	}

	.header .icon_shouke>b {
		position: absolute;
		width: .493333rem;
		height: .466667rem;
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
		background-position: -2.53333rem -2.94667rem;
		background-size: 5.73333rem 5.30667rem;
		top: 50%;
		margin-top: -.226667rem
	}

	.header .icon_honor {
		width: .466667rem;
		float: left;
		height: 100%;
		position: relative;
		margin-right: .2rem
	}

	.header .icon_honor>b {
		position: absolute;
		width: .466667rem;
		height: .466667rem;
		background: url(https://static.changingedu.com/static/assets/common/images/teacher/icon_honor.c164ed2de781b796676ca7da19b10d74.png) no-repeat;
		background-size: 100% 100%;
		top: 50%;
		margin-top: -.226667rem
	}

	.header .icon_selfdescription {
		width: .466667rem;
		float: left;
		height: 100%;
		position: relative;
		margin-right: .2rem
	}

	.header .icon_selfdescription>b {
		position: absolute;
		width: .466667rem;
		height: .466667rem;
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
		background-position: -1.66667rem -3.88rem;
		background-size: 5.73333rem 5.30667rem;
		top: 50%;
		margin-top: -.226667rem
	}

	.header .icon_comment {
		width: .466667rem;
		float: left;
		height: 100%;
		position: relative;
		margin-right: .2rem
	}

	.header .icon_comment>b {
		position: absolute;
		width: .466667rem;
		height: .466667rem;
		background-image: url(https://static.changingedu.com/static/assets/static/student/teachermsgnew/images/teacher_main.b582410083c6275fec5e27291b6c2795.png);
		background-position: -.8rem -3.88rem;
		background-size: 5.73333rem 5.30667rem;
		top: 50%;
		margin-top: -.226667rem
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

	.page_video .gif_wrap,
	.page_video .video_wrap {
		transform: translate(-50%, -50%);
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


	/* 红包结束 */

	/* 在线老师开始 */
</style>