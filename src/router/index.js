import { createRouter, createWebHashHistory } from 'vue-router'

import Programas    from '@/views/Programas.vue'
import Territorios from '@/views/Territorios.vue'
import Capitanes   from '@/views/Capitanes.vue'
import Eventos     from '@/views/Eventos.vue'
import Ajustes     from '@/views/Ajustes.vue'

const routes = [
  { path: '/',            redirect: '/programas' },
  { path: '/programas',    name: 'Programas',    component: Programas },
  { path: '/territorios', name: 'Territorios', component: Territorios },
  { path: '/capitanes',   name: 'Capitanes',   component: Capitanes },
  { path: '/eventos',     name: 'Eventos',     component: Eventos },
  { path: '/ajustes',     name: 'Ajustes',     component: Ajustes },
  { path: '/:pathMatch(.*)*', redirect: '/programas' }
]



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
