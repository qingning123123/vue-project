<template>
  <div class="br8 mt12 bgc2 pt25">
    <p class="pl25 pr25 fs18 lh25">活动推荐</p>
    <ul class="fdc gap15 fs14 p25">
      <li class="jsc" v-for="item in singRecommend" :key="item.event_id">
        <p class="w180 over">{{ item.event_name }}</p>
        <p class="col3">查看</p>
      </li>
    </ul>
    <div class="jcc h38 bdt">
      <p class="fs12">展开</p>
      <img class="w14 h10 ml10" src="@/assets/cart_images/6.jpg" alt="">
    </div>
  </div>

</template>

<style scoped></style>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
onMounted(() => {
  getRecommend(1)
})

const singRecommend = ref([])
function getRecommend() {
  axios.get('https://dev.ruzhi.com/api/event/homepage', {
    params: {
      page_size: 3,
      page_num: 1,
    }
  }).then(res => {
    if (res.status === 200 && res.data) {
      singRecommend.value = res.data.list
      console.log(singRecommend.value)
    }
  })
}

</script>
