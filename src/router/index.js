import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path:'/',
    name:'layout',
    component:() => import('/@/layout/index.vue'),
    redirect: 'Home',
    children:[
      {
        path: 'Home',
        name: 'Home',
        meta: { keepAlive: true },
        component: () => import('/@/views/Home/index.vue')
      },
      {
        path: 'Pinia',
        name: 'Pinia',
        meta: { keepAlive: true },
        component: () => import('/@/views/Pinia/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', component: () => import('/@/views/NotFound/index.vue') },
]

const rotuer = createRouter({
  history: createWebHashHistory(),
  routes
})

export default rotuer
