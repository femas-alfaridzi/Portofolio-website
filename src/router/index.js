import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/portfolio',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: 'Projects' }
  },
  {
    path: '/certifications',
    name: 'certifications',
    component: () => import('../views/CertificationsView.vue'),
    meta: { title: 'certifications' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - Femas Alfaridzi'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
