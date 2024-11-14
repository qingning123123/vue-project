<template>
  <!-- <p>子组件 {{ modelValue }}</p>
  <button @click="add">add</button> -->
  <input type="text" :value="modelValue"  @input="test">
  <input type="text" :value="lastName" @input="(e) => emit('update:lastName', e.target.value)">
</template>

<script setup>
defineProps({
  modelValue: Number,
  lastName: Number,
})

const emit = defineEmits(['update:modelValue', 'update:lastName'])

function test(e) {
  emit('update:modelValue', e.target.value)
}
// function add() {
//   emit('update:modelValue', props.modelValue +1)
// }
</script>
