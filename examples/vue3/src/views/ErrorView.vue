<template>
  <h1>Error Page</h1>
  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <button @click="() => router.back()">Go Back</button>
    <span style="display: inline-block; width: 16px"></span>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>

  <section class="mt-4">
    <h3>JS 错误类型</h3>
    <div class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <button @click="handleSyntaxErrors()">语法错误</button>
      <button @click="handlePromiseError()">异步错误</button>
      <button @click="handleErrorTypeError()">Error</button>
      <button @click="handleErrorTypeSyntaxError()">SyntaxError</button>
      <button @click="handleErrorTypeReferenceError()">ReferenceError</button>
      <button @click="handleErrorTypeTypeError()">TypeError</button>
      <button @click="handleErrorTypeRangeError()">RangeError</button>
      <button @click="handleErrorTypeURIError()">URIError</button>
    </div>
  </section>

  <section class="mt-4">
    <h3>资源加载</h3>
    <div class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <button @click="handleImageErrors()">图片资源加载错误</button>
      <button @click="handleScriptErrors()">Script资源加载错误</button>
      <button @click="handleStyleErrors()">Style资源加载错误</button>
    </div>

    <img v-if="imgUrl" :src="imgUrl" alt="" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// JS 语法错误
const handleSyntaxErrors = (age = 10) => {
  const person = {};
  const name = person.info.name;
};

// 异步错误
const handlePromiseError = () => {
  new Promise(function (resolve, reject) {
    window.someVar.error = "error";
  }).then((res) => {
    console.log(res);
  });
};

// JS 错误类型 ----------------------------------------------------
const handleErrorTypeError = () => {
  throw new Error("test");
};

const handleErrorTypeSyntaxError = () => {
  throw new SyntaxError("test");
};

const handleErrorTypeReferenceError = () => {
  console.log(referenceError);
};

const handleErrorTypeTypeError = () => {
  const data = null;
  data.length;
};

const handleErrorTypeRangeError = () => {
  const arr = new Array(-1);
  arr[0];
};

const handleErrorTypeURIError = () => {
  decodeURIComponent("%");
};

// 资源错误 --------------------------------------------------------------

const imgUrl = ref("");
const handleImageErrors = () => {
  // 资源加载错误
  imgUrl.value = "https://www.xxxx.com/img/bd_logo1.png";
};
const handleScriptErrors = () => {
  // Script 资源加载错误
  const script = document.createElement("script");
  script.src = "https://www.xxxx.com/js/main.js";
  document.body.appendChild(script);
};

const handleStyleErrors = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://www.xxxx.com/css/main.css";
  document.body.appendChild(link);
};
</script>
