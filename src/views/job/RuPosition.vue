<script setup>
import BoxTop from '@/components/BoxTop.vue'
import RuPositionSearch from '@/views/job/components/RuPositionSearch.vue'
import RuPositionContent from '@/views/job/components/RuPositionContent.vue'
import RuAbout from '@/components/RuAbout.vue'
import RuPositionPlacard from '@/views/job/components/RuPositionPlacard.vue'

import axios from 'axios'
import { onMounted, onUnmounted, ref } from 'vue'
onMounted(() => {
  getPositionContent(1)
  window.addEventListener('scroll', handleScroll) // 监听滚动事件
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // 组件卸载时移除监听
})

const singPositionContent = ref([])
const pageNum = ref(1) // 当前页码

// 搜索关键字
// const searchKeyword = ref('')  // 搜索关键字

function getPositionContent() {
  axios.get('//dev.ruzhi.com/api/job/web/square/list', {
    params: {
      page_num: pageNum.value,
      page_size: 10,
    }
  }).then(res => {
    if (res.status === 200 && res.data) {
      singPositionContent.value = [...singPositionContent.value, ...res.data.list] // 追加新数据
    }
  })
}
//页码增加，数据更新函数
function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY  //当前滚动位置
  const bottomPosition = document.querySelector('.main').offsetHeight  //页面底部位置
  if (scrollPosition >= bottomPosition - 10) {
    pageNum.value += 1 // 增加页码
    getPositionContent() // 获取下一页数据
  }
}


</script>

<template>
  <div class="box fjs">
    <!-- 头部 -->
    <BoxTop></BoxTop>
    <!-- 海报 -->
    <RuPositionPlacard></RuPositionPlacard>
    <!-- 主体 -->
    <div class="main f1 w mt12">
      <!-- 左侧 -->
      <div class="w720 mr20 fdc gap10 lh26">
        <!-- 搜索 -->
        <RuPositionSearch></RuPositionSearch>
        <!-- 岗位内容 -->
        <RuPositionContent :content="singPositionContent"></RuPositionContent>
      </div>
      <!-- 右侧 -->
      <div class="w260">
        <!-- 发布任务 -->
        <div class="jcc h70 bgc2 br8">
          <p class="mr10">想招人/发布任务？</p>
          <div class="jcc w79 h30 fs12 br17 bd2 col3">发布职位</div>
        </div>
        <!-- 关于我们 -->
        <RuAbout></RuAbout>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
