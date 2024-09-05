const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    // disableHostCheck: true,
    port: 9526,
    // overlay: {
    //   warnings: false,
    //   errors: true,
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      overlay: false // 编译错误时，取消全屏覆盖（建议关掉）
    }
  },
});
