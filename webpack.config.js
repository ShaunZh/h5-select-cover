/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-23 18:44:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-09-22 00:45:30
 */
const isDev = process.env.NODE_ENV === 'development';
const config = isDev ? require('./webpack.dev') : require('./webpack.prod');

module.exports = {
  ...config,
};
