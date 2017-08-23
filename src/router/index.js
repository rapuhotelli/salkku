import Vue from 'vue';
import Router from 'vue-router';
import Items from '@/components/Items';
import Teams from '@/components/Teams';
import Stats from '@/components/Stats';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/items',
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
  ],
});
