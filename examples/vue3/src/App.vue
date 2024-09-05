<template>
  <router-view></router-view>

  <div
    v-if="!show"
    class="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-[#242424]"
  >
    <p>骨架屏加载中...</p>
  </div>

  <div
    class="fixed bottom-4 right-4 text-xs cursor-pointer bg-slate-700 rounded-full w-10 h-10 flex justify-center items-center "
    @click="() => (show = true)"
  >
    显示
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>