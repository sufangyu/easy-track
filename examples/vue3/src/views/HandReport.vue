<template>
  <h1>手动上报 Page</h1>

  <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
    <button @click="() => router.back()">返回上一页</button>
  </nav>

  <section class="mt-4 flex justify-center gap-2">
    <button @click="handleAddTrack">添加到队列</button>
    <button @click="handleReportTrack">立即上报</button>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { EventType, StatusType, eventTrack } from "@easy-track/vue3";

const router = useRouter();

const handleAddTrack = () => {
  console.log("添加到队列 =>>");

  eventTrack.add({
    type: EventType.REQUEST,
    category: "fetch",
    time: Date.now(),
    status: StatusType.Ok,
    data: {
      url: "https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example",
      method: "GET",
    },
  });
};

const handleReportTrack = () => {
  console.log("立即上报 =>>");
  eventTrack.send({
    type: EventType.REQUEST,
    category: "fetch",
    time: Date.now(),
    status: StatusType.Ok,
    data: {
      url: "https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example",
      method: "GET",
    },
  });
};
</script>
