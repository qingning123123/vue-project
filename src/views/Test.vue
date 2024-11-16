<script setup>
const list = ref([
  {
    title: '图',
    type: 'A',
    feed_id: 1,
  },
  {
    title: '图',
    type: 'A',
    feed_id: 1232323,
  },
  {
    title: '图',
    type: 'A',
    feed_id: 1232323,
  },
  {
    title: '文',
    type: 'B',
    feed_id: 2,
  },
  {
    title: '图文',
    type: 'C',
    feed_id: 23232323,
  },
  {
    title: '视频',
    type: 'D',
    feed_id: 2222323232323,
  },
])
</script>

<template>
  <div>
    <!-- 你的到，啊 -->
    <section>
      <!-- 图 -->
      <p>

      </p>
      <!-- 文 -->
      <p>

      </p>
      <!-- 图文 -->
      <p>

      </p>
      <!-- 视频 -->
      <p>
      </p>
    </section>


    <section>
      <div v-for="item in list" :key="item.feed_id">
        <p v-if="item.feed_type === 'A' || item.type === 'B'">
          图
        </p>
        <p v-else-if="item.feed_type === 'V'">
          图文
        </p>
        <p v-else-if="item.feed_type === 'Q'">
          视频
        </p>
      </div>
    </section>
  </div>
</template>
