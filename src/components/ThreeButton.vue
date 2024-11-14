<template>
  <button @click="emit('create')">create</button>
  <button @click="emit('update')">Update</button>
  <button @click="emit('del')">Delete</button>
</template>

<script setup>

const emit = defineEmits(['create', 'update', 'del'])

</script>




