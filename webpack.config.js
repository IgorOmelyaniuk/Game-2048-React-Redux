var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {

    entry: {
        bundle: './src/index',
        styles: './src/scss/style.scss'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}