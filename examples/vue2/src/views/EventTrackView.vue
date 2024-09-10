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
        @click.stop.prevent="handleAlert"
        :data-event-params="JSON.stringify(reportParams)"
        data-event-name="自定义事件名称"
      >
        埋点（支持定义上报名称、数据）
      </el-button>
    </div>

    <div class="mt-4" style="max-width: 640px; margin: 0 auto">
      <h3>输入框</h3>
      <div class="mb-1">
        <input class="cla p-2" v-model="nativeInput" placeholder="请输入" />
      </div>
      <div class="mb-1">
        <label for="remark">
          <textarea
            class="cla p-2"
            v-model="nativeTextarea"
            placeholder="请输入"
          ></textarea>
        </label>
      </div>
      <div class="mb-1">
        <div class="cla p-2" contenteditable="true">这里可以的编辑 div</div>
      </div>

      <p></p>

      <div>
        <el-input
          class="cla p-2"
          v-model="fwInput"
          placeholder="请输入"
          :data-event-params="JSON.stringify(reportParams)"
          data-event-name="el-input相关事件"
          @blur="handleElInputBlur"
        />

        <p></p>

        <el-input
          class="cla p-2"
          v-model="fwTextarea"
          type="textarea"
          placeholder="请输入"
          :data-event-params="JSON.stringify(reportParams)"
          data-event-name="el-input-textarea相关事件"
          @blur="handleElInputBlur"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      reportParams: { message: '自定义的数据' },
      nativeInput: '',
      nativeTextarea: '',
      fwInput: '',
      fwTextarea: '',
    };
  },
  methods: {
    handleAlert() {
      console.log('点击事件实际触发的事件');
    },
    handleElInputBlur() {
      console.log('el-input 的事件');
    },
  },
});
</script>

<style scoped></style>
