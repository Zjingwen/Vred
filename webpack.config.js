let path = require('path');
let webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'components/component.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lanlanUI.js'
    },
    module: {
        rules: [
            {test: /\.css$/,use:[
                "vue-style-loader",
                "style-loader",
                "css-loader"
            ]},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.css']
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin()
    ]
}