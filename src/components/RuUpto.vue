<template>
  <div class="covers"></div>
  <div class="upto fdc w1000 h495 p16 bgc2">
    <div class="aij">
      <img class="h16 w16" src="@/assets/cart_images/6.jpg" alt="">
    </div>
    <div class="fdc pl20 pr20 pt10 pr">
      <p class="col5 fs38 mb40">如职 - 自由职业者平台</p>
      <input class="w386 h50 bd1 br5 pl11 pr11" type="tel" placeholder="请输入手机号">
      <input class="w386 h50 bd1 br5 mt20 mb20 pl11 pr11" type="number" placeholder="请输入验证码">
      <p class="pa topz180 lfz320 col3">获取验证码</p>
      <div class="aic">
        <input type="checkbox">
        <p class="ml5">同意遵守如职的《<a href="">用户协议</a>》、《<a href="">隐私政策</a>》</p>
      </div>
      <div class="jcc h46 w386 fs20 br30 bgc5 col4 mt30">登录/注册</div>
    </div>
  </div>
</template>

<style scoped>
.covers {
  position: absolute;
  z-index: 8;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0.2s;
  opacity: 0;
}

.upto {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: all 0.3s ease 0.2s;
  opacity: 0;
}
</style>

<script setup>

</script>
