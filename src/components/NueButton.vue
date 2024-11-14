<template>
  <button @click="test">{{ modelValue }}测试</button>
</template>

<script setup>
const props =defineProps({
  searchName: Number,
  color: String,
  modelValue: Number,
})
const emit = defineEmits(['update:modelValue', 'update'])

function test() {
  emit('update:modelValue', props.modelValue + 2)
}

</script>
