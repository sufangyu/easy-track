<template>
  <div>
    <h1>Element Exposure Page Two</h1>

    <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <el-button @click="() => $router.back()">返回</el-button>
    </nav>

    <section class="text-left mt-4">
      <div class="mb-6">
        监听阈值(threshold)解释：阀值默认为0.5，当为0.5时代表滚动超过图片达到一半时即为曝光结束
      </div>
      <div class="mb-6">同理当为0.5时，代表滚动视图能看到图片一半时即为曝光开始</div>

      <div class="mb-6">
        <div data-exposure-track data-exposure-name="模块-1" class="box">
          被监控曝光的元素 - 1
        </div>
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
        <div data-exposure-track data-exposure-name="模块-2" class="box">
          被监控曝光的元素 - 2
        </div>
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
        <div
          data-exposure-track
          data-exposure-name="模块-3"
          :data-exposure-params="JSON.stringify({ name: 'zsf', age: 18 })"
          class="box"
        >
          被监控曝光的元素 - 3
        </div>
      </div>

      <div class="text-center">
        <el-button @click="() => (show = !show)"
          >{{ show ? "隐藏" : "显示" }}监控元素</el-button
        >
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
          data-exposure-name="被监控曝光的元素（显示/隐藏）"
          class="box"
        >
          被监控曝光的元素（显示/隐藏）
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

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #677489;
  color: #fff;
  height: 250px;
  margin: 16px 0;
}
</style>
