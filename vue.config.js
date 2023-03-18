const TerserPlugin = require('terser-webpack-plugin');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');
module.exports = {
  publicPath: './',
  transpileDependencies: ['vuetify', 'vuex-module-decorators', 'pinia'],

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        })
      );
    }
    config.plugins.push(
      new VuetifyPlugin({
        autoImport: true,
      })
    );
  },
};
