<template>
  <h1>网络请求</h1>
  <nav class="mt-4">
    <button @click="() => router.back()">Go Back</button>
    <span style="display: inline-block; width: 16px"></span>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>

  <div class="mt-4">
    <h3 class="text-left mb-2">Fetch</h3>
    <div class="flex flex-wrap gap-2">
      <button @click="handleFeatchGet200">GET-200</button>
      <button @click="handleFeatchGet404">GET-404</button>
      <button @click="handleFeatchPost">POST</button>
      <input type="file" name="" id="file" @change="(ev) => handleUpload(ev, 'fetch')" />
    </div>
  </div>

  <div class="mt-4">
    <h3 class="text-left mb-2">XHR</h3>
    <div class="flex flex-wrap gap-2">
      <button @click="handleXHRGet200">GET-200</button>
      <button @click="handleXHRGet404">GET-404</button>
      <button @click="handleXHRPost">POST</button>
      <input type="file" name="" id="file" @change="(ev) => handleUpload(ev, 'xhr')" />
    </div>
  </div>

  <div class="mt-4">
    <h3 class="text-left mb-2">Axios</h3>
    <div class="flex flex-wrap gap-2">
      <button @click="handleAxiosGet200">GET-200</button>
      <button @click="handleAxiosGet404">GET-404</button>
      <button @click="handleAxiosPost">POST</button>
      <input type="file" name="" id="file" @change="(ev) => handleUpload(ev, 'axios')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import xhr from "xhr";
import axios from "axios";

const router = useRouter();
const urlMap = {
  get200: "https://jsonplaceholder.typicode.com/posts",
  get404: "https://jsonplaceholder.typicode.com/xx/404",
  "404Bad": "https://jsonplaceholder-xxx.typicode.com/404",
  post200: "https://jsonplaceholder.typicode.com/posts",
  upload: "https://jsonplaceholder.typicode.com/upload",
};

// -------------------- FETCH ---------------------
const handleFeatchGet200 = () => {
  fetch(urlMap.get200, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Custom-Referrer": "https://www.baidu.com",
    },
    credentials: "include",
  });
};
const handleFeatchGet404 = () => {
  fetch(urlMap.get404);
};
const handleFeatchPost = () => {
  fetch(urlMap["404Bad"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ name: "张三疯", age: 18 }),
  });
};

// -------------------- XHR ---------------------
const handleXHRGet200 = () => {
  xhr(
    {
      url: urlMap.get200,
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Custom-Referrer": "https://www.baidu.com",
      },
      withCredentials: true,
      responseType: "text",
    },
    (_err, _resp, _body) => {
      // console.log("xhr result err =>", err);
      // console.log("xhr result resp =>", resp);
      // console.log("xhr result body =>", body);
    }
  );
};

const handleXHRGet404 = () => {
  xhr(
    {
      url: urlMap.get404,
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Custom-Referrer": "https://www.baidu.com",
      },
    },
    (_err, _resp, _body) => {
      //   console.log("xhr result err =>", err);
      //   console.log("xhr result resp =>", resp);
      //   console.log("xhr result body =>", body);
    }
  );
};

const handleXHRPost = () => {
  xhr(
    {
      url: urlMap["404Bad"],
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Custom-Referrer": "https://www.baidu.com",
      },
      withCredentials: true,
      body: JSON.stringify({ name: "张三疯", age: 18 }),
    },
    (_err, _resp, _body) => {
      // console.log("xhr result err =>", err);
      // console.log("xhr result resp =>", resp);
      // console.log("xhr result body =>", body);
    }
  );
};

// -------------------- Axios ---------------------
const handleAxiosGet200 = () => {
  axios.get(urlMap.get200, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "X-Custom-Referrer": "https://www.baidu.com",
    },
    withCredentials: true,
  });
};

const handleAxiosGet404 = () => {
  axios.get(urlMap.get404, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Custom-Referrer": "https://www.baidu.com",
    },
    params: {
      page: 1,
      size: 10,
    },
    withCredentials: true,
  });
};

const handleAxiosPost = () => {
  axios.post(
    urlMap.post200,
    { name: "张三疯", age: 18 },
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "X-Custom-Referrer": "https://www.baidu.com",
      },
      withCredentials: true,
    }
  );
};

// -------------------- 文件上传 ---------------------
const handleUpload = (event: Event, type: "fetch" | "xhr" | "axios") => {
  const formData = new FormData();
  formData.append("file", (event.target as any)?.files?.[0]);

  switch (type) {
    case "fetch":
      fetch(urlMap.upload, {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      break;
    case "xhr":
      xhr(
        {
          url: urlMap.upload,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        },
        (_err, _resp, _body) => {}
      );
      break;
    case "axios":
      axios.post(urlMap.upload, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      break;
  }
};
</script>
