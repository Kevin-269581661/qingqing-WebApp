<template>
   <div  class="wrapper">
       <div  class="wrapper-top">
           <div class="head">
               <div class="title">
                   <router-link to="/goodteacher">
                    <p class="title-r">我是老师</p></router-link>

                </div> 
                <div  class="logo"></div> 
                <div class="content">
                    <div class="item">
                        <div class="icon">
                            <img src="https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-computer.af4fea77f734b7fed585356c282f9d9a.png">
                          </div> 
                            <div class="teaching-class">
                                <div>上门、在线</div>
                                <div>两种授课方式</div>
                            </div>
                        </div>
                        <div class="item">
                            <div  class="icon">
                                <img src="https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-people.60a0433d2e0fb45de0071d51dfe373e9.png">
                              </div> 
                              <div class="teaching-class">
                                  <div >300个重点</div>
                                 <div >城市覆盖</div>
                              </div>
                                </div>
                                 <div  class="item">
                                     <div  class="icon">
                                     <img  src="https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-crown.49e8c0aa40ef003c46205edaedf190e4.png">
                                    </div>
                                     <div class="teaching-class">
                                        <div >5万名师</div> 
                                        <div >平均9年教龄</div>
                                     </div>
                                  </div>
                                </div>
                              </div> 
                              <div  class="form-login">
                                <div  class="form-group">
                                        <div  class="icon icon-phone"></div> 
                                        <input type="tel" maxlength="11" placeholder="输入手机号码" class="form-item phone">
                                    </div> 
                                    <div  class="form-group abs">
                                        <div class="icon icon-imgcode"></div> 
                                 <input  type="text" placeholder="请输入图片验证码" class="form-item imgcode"> 
                                <div  class="btn-imgcode">
                         <img  src=""></div>
                      </div>
                      <div  class="form-group">
                      <div  class="icon icon-captchacode">

                </div> 
               <input  type="text" maxlength="6" placeholder="输入6位验证码" class="form-item captchacode"> 
               <div  class="btn-captchacode disable" data-logdata="{&quot;actioncode&quot;:&quot;c_login_getcode&quot;}">
          获取验证码
        </div>
       </div> <!----> 
       <div  class="agreement">
        未注册手机登录后将自动注册，注册即同意 
            <span  class="color-green">《服务协议》</span>
            <span class="color-green">《承诺声明书》</span> 
            <span  class="color-green">《隐私权政策》</span> 
           <span  class="color-green">《老师行为规范》</span>
      </div> 
       <div class="btn-sign" data-logdata="{&quot;actioncode&quot;:&quot;login_submit_btn&quot;}">
        登录
      </div>
    </div>
   </div> 
 </div>
 </div>
</template>
<script>
  
</script>
<style>
   
   .wrapper{
  color: #fff;
  font-size: 12px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
 justify-content: space-between;
}
.wrapper .head{
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/bg.ea523cd5db23221e4c0c2b2fa3a99932.png) no-repeat center;
  -webkit-background-size: cover;
          background-size: cover;
  height: 5.333333rem;
}
.wrapper .head .title{
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.213333rem 0.533333rem 0;
}
.wrapper .head .logo {
  height: 0.72rem;
  width: 100%;
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/logo.76f5a4cb530d1fbc08ff15f1f8cd3505.png) no-repeat center;
  background-size: auto 100%;
}
.wrapper .head .content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
  margin-top: 0.533333rem;
}
.wrapper .head .content .item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper .head .content .item > p {
  font-size: 13px;
}
.wrapper .head .content .item .icon{
  width: 0.853333rem;
  height: 0.853333rem;
  margin-bottom: 0.133333rem;
}
.wrapper .head .content .item .icon img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.wrapper .form-login{
  padding: 0.666667rem 0.853333rem;
}
.wrapper .form-login .form-group {
  border-bottom: 1px solid #efefef;
  height: 1.2rem;
  display: flex;
  align-items: center;
}
.wrapper .form-login .form-group.abs {
  position: absolute;
  left: -999px;
  top: -999px;
}
.wrapper .form-login .form-group .form-item {
  margin-left: 0.266667rem;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 15px;
}
.wrapper .form-login .form-group .btn-captchacode {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 2.666667rem;
  height: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #23cd77;
  color: #23cd77;
  margin-left:0.2rem;
  margin-top:-0.3rem;

}
.wrapper .form-login .form-group .btn-captchacode.disable {
  border-color: #cccccc;
}
.teaching-class{
  color:#999999;
  display: inline;
  justify-content: space-between;
 

}
.wrapper .form-login .form-group .btn-imgcode {
  width: 2.8rem;
  height: 0.88rem;
  overflow: hidden;
}
.wrapper .form-login .form-group .btn-imgcode img {
  width: 100%;
  height: auto;
}
.wrapper .form-login .form-group .icon {
  display: flex;
  flex-shrink: 0;
  padding: 1px;
  width: 0.533333rem;
  height: 0.533333rem;
}
.wrapper .form-login .form-group .icon-phone {
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-account.9fbcf6854b586c3a3b90ce004de1a399.png) no-repeat center center;
  background-size: 100%;
  margin-bottom: 15px;
}
.wrapper .form-login .form-group .icon-imgcode {
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-imgcode.14b0fcce0975fe047303785e837eaafb.png) no-repeat center center;
  background-size: 100%;
}
.wrapper .form-login .form-group .icon-captchacode{
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-capcode.2ab8e980193ee6813b74125b7f287aa2.png) no-repeat center center;
  background-size: 100%;
  margin-bottom: 15px;
}
.wrapper .form-login .form-group .icon-invitecode{
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-msg.99f2def684c19d928e5931859f4ed1c3.png) no-repeat center center;
  background-size: 100%;
}
.wrapper .form-login .form-group .icon-help{
  background: url(https://static.changingedu.com/static/assets/static/mwebsite/login/js/images/icon/icon-help.143ec04f351c0dce5415783d7dda1e15.png) no-repeat center center;
  background-size: 0.4rem 0.4rem;
  height: 100%;
}
.wrapper .form-login .agreement {
  color: #999999;
}
.wrapper .form-login .agreement .color-green {
  color: #23cd77;
}
.wrapper .form-login .btn-sign{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.666667rem;
  font-size: 18px;
  letter-spacing: 0.133333rem;
  color: #fff;
  padding: 0.346667rem 0;
  background: linear-gradient(-180deg, #31d991 0%, #34dc96 100%);
  border-radius: 50px;
  width: 100%;
}
.wrapper .form-login .btn-sign.disable {
  background: #cccccc;
}
.wrapper .copyright{
  width: 100%;
  z-index: 1;
  text-align: center;
  color: #cccccc;
}
.wrapper .copyright > p {
  margin-bottom: 0.266667rem;
}
</style>
