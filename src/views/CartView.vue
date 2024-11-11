<script setup>
import { computed, ref, watch } from 'vue'

const goodsList = ref([
  {
      name: "Casio/卡西欧 EX-TR350",
      img: "Casio-1.jpg",
      price: 1,
      num: 1,
      id: Math.random(),
      checked: false,
    },
    {
      name: "Canon/佳能 powerShotSX50 HS",
      img: "Canon-2.jpg",
      price: 2,
      num: 1,
      id: Math.random(),
      checked: false,
    },
    {
      name: "Sony/索尼 DSC-WX300",
      img: "Sony-3.jpg",
      price: 3,
      num: 1,
      id: Math.random(),
      checked: false,
    },
    {
      name: "Fujifi1m/富士 instax mini 25",
      img: "Fujifi1m-4.jpg",
      price: 4,
      num: 1,
      id: Math.random(),
      checked: false,
    },
    {
      name: "康奈尔ssr-p",
      img: "ssr-5.jpg",
      price: 5,
      num: 1,
      id: Math.random(),
      checked: false,
    }
])

const selectAll = ref(false)
const showSelected = ref(false)

//数量减
const red = (item) => {
  if (item.num > 1) {
    return item.num--
  }
}

//删除
const del = (id) => {
  const index = goodsList.value.findIndex((item => item.id === id))
  if (index !== -1) {
    goodsList.value.splice(index, 1)
  }
}

// 全选/取消全选
const getAllSelect = () => {
  goodsList.value = goodsList.value.map(item =>({...item , checked: selectAll.value}))
}

//单个复选框监听
watch(goodsList , (item) => {
  selectAll.value = goodsList.value.every(item => item.checked)
}, { deep: true })

// 获取选中商品的信息
const selectedGoods = computed(() => {
  return goodsList.value.filter(item => item.checked)
})

//计算总价
const SumUp = computed(() => {
  return selectedGoods.value.reduce((total,item) => total + item.price * item.num, 0)
})

// 计算选中的商品数量
const getTotality = computed(() => {
  return selectedGoods.value.reduce((total,item) => total + item.num, 0)
})

// 删除选中商品
const deleteSelected = () => {
  goodsList.value = goodsList.value.filter(item => !item.checked)
}

//弹窗
const informationPopup = ref(false)  //弹窗状态
const currentProduct = ref(null)  //新增？修改

//新商品信息
const newProduct = ref({
  name: '',
  img: '',
  price: '',
  num: '',
  id: Math.random(),
  checked: false
})

//清空弹窗信息
const resetForm = () => {
  newProduct.value = { name: '', img: '', price: '', num: '', id: Math.random(), checked: false }
};

// 打开新增商品弹窗
const openAddPopup = () => {
  informationPopup.value = true
  currentProduct.value = 1
  resetForm()
}

// 打开编辑商品弹窗
const openEditPopup = (product) => {
  informationPopup.value = true
  currentProduct.value = 2
  newProduct.value = { ...product }
}

// 取消-关闭商品弹窗
const closePopup = () => {
  informationPopup.value = false
  resetForm()
}

// 计算表单是否完整
const isFormComplete = computed(() => {
  return newProduct.value.name && newProduct.value.img && newProduct.value.price && newProduct.value.num
})

// 保存商品（新增或修改）
const saveProduct = () => {
  if (isFormComplete.value) {
    if (currentProduct.value === 2) {  // 更新商品
      const index = goodsList.value.findIndex(item => item.id === newProduct.value.id)
        goodsList.value[index] = { ...newProduct.value }
    } else {  // 新增商品
      newProduct.value.id = Math.random()
      goodsList.value.push({ ...newProduct.value })
    }
    closePopup()
  }
}

</script>

<template>
  <div>
    <button :disabled="getTotality === 0" @click="deleteSelected">删除</button>
    <button @click="openAddPopup">新增</button>
    <table>
      <thead>
        <tr>
          <th>全选</th>
          <th>商品</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tr v-for="(value,index) in goodsList" :key="index">
        <td><input type="checkbox" v-model="value.checked"></td>
        <td>
          <img :src="'../assets/cart_images/' + value.img">
          {{ value.name }}
        </td>
        <td>{{ value.price }}</td>
        <td>
          <button @click="red(value)">-</button>
          {{ value.num }}
          <button @click="value.num++">+</button>
        </td>
        <td>{{value.price * value.num}}</td>
        <td>
          <button @click="del(value.id)">删除</button>
          <button @click="openEditPopup(value)">编辑</button>
        </td>
      </tr>
    </table>
    <div>
      <button>合计：{{SumUp}}</button>
      <input type="checkbox" v-model="selectAll" @change="getAllSelect">全选
      <button :disabled="getTotality === 0" @click="showSelected = !showSelected">
        已选择{{getTotality}}件商品
        <span v-if="showSelected">⬇️</span>
        <span v-else>⬆️</span>
      </button>

      <!-- 显示选中的商品信息 -->
      <div v-if="showSelected" class="selected-goods">
        <ul>
          <li v-for="item in selectedGoods" :key="item.id">
            <img :src="'../assets/cart_images/' + item.img" alt="">
            <button @click="item.checked = false">取消选择</button>
          </li>
        </ul>
      </div>
    </div>
        <!-- 弹窗 -->
    <div v-if="informationPopup" class="popUp">
      <div>
        名称：<input type="text" v-model="newProduct.name">
      </div>
      <div>
        图片：<input type="text" v-model="newProduct.img">
      </div>
      <div>
        单价：<input type="number" v-model="newProduct.price">
      </div>
      <div>
        数量：<input type="number" v-model="newProduct.num">
      </div>
      <div>
        <button @click="closePopup">取消</button>
        <button @click="saveProduct" :disabled="!isFormComplete">确定</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  position: relative;
  height: 100vh;
  font-family: PingFangSC-Regular, PingFang SC;
  background: #fff;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  flex-direction: column;
}
.popUp {
  position: absolute;
  top: 23%;
  left: 6%;
  width: 500px;
  height: 350px;
  padding-top: 100px;
  text-align: center;
  line-height: 50px;
  background: #f2f2f2;
  border-radius: 4px;
  border: 1px solid #333;
  z-index: 999;

  .btn {
    display: flex;
    justify-content: end;
    margin-right: 140px;

    .btn_sure {
      display: block;
      margin-left: 5px;
    }
    .btn_sure_two {
      display: block;
      margin-left: 5px;
    }
  }
}

table {
  width: 780px;
  margin-bottom: 25px;
  text-align: left;
  border-collapse: collapse;

  td,
  th {
    padding: 10px;
    border: 1px solid #333;
  }

  thead tr {
    height: 40px;
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  input {
    width: 40px;
    margin: 0 5px;
  }

  .check {
    width: 20px;
  }

  .edit {
    margin-left: 5px;
  }
}

.up {
  display: none;
}

.down {
  display: inline-block;
}

.foot {
  display: none;

  ul {

    li {

      img {
        width: 100px;
        height: 100px;
      }

      .del {
        display: block;
      }
    }
  }
}

.show {
  display: block;
}


</style>
