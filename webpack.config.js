let path = require('path');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'components/component.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lanlanUI.js'
    },
    module: {
        rules: [
            {test: /\.css$/,loader: "style-loader!css-loader",},
            {test: /\.html$/, loader: 'html-loader'},
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
        new webpack.HashedModuleIdsPlugin()
    ]
}

// const config = {
//     output: {
//         'path': path.join(__dirname, ''),
//         'filename':'[name].js'
//     },
//     module: {
//         loaders: [
//             {test: /\.css$/, loader: "style-loader!css-loader"},
//             {test: /\.html$/, loader: 'html-loader'},
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 include: path.resolve(__dirname, 'views'),
//                 loader: "babel-loader"
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.css']
//     },
//     plugins: [
//         new webpack.HashedModuleIdsPlugin()
//     ]
// };