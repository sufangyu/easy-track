import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NewsView from "../views/NewsView.vue";
import NewsDetailView from "../views/NewsDetailView.vue";
import ErrorView from "../views/ErrorView.vue";
import EventTrackView from "../views/EventTrackView.vue";
import RequestView from "../views/RequestView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/news", component: NewsView },
  { path: "/news-detail", component: NewsDetailView },
  { path: "/error", component: ErrorView },
  { path: "/event-track", component: EventTrackView },
  { path: "/request", component: RequestView },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
