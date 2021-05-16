module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //默认有@  他指向的是：src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
  },
}