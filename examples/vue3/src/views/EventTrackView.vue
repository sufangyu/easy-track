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
      <button data-desc="元素文本埋点">report2</button>
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

    <div class="mt-4">
      <h3>输入框</h3>
      <div class="mb-1">
        <input class="cla p-2" v-model="nativeInput" placeholder="请输入" />
      </div>
      <div class="mb-1">
        <textarea
          class="cla p-2"
          v-model="nativeTextarea"
          placeholder="请输入"
        ></textarea>
      </div>

      <div class="mb-1">
        <div class="cla p-2" contenteditable="true">这里可以的编辑 div</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nativeInput = ref("");
const nativeTextarea = ref("");

const reportParams = { message: "自定义的数据" };

const handleAlert = () => {
  alert("触发埋点");
};
</script>
