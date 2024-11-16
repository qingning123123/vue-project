<template>
  <div v-for="item in ruarticleList.list" :key="item.feed_id">
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
import ruarticleList from '@/views/ruarticleList';

</script>
