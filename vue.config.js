/*
 * @Author: czj
 * @Date: 2021-05-08 13:46:33
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:44:03
 * @Description:
 */

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
      }
    }
  },
}
