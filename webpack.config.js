const path = require('path');
const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'index.html'
});

const plugins = [
    HtmlWebpackPluginConfig,
];

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    context: __dirname,
    entry: {
        main: ['./src/index.tsx']
    },

    output: {
        path: path.resolve('build'),
        publicPath: '/',
        filename: 'index.js'
    },

    watch: process.env.NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 300,
        poll: 300,
        ignored: ['node_modules/**'],
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    optimization: {
        minimize: isProduction
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader',
            }
        ]
    },

    plugins,

    devServer: {
        contentBase: './src',
        watchContentBase: true,
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: '5050'
    }
};
