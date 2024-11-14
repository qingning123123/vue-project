<script setup>
import NueButton from './NueButton.vue'

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: Number,
})

function updateModel(e) {
  emit('update:modelValue', e)
}
</script>

<template>
  <!-- 事件名叫 update:modelValue，属性名叫 modelValue，就能简写 v-model -->
  <NueButton :modelValue="modelValue" @update:modelValue="updateModel"></NueButton>

</template>
