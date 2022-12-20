const path = require('path')
const glob = require('glob') //node 的内置库
const { VueLoaderPlugin } = require('vue-loader')
const list = {}
// {
//   // 所有的组件入口文件
//   card: './components/lib/card/index.js'
//   comp: './components/lib/comp/index.js'
// }

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  //   console.log('files:', files)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
  //   console.log(list)
}

makeList('components/lib', list)
module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js', //card.umd.js
    path: path.resolve(__dirname, 'dist'),
    library: 'mui', //会打包到该字段下
    libraryTarget: 'umd', //打包的格式
  },
  plugins: [new VueLoaderPlugin()], //使用vue-loader 对vue文件进行处理
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
}
