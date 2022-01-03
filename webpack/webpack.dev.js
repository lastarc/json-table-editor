const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
    prod_Path,
    src_Path
} = require('./path');
const selectedPreprocessor = {
    fileRegexp: /\.(sass|scss|css)$/,
    loaderName: 'sass-loader'
};

module.exports = {
    entry: {
        main: './' + src_Path + '/index.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: '[name].[chunkhash].js',
        library: 'functions'
    },
    devtool: 'source-map',
    devServer: {
        // open: true,
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: selectedPreprocessor.fileRegexp,
            use: [{
                loader: MiniCssExtractPlugin.loader
            },
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: selectedPreprocessor.loaderName,
                    options: {
                        sourceMap: true
                    }
                },
            ]
        }]
    },
    context: path.join(__dirname, src_Path),
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: 'assets'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: './' + src_Path + '/index.html',
            filename: 'index.html'
        })
    ]
};