import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RrwebPlayer from '../views/RrwebPlayer.vue';
import NewsView from '../views/NewsView.vue';
import NewsDetailView from '../views/NewsDetailView.vue';
import ErrorView from '../views/ErrorView.vue';
import EventTrackView from '../views/EventTrackView.vue';
import RequestView from '../views/RequestView.vue';
import ExposureOne from '../views/exposure/ExposureOne.vue';
import ExposureTwo from '../views/exposure/ExposureTwo.vue';
import HandReport from '../views/HandReport.vue';
import ConsoleView from '../views/ConsoleView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/rrweb-player', component: RrwebPlayer },
  { path: '/news', component: NewsView },
  { path: '/news-detail', component: NewsDetailView },
  { path: '/error', component: ErrorView },
  { path: '/event-track', component: EventTrackView },
  { path: '/request', component: RequestView },
  { path: '/exposure-one', component: ExposureOne },
  { path: '/exposure-two', component: ExposureTwo },
  { path: '/hand-report', component: HandReport },
  { path: '/console', component: ConsoleView }
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
});

export default router;
