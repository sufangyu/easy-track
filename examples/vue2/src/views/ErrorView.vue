<template>
  <div>
    <h1>Error Page</h1>
    <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <el-button @click="() => $router.back()">Go Back</el-button>
      <span style="display: inline-block; width: 16px"></span>
      <RouterLink to="/">Go to Home</RouterLink>
    </nav>

    <div class="mt-4">
      <h3>资源加载</h3>
      <img v-if="imgUrl" :src="imgUrl" alt="" />
    </div>

    <div class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <el-button @click="handleSyntaxErrors">语法错误</el-button>
      <el-button @click="handlePromiseError">异步错误</el-button>
      <el-button @click="handleImageErrors">图片资源加载错误</el-button>
      <el-button @click="handleScriptErrors">Script资源加载错误</el-button>
      <el-button @click="handleStyleErrors">Style资源加载错误</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      imgUrl: '',
      reportParams: { message: '这是要上报的信息' },
    };
  },
  methods: {
    // 异步错误
    handlePromiseError() {
      new Promise((resolve) => {
        // @ts-ignore
        window.someVar.error = 'error';
        resolve(null);
      }).then((res) => {
        console.log(res);
      });
      // .catch((err) => {
      //   console.log(err);
      // });
    },
    // JS 语法错误
    handleSyntaxErrors() {
      const person = {};
      // @ts-ignore
      const { name } = person.info;
    },
    handleImageErrors() {
      this.imgUrl = 'https://www.xxxx.com/img/bd_logo1.png';
    },
    // Script 资源加载错误
    handleScriptErrors() {
      const script = document.createElement('script');
      script.src = 'https://www.xxxx.com/js/main.js';
      document.body.appendChild(script);
    },
    handleStyleErrors() {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.xxxx.com/css/main.css';
      document.body.appendChild(link);
    },
  },
});
</script>
