<template>
  <div>
    <h1>网络请求</h1>
    <nav class="mt-4">
      <el-button @click="() => $router.back()">Go Back</el-button>
      <span style="display: inline-block; width: 16px"></span>
      <RouterLink to="/">Go to Home</RouterLink>
    </nav>

    <div class="mt-4">
      <h3 class="text-left mb-2">Fetch</h3>
      <div class="flex flex-wrap gap-2">
        <el-button @click="handleFeatchGet200">GET-200</el-button>
        <el-button @click="handleFeatchGet404">GET-404</el-button>
        <el-button @click="handleFeatchPost">POST</el-button>
        <label for="name">
          <input
            type="file"
            name=""
            id="file"
            @change="(ev) => handleUpload(ev, 'fetch')"
          />
        </label>
      </div>
    </div>

    <div class="mt-4">
      <h3 class="text-left mb-2">XHR</h3>
      <div class="flex flex-wrap gap-2">
        <el-button @click="handleXHRGet200">GET-200</el-button>
        <el-button @click="handleXHRGet404">GET-404</el-button>
        <el-button @click="handleXHRPost">POST</el-button>
        <label for="name">
          <input
            type="file"
            name=""
            id="file"
            @change="(ev) => handleUpload(ev, 'xhr')"
          />
        </label>
      </div>
    </div>

    <div class="mt-4">
      <h3 class="text-left mb-2">Axios</h3>
      <div class="flex flex-wrap gap-2">
        <el-button @click="handleAxiosGet200">GET-200</el-button>
        <el-button @click="handleAxiosGet404">GET-404</el-button>
        <el-button @click="handleAxiosPost">POST</el-button>
        <label for="name">
          <input
            type="file"
            name=""
            id="file"
            @change="(ev) => handleUpload(ev, 'axios')"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import xhr from 'xhr';
import axios from 'axios';

const urlMap = {
  get200: 'https://jsonplaceholder.typicode.com/posts',
  get404: 'https://jsonplaceholder.typicode.com/xx/404',
  '404Bad': 'https://jsonplaceholder-xxx.typicode.com/404',
  post200: 'https://jsonplaceholder.typicode.com/posts',
  upload: 'https://jsonplaceholder.typicode.com/upload',
};

export default Vue.extend({
  methods: {
    // -------------------- FETCH ---------------------
    handleFeatchGet200() {
      fetch(urlMap.get200, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Custom-Referrer': 'https://www.baidu.com',
        },
        credentials: 'include',
      });
    },
    handleFeatchGet404() {
      fetch(urlMap.get404);
    },
    handleFeatchPost() {
      fetch(urlMap['404Bad'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        credentials: 'include',
        body: JSON.stringify({ name: '张三疯', age: 18 }),
      });
    },

    // -------------------- XHR ---------------------
    handleXHRGet200() {
      xhr(
        {
          url: urlMap.get200,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Custom-Referrer': 'https://www.baidu.com',
          },
          withCredentials: true,
          responseType: 'text',
        },
        () => {}
      );
    },
    handleXHRGet404() {
      xhr(
        {
          url: urlMap.get404,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Custom-Referrer': 'https://www.baidu.com',
          },
        },
        () => {}
      );
    },

    handleXHRPost() {
      xhr(
        {
          url: urlMap['404Bad'],
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Custom-Referrer': 'https://www.baidu.com',
          },
          withCredentials: true,
          body: JSON.stringify({ name: '张三疯', age: 18 }),
        },
        () => {}
      );
    },

    // -------------------- Axios ---------------------
    handleAxiosGet200() {
      axios.get(urlMap.get200, {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'X-Custom-Referrer': 'https://www.baidu.com',
        },
        withCredentials: true,
      });
    },

    handleAxiosGet404() {
      axios.get(urlMap.get404, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Custom-Referrer': 'https://www.baidu.com',
        },
        params: {
          page: 1,
          size: 10,
        },
        withCredentials: true,
      });
    },

    handleAxiosPost() {
      axios.post(
        urlMap.post200,
        { name: '张三疯', age: 18 },
        {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'X-Custom-Referrer': 'https://www.baidu.com',
          },
          withCredentials: true,
        }
      );
    },

    // -------------------- 文件上传 ---------------------
    handleUpload(event: Event, type: 'fetch' | 'xhr' | 'axios') {
      const formData = new FormData();
      formData.append('file', (event.target as any)?.files?.[0]);

      switch (type) {
        case 'fetch':
          fetch(urlMap.upload, {
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          });
          break;
        case 'xhr':
          xhr(
            {
              url: urlMap.upload,
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              body: formData,
            },
            () => {}
          );
          break;
        case 'axios':
          axios.post(urlMap.upload, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          break;
        default:
          break;
      }
    },
  },
});
</script>
