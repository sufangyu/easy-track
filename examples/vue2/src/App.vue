<template>
  <div id="app">
    <router-view />

    <!-- <div v-if="!show" class="overlayer">
      <p>骨架屏加载中...</p>
    </div>
    <div class="button-fixed" @click="() => (show = true)">显示</div> -->
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.button-fixed {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #007fff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
}

.overlayer {
  justify-content: center;
  align-items: center;
  display: flex;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  opacity: 1;
}
</style>
