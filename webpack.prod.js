const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/indext.js',
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /style\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'img/[name].[ext]'
                    } }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },    
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },

        ]

    },
    optimization: {
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]

    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/indext.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img/', to: 'img/' },
            ],
        }),

    ]
}