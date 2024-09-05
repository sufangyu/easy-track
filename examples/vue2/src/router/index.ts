import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/ErrorView.vue'),
    meta: { title: '错误页面' }
  },
  {
    path: '/event-track',
    name: 'EventTrack',
    component: () => import('../views/EventTrackView.vue'),
    meta: { title: '事件埋点' }
  },
  {
    path: '/request',
    name: 'Request',
    component: () => import('../views/RequestView.vue'),
    meta: { title: '网络请求' }
  },
  {
    path: '/exposure-one',
    name: 'ExposureOne',
    component: () => import('../views/exposure/ExposureOne.vue'),
    meta: { title: '元素曝光1' }
  },
  {
    path: '/exposure-two',
    name: 'ExposureTwo',
    component: () => import('../views/exposure/ExposureTwo.vue'),
    meta: { title: '元素曝光1' }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/HandReport.vue'),
    meta: { title: '手动上报' }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsView.vue'),
    meta: { title: '新闻列表' }
  },
  {
    path: '/news-detail',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetailView.vue'),
    meta: { title: '新闻详情' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
