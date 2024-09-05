<template>
  <section>
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

  
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const reportParams = { message: "自定义的数据" };

const handleAlert = () => {
  alert("触发埋点");
};
</script>
