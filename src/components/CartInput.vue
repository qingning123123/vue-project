<template>
  <button @click="emit('red', modelValue)" :disabled="modelValue < 2">-</button>
  <input type="text" @input="test" :value="modelValue">
  <button @click="emit('add', modelValue)">+</button>
</template>

<script setup>

defineProps({
  modelValue: Number,
})

const emit = defineEmits(['update:modelValue', 'red', 'add'])

function test(e) {
  emit('update:modelValue', e.target.value)
}

</script>
