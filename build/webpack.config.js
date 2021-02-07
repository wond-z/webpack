const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
console.log(__dirname)

module.exports = {
    entry: './src/main.ts', // 输入文件
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, '../dist') // 输出路径 __dirname 表示当前路径的绝对路径
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 8080,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"',
            }
        }),
    ]
};