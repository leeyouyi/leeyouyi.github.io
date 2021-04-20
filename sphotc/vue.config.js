'use strict';

const path = require('path');


function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'));
    config.module.rules.delete('eslint');   
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  productionSourceMap: false,
 
  runtimeCompiler: true
};
