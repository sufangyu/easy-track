<template>
  <div>
    <h1>NewsDetail Page</h1>

    <p class="mt-4">{{ $route.query }}</p>

    <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <el-button @click="() => $router.back()">Go Back</el-button>
      <RouterLink style="margin: 0 8px" to="/news">Go to NewList</RouterLink>
      <RouterLink style="margin: 0 8px" to="/">Go to Home</RouterLink>
      <el-button @click="() => $router.replace({ path: '/' })"
        >Go to Home - replace</el-button
      >
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
