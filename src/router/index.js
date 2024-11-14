import { createRouter, createWebHistory } from 'vue-router'
import ModuleView from '../views/ModuleView.vue'
import TodoView from '../views/TodoView.vue'
import CartView from '../views/CartView.vue'
import SingleChoiceView from '../views/SingleChoiceView.vue'
import SingleC from '../views/SingleC.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/module',
      component: ModuleView,
    },
    {
      path: '/todo',
      component: TodoView,
    },
    {
      path: '/cart',
      component: CartView,
    },
    {
      path: '/sing',
      component: SingleChoiceView,
    },
    {
      path: '/sing2',
      component: SingleC,
    }
  ],
})


export default router
