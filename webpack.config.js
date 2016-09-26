/* eslint-disable */
var webpack = require('webpack'); 
/* eslint-enable */

module.exports = {
     entry: {
        app: './app/app.js', //自己的 js 檔案
        vendor: ['react', 'react-dom'] //將第三方套件也打包出去
    },
    output: {
        path: './dist',
        filename: '[name].js' //會自動 match enrty 的 name 做為 key
    },
    module: {
        /*preLoaders: [ //會比 loaders 先
            {
                test: /\.jsx?$/,
                loader: 'eslint', //eslint loader 是用來檢查有沒有符合 es 的規範
                exclude: 'node_modules',
            }
        ],*/
        loaders: [
            {
                test: /\.jsx?$/, // 讀取檔名為 jsx 的
                exclude: 'node_modules', //排除 node_modules 
                loader: 'babel', //babel loader 將 es6->es5
                query: {
                    presets: ['react', 'es2015'] //babel 的設定檔,可以不用寫 .babelrc
                }
            },
            {
                test: /\.css$/, //讀取檔名為 css
                exclude: 'node_modules',
                loaders: ['style', 'css'] //很重要,loaders 是從右到左,css loader 用來讀取 css,style loader 是將 css 將成 style 檔
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: 'node_modules',
                loader: 'url', 
                query: {
                    limit: 9999999 //超過就將圖檔編碼成 base64 String
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d\.\d\.\d)?$/,
                exclude: 'node_modules',
                loader: 'file'
            }
        ]
    },
     plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js') //使用 CommonsChunkPlugin 將第三方套件命名為 vendor.bundle.js
    ],
    resolve: {
        // Default extensions: ["", ".webpack.js", ".web.js", ".js"]
        extensions: ['', '.js', '.css'],  //import 檔案時,副檔名不用寫
    }
};