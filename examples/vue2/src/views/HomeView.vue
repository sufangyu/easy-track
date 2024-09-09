<template>
  <div class="home">
    <HelloWorld msg="Vue.js + TypeScript App" />

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div style="padding: 16px">
        <el-button type="text">
          <router-link to="/news">PV（新闻列表）</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/error">错误页面</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/event-track">事件埋点&白屏检测</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/request">网络请求</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/exposure-one">元素曝光</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/report">手动上报</router-link>
        </el-button>
        <el-button type="text">
          <router-link to="/console">Console 日志上报</router-link>
        </el-button>
      </div>
    </div>

    <div>
      <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="360px"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done: any) {
      this.$confirm('确认关闭？')
        .then(() => {
          console.log('done', done);
          done();
        })
        .catch();
    },
  },
});
</script>
