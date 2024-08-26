<template>
  <div
    v-if="!show"
    class="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0"
  >
    <p>骨架屏加载中...</p>
  </div>

  <section v-if="show">
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
        <input
          type="file"
          name=""
          id="file"
          @change="(ev) => handleUpload(ev, 'fetch')"
        />
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
        <input
          type="file"
          name=""
          id="file"
          @change="(ev) => handleUpload(ev, 'axios')"
        />
      </div>
    </div>
  </section>

  <div
    class="fixed bottom-4 right-4 text-xs cursor-pointer bg-slate-700 rounded-full w-10 h-10 flex justify-center items-center"
    @click="() => (show = true)"
  >
    显示
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import xhr from "xhr";
import axios from "axios";

// 模拟延迟渲染
const show = ref(true);
// setTimeout(() => {
//   show.value = true;
// }, 1000 * 20);

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
    withCredentials: true,
    responseType: "text",
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
    withCredentials: true,
    responseType: "text",
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
    (err, resp, body) => {
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
    (err, resp, body) => {
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
    (err, resp, body) => {
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
  formData.append("file", event.target.files[0]);

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
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        },
        (err, resp, body) => {}
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
