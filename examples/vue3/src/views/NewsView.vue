<template>
  <h1>News Page</h1>
  <ul class="mt-4">
    <li v-for="item in list">
      <RouterLink :to="`/news-detail?id=${item.id}`"
        >{{ item.id }} - {{ item.title }}</RouterLink
      >
    </li>
  </ul>

  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <RouterLink to="/">Go to Home</RouterLink>
    <span style="display: inline-block; width: 16px"></span>
    <button @click="() => router.replace({ path: '/' })">Go to Home - replace</button>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const list = [
  { id: 1007, title: "News 1", content: "Content of News 1" },
  { id: 1008, title: "News 2", content: "Content of News 2" },
  { id: 1009, title: "News 3", content: "Content of News 3" },
];

const router = useRouter();
</script>
