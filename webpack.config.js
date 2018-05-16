let path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'components/component.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lanlanUI.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'style-loader!css-lodaer'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.css', '.html']
    },
}