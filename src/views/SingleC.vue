<script setup>
import { computed, ref, watch } from 'vue'
import ThreeButton from '@/components/ThreeButton.vue';
const names = ref(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])

const search = ref('') //搜索的内容
const first = ref('') //Name的内容
const last = ref('') //Surname的内容
const selected = ref('') //选中的选项
//筛选
const filterNames = computed(() => {
  return names.value.filter((item) =>
    item.toLowerCase().substr(0, search.value.length) === search.value.toLowerCase()
  )
})

watch(selected, (name) => {
  if (name) {
    [last.value, first.value] = name.split(', ')
  }
})

//有内容
const hasContent = () => {
  return last.value.trim() && first.value.trim()
}

//添加
const create = () => {
  if (hasContent()) {
    const addName = `${last.value},${first.value}`
    if (!names.value.includes(addName)) {
      names.value.push(addName)
      last.value = first.value = ''
      selected.value = addName
    }
  }
}

//删除
const del = () => {
  if (selected.value) {
    const index = names.value.findIndex((name) => name === selected.value)
    if (index !== -1) {
      names.value.splice(index, 1)
      selected.value = last.value = first.value = ''
    }
  }
}

//修改
const update = () => {
  if (selected.value && hasContent()) {
    const index = names.value.indexOf(selected.value)
    if (index !== -1) {
      selected.value = `${last.value}, ${first.value}`
      names.value.splice(index, 1, selected.value)
    }
  }
}
</script>

<template>
  <div class="dif">
    <input type="text" placeholder="Filter prefix" v-model="search">
    <div class="flex">
      <select v-model="selected">
        <option v-for="(value, index) in filterNames" :key="index">{{ value }}</option>
      </select>
      <div class="dif">
        Name:
        <input type="text" v-model="first">
        Surname:
        <input type="text" v-model="last">
      </div>
    </div>
    <div>
      <button @click="create">create</button>
      <button @click="update">Update</button>
      <button @click="del">Delete</button>
    </div>
    <ThreeButton @create="create" @update="update" @del="del"></ThreeButton>
  </div>

</template>

<style>
.dif {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
  align-items: center;
}

input {
  width: 200px;
  margin: 0 10px 10px;
}

select {
  width: 200px;
  height: 30px;
  margin: 10px;
}


</style>
