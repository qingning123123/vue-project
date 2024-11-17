<template>
  <div v-for="item in singleQtList" :key="item.feed_id">
    <!-- 图文A -->
    <div class="bgc2 br8 pr25 pt25 pl25 pb12" v-if="item.feed_type === 'A'">
      <div class="jsc">
        <h4 class="over">{{ item.feed_title }}</h4>
        <img class="w17 h3" src="@/assets/cart_images/6.jpg" alt="">
      </div>
      <div class="dfs gap12 mh105 mt10 mb10">
        <img class="h105 w190" v-if="item.feed_media" :src="item.feed_media" alt="">
        <p class="overs4">{{ item.feed_text }}</p>
      </div>
      <div class="aic gap100 fs13">
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_like }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_comment }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>分享</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>收藏</p>
        </div>
      </div>
    </div>
    <!-- 视频V -->
    <div class="bgc2 br8 pr25 pt25 pl25 pb12" v-else-if="item.feed_type === 'V'">
      <div class="jsc">
        <h4 class="over">{{ item.feed_title }}</h4>
        <img class="w17 h3" src="@/assets/cart_images/6.jpg" alt="">
      </div>
      <div class="mt10 mb10">
        <video class="w670 h378">
          <source :src="item.feed_media">
        </video>
        <p class="mt10 overs4">{{ item.feed_text }}</p>
      </div>
      <div class="aic gap100 fs13">
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_like }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_comment }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>分享</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>收藏</p>
        </div>
      </div>
    </div>
    <!-- 带图的提问Q -->
    <div class="bgc2 br8 pr25 pt25 pl25 pb12" v-else-if="item.feed_type === 'Q'">
      <div class="jsc">
        <h4 class="over">{{ item.feed_title }}</h4>
        <img class="w17 h3" src="@/assets/cart_images/6.jpg" alt="">
      </div>
      <div class="dfs gap12 mh105 mt10 mb10">
        <img class="h105 w190" v-if="item.feed_media" :src="item.feed_media" alt="">
        <p class="overs4">{{ item.feed_text }}</p>
      </div>
      <div class="aic gap100 fs13">
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_like }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>{{ item.feed_comment }}</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>分享</p>
        </div>
        <div class="aic">
          <img class="h17 w17 mr10" src="@/assets/cart_images/6.jpg" alt="">
          <p>收藏</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import axios from 'axios'
import { onMounted, onUnmounted, ref } from 'vue'
onMounted(() => {
  getQtList(1)
  window.addEventListener('scroll', handleScroll) // 监听滚动事件
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // 组件卸载时移除监听
})

const singleQtList = ref([])
const pageNum = ref(1) // 当前页码

function getQtList() {
  axios.get('https://dev.ruzhi.com/api/feed/list/recommend', {
    params: {
      page_num: pageNum.value,
      page_size: 10,
      start_index: 16,
    }
  }).then(res => {
    if (res.status === 200 && res.data) {
      singleQtList.value = [...singleQtList.value, ...res.data.list] // 追加新数据
      console.log(singleQtList.value)
    }
  })
}
//页码增加，数据更新函数
function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY  //当前滚动位置
  const bottomPosition = document.documentElement.offsetHeight  //页面底部位置

  if (scrollPosition >= bottomPosition - 10) {
    pageNum.value += 1 // 增加页码
    getQtList() // 获取下一页数据
  }
}
</script>
