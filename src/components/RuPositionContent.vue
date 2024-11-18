<template>
  <div class="fdc gap12" v-for="item in props.content" :key="item.job_id">
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
const props = defineProps({
  content: Array,
})

console.log(props.content)


</script>
