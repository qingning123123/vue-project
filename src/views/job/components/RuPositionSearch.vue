<template>
  <div class="br8 bgc2 pt20 pb20 pr25 pl25">
    <div class="jsc h49 bgc6 br8 overh">
      <input :value="modelValue" class="f1 h43 br8 ml3 pl10 pr10" type="text" placeholder="搜索职位或任务名称">
      <button class="w102 h47 fs20 lh47 bgc6" @click="test">搜索</button>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

function test() {
  emit('update:modelValue', props.modelValue)
}

</script>
