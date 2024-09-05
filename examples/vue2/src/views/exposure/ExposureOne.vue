<template>
  <div>
    <h1>Element Exposure Page</h1>

    <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <RouterLink to="/">Go to Home</RouterLink>
      <el-button
        style="margin-left: 16px"
        @click="() => $router.push({ path: '/exposure-two' })"
        >第二页曝光</el-button
      >
    </nav>

    <section class="text-left mt-4">
      <div class="mb-6">
        监听阈值(threshold)解释：阀值默认为0.5，当为0.5时代表滚动超过图片达到一半时即为曝光结束
      </div>
      <div class="mb-6">同理当为0.5时，代表滚动视图能看到图片一半时即为曝光开始</div>

      <div class="mb-6">
        <img
          data-exposure-track
          src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"
          alt=""
        />
      </div>
      <div class="mb-6 text-center">
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
      </div>

      <div class="mb-6">
        <img
          data-exposure-track
          src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"
          alt=""
        />
      </div>

      <div class="mb-6 text-center">
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
      </div>

      <div class="mb-6">
        <img
          data-exposure-track
          data-exposure-name="第三个公告"
          :data-exposure-params="JSON.stringify({ name: 'zsf', age: 18 })"
          src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"
          alt=""
        />
      </div>

      <div class="text-center">
        <button @click="() => (show = !show)">
          {{ show ? "隐藏" : "显示" }}监控元素
        </button>
      </div>

      <div class="mb-6 text-center">
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
        <div>----------- 分割线 -----------</div>
      </div>

      <div class="mb-6" v-if="show">
        <div
          data-exposure-track
          class="flex justify-center items-center bg-slate-500 h-60"
        >
          被监控曝光的元素
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      show: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
