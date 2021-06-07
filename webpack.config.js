const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: './src/indext.js',
    output: {
        clean: true,
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
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },

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