<template>
  <h1>Console Page</h1>
  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <button @click="() => router.back()">Go Back</button>
    <span style="display: inline-block; width: 16px"></span>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>

  <div class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <button @click="onClickLog()">原生log</button>
    <button @click="onClickLogWarn()">warn 上报</button>
    <button @click="onClickLogError()">error 上报</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onClickLog = () => {
  console.log(111, 222);
  console.log("原生 log 字符串1", "原生 log 字符串2");
  console.log(true, false);
  console.log(["原生 log 数组"]);
  console.log({ name: "张三疯" }, { age: 18 });
};

const onClickLogWarn = () => {
  console.warn("字符串");
  console.warn("布尔", true);
  console.warn("对象", { name: "张三疯", age: 18 });
  console.warn("数组", [111, 222]);
};

const onClickLogError = () => {
  console.error("字符串");
  console.error("布尔", true);
  console.error("对象", { name: "张三疯", age: 18 });
  console.error("数组", [111, 222]);
};
</script>
