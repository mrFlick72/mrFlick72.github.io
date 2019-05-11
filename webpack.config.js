const path = require('path');
var webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './app/index.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        publicPath: "/",
        filename: 'dist/app_bundle_[hash].js',
        path: path.resolve(__dirname)
    },

    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['app'],
            filename: "index.html",
            template: path.resolve(__dirname, "index.html")
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};