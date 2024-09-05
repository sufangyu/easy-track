<template>
  <HelloWorld msg="Vite + Vue" />

  <div class="flex justify-center mt-4">
    <img src="https://avatars.githubusercontent.com/u/1852629?v=4" alt="" width="125" />
  </div>

  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <RouterLink to="/about">Go to About</RouterLink>
    <button @click="() => router.push({ path: '/about' })">Go to About</button>
    <button @click="() => router.replace({ path: '/about' })">
      Go to About - replace
    </button>
    <RouterLink to="/news">PV（新闻列表）</RouterLink>
    <RouterLink to="/error">错误页面</RouterLink>
    <RouterLink to="/event-track">事件埋点 & 白屏检测</RouterLink>
    <RouterLink to="/request">网络请求</RouterLink>
    <RouterLink to="/exposure-one">元素曝光</RouterLink>
    <RouterLink to="/hand-report">手动上报</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const router = useRouter();
</script>

<style scoped></style>
