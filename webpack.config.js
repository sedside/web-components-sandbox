const path = require('path');
const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const extractLessconfig = new MiniCssExtractPlugin({
    filename: '[name].[hash:6].css',
    chunkFilename: '[id].css'
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'index.html'
});

const definePluginConfig = new webpack.DefinePlugin({});

const plugins = [
    HtmlWebpackPluginConfig,
    extractLessconfig,
    definePluginConfig,
    new webpack.ProvidePlugin({
        React: 'react'
    })
];

const assetsImgOptions = {
    name: '[name].[hash:6].[ext]',
    outputPath: 'assets/images'
};

const config = {
    mode: process.env.NODE_ENV || 'development',
    context: __dirname,
    entry: {
        main: ['./src/entry.jsx']
    },

    output: {
        path: path.resolve('build'),
        publicPath: '/',
        filename: 'index.js'
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.scss', '.gif']
    },

    optimization: {
        minimize: isProduction
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                // exclude: /node_modules/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: assetsImgOptions
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'base64-inline-loader?limit=1000&name=[name].[ext]'
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }
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

module.exports = function() {
    require('./copy-styles-and-fonts');

    return config;
};
