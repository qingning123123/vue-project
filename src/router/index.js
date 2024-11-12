import { createRouter, createWebHistory } from 'vue-router'
import ModuleView from '../views/ModuleView.vue'
import TodoView from '../views/TodoView.vue'
import CartView from '../views/CartView.vue'
import SingleChoiceView from '../views/SingleChoiceView.vue'

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
    }
  ],
})


export default router
