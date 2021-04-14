'use strict';

const path = require('path');


function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'));
    config.module.rules.delete('eslint');   //remove the eslint rule
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/m/' : '/',
  productionSourceMap: false,
  // devServer: {
  //   proxy: {
  //     '/api/web': {
  //       target: process.env.VUE_APP_API_TARGET,
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api/web': '',
  //       },
  //     },
  //   },
  // },
  runtimeCompiler: true
};
