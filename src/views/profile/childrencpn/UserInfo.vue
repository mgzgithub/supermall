<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <span class="privateImage-svg left">
        <img src="~assets/img/profile/user.png" class="userimg">
      </span>
          
      <div class="login-info left">
        <div>登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" class="profile-minicon">暂无绑定手机号
        </div>
      </div>
    </a>
  </div>
</template>

<script>
	export default {
		name: "UserInfo",
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: 40px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  .userimg{
    width: 34px;
    height: 34px;
    margin-left: 13px;
    margin-top: 13px;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    padding-right: 5px;
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  .profile-minicon{
    position: relative;
    top: 10px;
    width: 20px;
    height: 30px;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>
