const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/app/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
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