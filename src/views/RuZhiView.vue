<script setup>
import BoxTop from '@/components/BoxTop.vue'
import RuPublish from '@/components/RuPublish.vue'
import RuNavigation from '@/components/RuNavigation.vue'
import RuEvents from '@/components/RuEvents.vue'
import RuInterest from '@/components/RuInterest.vue'
import RuContent from '@/components/RuContent.vue'
import RuUpto from '@/components/RuUpto.vue'

</script>

<template>
  <div class="box fjs">
    <!-- 头部 -->
    <BoxTop></BoxTop>
    <!-- 主体 -->
    <div class="main f1 w mt25">
      <!-- 左侧 -->
      <div class="w720 mr20 fdc gap10 lh26">
        <!-- 发布动态 -->
        <RuPublish></RuPublish>
        <!-- 导航 -->
        <RuNavigation></RuNavigation>
        <!-- 内容 -->
        <RuContent></RuContent>
      </div>
      <!-- 右侧 -->
      <div class="w260">
        <!-- 感兴趣 -->
        <RuInterest></RuInterest>
        <!-- 活动推荐 -->
        <RuEvents></RuEvents>
        <!-- 关于我们 -->
        <div class="fs12 mt60 col2">
          <div class="dfw lh20 mb40">
            <a class="mr40" href="">关于我们</a>
            <a class="mr40" href="">关于我们</a>
            <a href="">关于我们</a>
            <a class="mr40" href="">关于我们</a>
            <a class="mr40" href="">关于我们</a>
            <a href="">关于我们</a>
          </div>
          <div>
            <p class="mb15">
              <span class="mr10">版权所有© 2024</span>
              <span>北京如职科技有限公司</span>
            </p>
            <p>京ICP备2023003445号-1</p>
          </div>
        </div>
      </div>
    </div>
    <RuUpto></RuUpto>
  </div>
</template>

<style lang="scss" scoped></style>
