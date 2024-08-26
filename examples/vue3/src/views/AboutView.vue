<template>
  <h1>About Page</h1>

  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <RouterLink to="/">Go to Home</RouterLink>
    <button @click="() => router.replace({ path: '/' })">Go to Home - replace</button>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
