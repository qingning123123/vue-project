<script setup>
import { computed, ref, watch } from 'vue'

const gridColumns = ref(['name', 'power'])
const gridData = ref([
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
])
const selected = ref('')  //选中的列
const search = ref('')  //搜索的内容
const ascendingOrder = ref(true)  //升序状态

//排序状态切换
const sortState = (value) => {
  if (selected.value === value) {
    ascendingOrder.value = !ascendingOrder.value
  } else {
    ascendingOrder.value = true
    selected.value = value
  }
}

//搜索+排序后的数组
const searchSortData = computed(() => {
  //搜索
  const searchData = gridData.value.filter((item) => {
    return item.name.toLowerCase().includes(search.value.toLowerCase()) || String(item.power).includes(search.value)
  })

  //排序
  return searchData.sort((a, b) => {
    if (selected.value === 'name') {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA > nameB) { return ascendingOrder.value ? 1 : -1 }
      if (nameA < nameB) { return ascendingOrder.value ? -1 : 1 }
      return 0
    } else if (selected.value === 'power') {
      return ascendingOrder.value ? a.power - b.power : b.power - a.power
    }
    return 0
  })
})
</script>

<template>
  <div>
    <div>
      Search
      <input type="text" v-model="search">
    </div>
    <h5 v-if="searchSortData.length === 0">No matches found</h5>
    <table v-else>
      <thead>
        <tr>
          <th v-for="(value, index) in gridColumns" :key="index" @click="sortState(value)"
            :class="{ color: selected === value }">
            {{ value }}
            <span class="arrow" :class="ascendingOrder && selected === value ? 'asc color' : 'dsc color'"></span>
          </th>
        </tr>
      </thead>
      <tr v-for="(value, index) in searchSortData" :key="index">
        <td>{{ value.name }}</td>
        <td>{{ value.power }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  width: 140px;
  height: 40px;
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
  opacity: 1;
}

.color {
  color: rgba(255, 255, 255, 1);
}

td {
  width: 140px;
  height: 40px;
  background-color: #f9f9f9;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

/* 向上三角形 */
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

/* 向下三角形 */
.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
