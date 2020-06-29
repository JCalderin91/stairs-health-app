import Vue from 'vue';
import Router from 'vue-router';
import ViewHello from '@/components/ViewWorld';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/view',
      name: 'ViewHello',
      component: ViewHello
    }
  ]
});
