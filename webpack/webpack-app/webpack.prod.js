const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { optimize } = require('webpack');


module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: { 
                    sources: false 
                }
            },
            {
                test: /\.css$/i,
                exclude: /main.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /main.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]',
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            title: 'My Webpack App',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
        })
    ]
}