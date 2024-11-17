<template>
  <div class="br8 bgc2 pt25 mt50 mh350 overh">
    <p class="pl25 pr25 fs18 lh25 mb30">您可能感兴趣</p>
    <div class="pl25 pr25" v-for="item in singInterest" :key="item.user_id">
      <div class="dfs mb20">
        <div class="h45 w45 br23 overh">
          <img v-if="item.user_photo" :src="item.user_photo" alt="">
          <img v-else src="@/assets/cart_images/6.jpg" alt="">
        </div>
        <div class="w160 ml12">
          <p class="fs16 lh22">{{ item.user_name }}</p>
          <p class="fs12 lh14 mt4 mb6 over">{{ item.user_company }}</p>
          <div class="w85 h23 br17 lh14 fs12 bd1 jcc"> + 加为好友 </div>
        </div>
      </div>
    </div>
  </div>
  <div class="jcc h38 bdt bgc2 br8">
    <p class="fs12">展开</p>
    <img class="w14 h10 ml10" src="@/assets/cart_images/6.jpg" alt="">
  </div>

</template>

<style scoped></style>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
onMounted(() => {
  getInterest(1)
})

const singInterest = ref([])
function getInterest() {
  axios.get('https://dev.ruzhi.com/api/user/interest', {
    params: {
      page_num: 1,
      page_size: 20,
      start_index: 23,
    }
  }).then(res => {
    if (res.status === 200 && res.data) {
      singInterest.value = res.data.list
      console.log(singInterest.value)
    }
  })
}

</script>
