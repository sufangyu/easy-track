<template>
  <div
    v-if="!show"
    class="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0"
  >
    <p>骨架屏加载中...</p>
  </div>

  <section v-if="show">
    <h1>事件埋点</h1>
    <nav class="mt-4">
      <button @click="() => router.back()">Go Back</button>
      <span style="display: inline-block; width: 16px"></span>
      <RouterLink to="/">Go to Home</RouterLink>
    </nav>

    <div class="mt-4 flex flex-wrap gap-2">
      <button class="cla">类名埋点</button>
      <button data-desc="元素文本埋点）">report2</button>
      <button data-desc="类名 / 文本" class="cla">report3</button>
      <button>不触发埋点</button>
      <button
        class="r"
        @click.stop="handleAlert"
        :data-event-params="JSON.stringify(reportParams)"
        data-event-name="自定义事件名称"
      >
        埋点（支持定义上报名称、数据）
      </button>
    </div>
  </section>

  <div
    class="fixed bottom-4 right-4 text-xs cursor-pointer bg-slate-700 rounded-full w-10 h-10 flex justify-center items-center"
    @click="() => (show = true)"
  >
    显示
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const show = ref(false);

const reportParams = { message: "自定义的数据" };

const handleAlert = () => {
  alert("触发埋点");
};
</script>
