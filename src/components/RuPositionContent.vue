<template>
  <div class="fdc gap12" v-for="item in singPositionContent" :key="item.job_id">
    <!-- 职位1 任务 -->
    <div class="flex bgc2 br8 p16" v-if="item.job_type == '6'">
      <div class="w390">
        <div class="aic mb10">
          <p class="fs16 col1 maw240 over">{{ item.job_title }}</p>
          <div class="jcc w27 h17 col8 bd8 fs10 br3 ml7 br3">任务</div>
          <p class="ml7 col2 fs12" v-if="item.job_place">[{{ item.job_place }}]</p>
        </div>
        <div class="aic">
          <div class="aic col6 fs16 mr10">
            <p v-if="item.job_paymin">{{ item.job_paymin }}</p>
            <p v-if="item.job_paymin && item.job_paymax">-</p>
            <p v-if="item.job_paymax">{{ item.job_paymax }}</p>
            <span v-if="item.job_payper">{{ item.job_payper }}</span>
            <span v-else>K</span>
          </div>
          <div class="aic gap5">
            <div class="tag maw70" v-if="item.job_degree">{{ item.job_degree }}</div>
            <div class="tag maw70" v-if="item.job_workyears">{{ item.job_workyears }}</div>
            <div class="tag maw70" v-if="item.job_keyword">{{ item.job_keyword }}</div>
          </div>
        </div>
      </div>
      <div class="aic w290">
        <div class="w42 h42 br4 mr10">
          <img v-if="item.company_logo" :src="item.company_logo" alt="">
          <img v-else src="@/assets/cart_images/6.jpg" alt="">
        </div>
        <div>
          <p class="lh19 col7 maw156 over mb10 br3">{{ item.company_name }}</p>
          <div class="aic gap5">
            <div class="tag maw120" v-if="item.company_industry">{{ item.company_industry }}</div>
            <div class="tag maw120" v-if="item.company_size">{{ item.company_size }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 职位2 兼职 -->
    <div class="flex bgc2 br8 p16" v-else-if="item.job_type == '2'">
      <div class="w390">
        <div class="aic mb10">
          <p class="fs16 col1 maw240 over">{{ item.job_title }}</p>
          <div class="jcc w27 h17 col9 bd9 fs10 br3 ml7 br3">兼职</div>
          <p class="ml7 col2 fs12" v-if="item.job_place">[{{ item.job_place }}]</p>
        </div>
        <div class="aic">
          <div class="aic col6 fs16 mr10">
            <p v-if="item.job_paymin">{{ item.job_paymin }}</p>
            <p v-if="item.job_paymin && item.job_paymax">-</p>
            <p v-if="item.job_paymax">{{ item.job_paymax }}</p>
            <span>{{ item.job_payper }}</span>
          </div>
          <div class="aic gap5">
            <div class="tag maw70" v-if="item.job_degree">{{ item.job_degree }}</div>
            <div class="tag maw70" v-if="item.job_workyears">{{ item.job_workyears }}</div>
            <div class="tag maw70" v-if="item.job_keyword">{{ item.job_keyword }}</div>
          </div>
        </div>
      </div>
      <div class="aic w290">
        <div class="w42 h42 br4 mr10">
          <img v-if="item.company_logo" :src="item.company_logo" alt="">
          <img v-else src="@/assets/cart_images/6.jpg" alt="">
        </div>
        <div>
          <p class="lh19 col7 maw156 over mb10">{{ item.company_name }}</p>
          <div class="aic gap5">
            <div class="tag maw120" v-if="item.company_industry">{{ item.company_industry }}</div>
            <div class="tag maw120" v-if="item.company_size">{{ item.company_size }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 职位3 全职 -->
    <div class="flex bgc2 br8 p16" v-else-if="item.job_type == '1'">
      <div class="w390">
        <div class="aic mb10">
          <p class="fs16 col1 maw240 over">{{ item.job_title }}</p>
          <div class="jcc w27 h17 col10 bd10 fs10 br3 ml7 br3">全职</div>
          <p class="ml7 col2 fs12" v-if="item.job_place">[{{ item.job_place }}]</p>
        </div>
        <div class="aic">
          <div class="aic col6 fs16 mr10">
            <p v-if="item.job_paymin">{{ item.job_paymin }}</p>
            <p v-if="item.job_paymin && item.job_paymax">-</p>
            <p v-if="item.job_paymax">{{ item.job_paymax }}</p>
            <span>{{ item.job_payper }}</span>
          </div>
          <div class="aic gap5">
            <div class="tag maw70" v-if="item.job_degree">{{ item.job_degree }}</div>
            <div class="tag maw70" v-if="item.job_workyears">{{ item.job_workyears }}</div>
            <div class="tag maw70" v-if="item.job_keyword">{{ item.job_keyword }}</div>
          </div>
        </div>
      </div>
      <div class="aic w290">
        <div class="w42 h42 br4 mr10">
          <img v-if="item.company_logo" :src="item.company_logo" alt="">
          <img v-else src="@/assets/cart_images/6.jpg" alt="">
        </div>
        <div>
          <p class="lh19 col7 maw156 over mb10">{{ item.company_name }}</p>
          <div class="aic gap5">
            <div class="tag maw120" v-if="item.company_industry">{{ item.company_industry }}</div>
            <div class="tag maw120" v-if="item.company_size">{{ item.company_size }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 职位4 实习 -->
    <div class="flex bgc2 br8 p16" v-else-if="item.job_type == '3'">
      <div class="w390">
        <div class="aic mb10">
          <p class="fs16 col1 maw240 over">{{ item.job_title }}</p>
          <div class="jcc w27 h17 col9 bd9 fs10 br3 ml7 br3">实习</div>
          <p class="ml7 col2 fs12" v-if="item.job_place">[{{ item.job_place }}]</p>
        </div>
        <div class="aic">
          <div class="aic col6 fs16 mr10">
            <p v-if="item.job_paymin">{{ item.job_paymin }}</p>
            <p v-if="item.job_paymin && item.job_paymax">-</p>
            <p v-if="item.job_paymax">{{ item.job_paymax }}</p>
            <span>{{ item.job_payper }}</span>
          </div>
          <div class="aic gap5">
            <div class="tag maw70" v-if="item.job_degree">{{ item.job_degree }}</div>
            <div class="tag maw70" v-if="item.job_workyears">{{ item.job_workyears}}</div>
            <div class="tag maw70" v-if="item.job_keyword">{{ item.job_keyword }}</div>
          </div>
        </div>
      </div>
      <div class="aic w290">
        <div class="w42 h42 br4 mr10">
          <img v-if="item.company_logo" :src="item.company_logo" alt="">
          <img v-else src="@/assets/cart_images/6.jpg" alt="">
        </div>
        <div>
          <p class="lh19 col7 maw156 over mb10">{{ item.company_name }}</p>
          <div class="aic gap5">
            <div class="tag maw120" v-if="item.company_industry">{{ item.company_industry }}</div>
            <div class="tag maw120" v-if="item.company_size">{{ item.company_size }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag {
  color: #666666;
  font-size: 12px;
  line-height: 16px;
  background-color: #f5f7f9;
  padding: 3px 9px;
  border-radius: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<script setup>
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
const searchKeyword = ref('')  // 搜索关键字

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
