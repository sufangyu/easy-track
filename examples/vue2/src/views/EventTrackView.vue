<template>
  <section>
    <h1>事件埋点</h1>
    <nav class="mt-4">
      <el-button @click="() => $router.back()">Go Back</el-button>
      <span style="display: inline-block; width: 16px"></span>
      <RouterLink to="/">Go to Home</RouterLink>
    </nav>

    <div class="mt-4 flex flex-wrap gap-2">
      <el-button class="cla">类名埋点</el-button>
      <el-button data-desc="元素文本埋点）">report2</el-button>
      <el-button data-desc="类名 / 文本" class="cla">report3</el-button>
      <el-button>不触发埋点</el-button>
      <el-button
        class="r"
        @click.stop="handleAlert"
        :data-event-params="JSON.stringify(reportParams)"
        data-event-name="自定义事件名称"
      >
        埋点（支持定义上报名称、数据）
      </el-button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      reportParams: { message: '自定义的数据' },
    };
  },
  methods: {
    handleAlert() {
      alert('触发埋点');
    },
  },
});
</script>

<style scoped></style>
