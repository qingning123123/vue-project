<script setup>
import BoxTop from '@/components/BoxTop.vue'
import RuAbout from '@/components/RuAbout.vue'
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
        <RuAbout></RuAbout>
      </div>
    </div>
    <RuUpto></RuUpto>
  </div>
</template>

<style lang="scss" scoped></style>
