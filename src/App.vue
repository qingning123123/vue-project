<script setup>
import { ref } from 'vue'
import Pue from '@/components/Pue.vue'

const searchName = ref(0)

</script>

<template>
  <div>
    <Pue v-model="searchName"></Pue>
  </div>

</template>

