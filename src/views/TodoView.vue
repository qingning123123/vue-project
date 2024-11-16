<script setup>
import { computed, ref, watch } from 'vue'

const todoList = ref(JSON.parse(localStorage.getItem('todoList')) || [
  {
    text: '明天去洗澡',
    completed: false, //完成状态
    pinned: false,  //置顶状态
    editing: false  //编辑状态
  },
  {
    text: '早上跑步',
    completed: true,
    pinned: false,
    editing: false
  },
  {
    text: '下午看完视频',
    completed: false,
    pinned: false,
    editing: false
  },
  {
    text: '晚上跑步',
    completed: false,
    pinned: false,
    editing: false
  }
])
const searchTodo = ref('')  //搜索内容
const newTodo = ref('')  //新增内容
//修改完成状态
const complete = (value)=> {
  value.completed = !value.completed
}

//全部all
const allEvents = computed(() =>  todoList.value.filter(item => item.text.includes(searchTodo.value.trim())))

//完成数 com
const completionEvents = computed(() =>  todoList.value.filter(item => item.completed && item.text.includes(searchTodo.value.trim())))

//未完成 unf
const unfinishedEvents = computed(() =>  todoList.value.filter(item => !item.completed && item.text.includes(searchTodo.value.trim())))

//新增
const addTodo = () => {
  if (newTodo.value.trim()) {
    todoList.value.push({
      text: newTodo.value.trim(),
      completed: false,
      pinned: false,
      editing: false
    })
    newTodo.value = ""
  }
}

//添加active类
const status = ref('all')
const get_red = (item) => {
  status.value = item
}

//筛选后展示内容
const filterTodoList = computed(() => {
  return allEvents.value.filter(item => {
    return status.value === 'com' ? item.completed : status.value === 'unf' ? !item.completed : true
  }).sort((a, b) => b.pinned - a.pinned)
})

//删除
const del = (index) => {
  todoList.value.splice(index, 1)
  if (todoList.value.length === 0) {
    todoList.value = [
      {
        text: '明天去洗澡',
        completed: false,
        pinned: false,
        editing: false
      },
      {
        text: '早上跑步',
        completed: true,
        pinned: false,
        editing: false
      },
      {
        text: '下午看完视频',
        completed: false,
        pinned: false,
        editing: false
      },
      {
        text: '晚上跑步',
        completed: false,
        pinned: false,
        editing: false
      }
    ]
  }
}

//点击后置顶状态修改
const pin = (item) => {
  item.pinned = !item.pinned
}

//双击改变editing 状态
const editr = (item) => {
  item.editing = !item.editing
}

//修改后保存并修改编辑状态
const offEditr = (item) => {
  item.editing = !item.editing
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
}

//深度监听数组并存储
watch(todoList, (newvalue) => {
  localStorage.setItem('todoList', JSON.stringify(newvalue))
},{deep:true})

</script>

<template>
  <div>
    <div>
      <p @click="get_red('all')" :class="{active: status === 'all' }">总全部：{{allEvents.length}}</p>
      <p @click="get_red('com')" :class="{active: status === 'com' }">已完成: {{completionEvents.length}}</p>
      <p @click="get_red('unf')" :class="{active: status === 'unf' }">未完成：{{unfinishedEvents.length}}</p>
    </div>
    <input type="text" placeholder="新建待办事项" v-model.trim="newTodo" @keyup.enter="addTodo">
    <input type="text" placeholder="搜索待办事项"  v-model.trim="searchTodo">
    <ul>
      <h3 v-if="filterTodoList.length === 0">暂无数据</h3>
      <li v-for="(value,index) in filterTodoList" :key="index" v-else>
        <p v-if="!value.editing" @dblclick="editr(value)" @click="complete(value)" :class="{completed: value.completed}">{{ value.text }}</p>
        <input v-else type="text" v-model="value.text" @keyup.enter="offEditr(value)" @blur="offEditr(value)">
        <button @click.stop="del(index)">删除</button>
        <button @click.stop="pin(value)">置顶</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}

.active {
  color: red;
}
</style>
