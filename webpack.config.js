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
                use: {
                    loader: 'style-loader!css-lodaer'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'views'),
                use: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.css', '.html']
    },
}