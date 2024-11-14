<template>
  <input type="text" :value="modelValue" @input="test" placeholder="Filter prefix">
</template>

<script setup>

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: String,
  selected: String,
})

function test(e) {
  emit('update:modelValue', e.target.value)
}

</script>
