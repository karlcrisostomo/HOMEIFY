import { createRouter, createWebHistory } from 'vue-router'
import { isMenuOpen } from '@/composables/menu'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import ShopView from '../views/ShopView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// before routing to pages it ensures that the toggle menu is close
router.beforeEach((to, from, next) => {
  // Close the menu before navigating to a new page
  isMenuOpen.value = false;
  document.body.style.overflow = '';

  next();
});


export default router
