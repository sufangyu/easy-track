<template>
  <div>
    <h1>手动上报 Page</h1>

    <nav class="mt-4 flex flex-wrap justify-center items-center gap-4">
      <el-button @click="() => $router.back()">返回上一页</el-button>
    </nav>

    <section class="mt-4 flex justify-center gap-2">
      <el-button @click="handleAddTrack">添加到队列</el-button>
      <el-button @click="handleReportTrack">立即上报</el-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { EventType, StatusType, eventTrack } from '@easy-track/vue2';

const handleAddTrack = () => {
  console.log('添加到队列 =>>');

  eventTrack.add({
    type: EventType.REQUEST,
    category: 'fetch',
    time: Date.now(),
    status: StatusType.Ok,
    data: {
      url: 'https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example',
      method: 'GET',
    },
  });
};

const handleReportTrack = () => {
  console.log('立即上报 =>>');
  eventTrack.send({
    type: EventType.REQUEST,
    category: 'fetch',
    time: Date.now(),
    status: StatusType.Ok,
    data: {
      url: 'https://www.easy-mock.com/mock/61c827a953d04e75f1b33164/example',
      method: 'GET',
    },
  });
};
</script>
