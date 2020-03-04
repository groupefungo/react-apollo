const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
  let addons = Array.isArray(addonsArgs) ?
    addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon, packageName }) => {
  const envConfig = require(`./webpack.${env}.js`);
  let packageConfig = null;
  if (packageName) {
    packageConfig = require(`../packages/${packageName}/webpack.${env}.js`)
  }

  const toExport = webpackMerge(commonConfig, envConfig, ...getAddons(addon), packageConfig);
  console.log('toExport', toExport.module.rules);
  return toExport;
};