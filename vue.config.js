const path = require('path');//引入path模块

function resolve(dir){

    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径

}
chainWebpack:(config)=>{

        config.resolve.alias
  
        .set('@',resolve('./src'))
  
        // .set('components',resolve('./src/components'))
  
        // .set('views',resolve('src/views'))
  
        .set('assets',resolve('src/assets'))
  
        // //set第一个参数：设置的别名，第二个参数：设置的路径
  
      }

  // module.exports = {
  //   lintOnSave: true,
  //   css: {
  //       loaderOptions: {
  //           postcss: {
  //               plugins: [
  //                   require('postcss-pxtorem')({
  //                       rootValue : 1, // 换算的基数
  //                       selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
  //                       propList   : ['*'],
  //                   }),
  //               ]
  //           }
  //       }
  //   },
  // }

//   module.exports = {
//     chainWebpack: config => {
//         config.module
//             .rule('scss')
//             .test(/\.scss$/)
//             .oneOf('vue')
//             .use('px2rem-loader')
//             .loader('px2rem-loader')
//             .before('postcss-loader') // this makes it work.
//             .options({ remUnit: 75, remPrecision: 8 })
//             .end()
//     }
// }


module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
  

      config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
          remUnit: 142
      })
  
  }
}

