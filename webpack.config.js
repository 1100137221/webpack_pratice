
module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // 將檔名為 jsx 的,從 es6->es5
                exclude: 'node_modules', //排除 node_modules 
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'] //babel 的設定檔,可以不用寫 .babelrc
                }
            }
        ]
    },
    resolve: {
        // Default extensions: ["", ".webpack.js", ".web.js", ".js"]
        extensions: ['', '.js', '.css'],  //import 檔案時,副檔名不用寫
    }
};