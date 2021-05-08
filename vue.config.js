/*
 * @Author: czj
 * @Date: 2021-05-08 13:46:33
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 13:47:12
 * @Description:
 */

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
}
