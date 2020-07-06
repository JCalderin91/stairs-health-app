import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home')
    },
    {
      path: '/clinic',
      name: 'clinic',
      component: () => import('@/views/clinic/Clinic')
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: () => import('@/views/treatment/Index')
    },
    {
      path: '/your-spot',
      name: 'your-spot',
      component: () => import('@/views/your-spot/Index')
    }
  ]
});
