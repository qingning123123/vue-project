<template>
  <button @click="red" :disabled="modelValue < 2">-</button>
  <input type="text" @input="test" :value="modelValue">
  <button @click="add">+</button>
</template>

<script setup>

const props = defineProps({
  modelValue: Number,
})

const emit = defineEmits(['update:modelValue', 'red', 'add'])

function test(e) {
  emit('update:modelValue', e.target.value)
}

function red() {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue -1 )
  }
}

function add() {
  emit('update:modelValue', props.modelValue + 1)
}

</script>
