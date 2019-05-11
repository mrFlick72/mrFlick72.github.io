const path = require('path');
var webpack = require("webpack")

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
        filename: 'dist/app_bundle.js',
        path: path.resolve(__dirname)
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};