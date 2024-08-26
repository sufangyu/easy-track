<template>
  <h1>NewsDetail Page</h1>

  <p class="mt-4">{{ route.query }}</p>

  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <button @click="() => router.back()">Go Back</button>
    <RouterLink to="/news">Go to NewList</RouterLink>
    <RouterLink to="/">Go to Home</RouterLink>
    <button @click="() => router.replace({ path: '/' })">Go to Home - replace</button>
  </nav>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>
