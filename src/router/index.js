import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Blogs from '@/pages/Blogs';
import Page404 from '@/pages/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
    },
    {
      path: '/404',
      name: '404',
      component: Page404,
    },
  ],
});
