<script setup>
import BoxTop from '@/components/BoxTop.vue'
import RuPositionSearch from '@/components/RuPositionSearch.vue'
import RuPositionCity from '@/components/RuPositionCity.vue'
import RuPositionType from '@/components/RuPositionType.vue';
import RuPositionContent from '@/components/RuPositionContent.vue';

</script>

<template>
  <div class="box fjs">
    <!-- 头部 -->
    <BoxTop></BoxTop>
    <!-- 海报 -->
    <img class="w h117 mt75" src="@/assets/cart_images/placard.png" alt="">
    <!-- 主体 -->
    <div class="main f1 w mt12">
      <!-- 左侧 -->
      <div class="w720 mr20 fdc gap10 lh26">
        <!-- 搜索 -->
        <div class="br8 bgc2 pt20 pb20 pr25 pl25">
          <RuPositionSearch v-model="searchKeyword"></RuPositionSearch>
          <!-- 城市 -->
          <RuPositionCity></RuPositionCity>
          <!-- 类型 -->
          <RuPositionType></RuPositionType>
        </div>
        <!-- 岗位内容 -->
        <RuPositionContent></RuPositionContent>

       </div>
          <!-- 右侧 -->
          <div class="w260">
            <!-- 发布任务 -->
            <div class="jcc h70 bgc2 br8">
              <p class="mr10">想招人/发布任务？</p>
              <div class="jcc w79 h30 fs12 br17 bd2 col3">发布职位</div>
            </div>
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
    </div>
</template>

<style lang="scss" scoped></style>
