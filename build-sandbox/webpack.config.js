const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [

            // Babel for JS files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Images
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },

            // Fonts
            {
                test: /\.(ttf|otf|eot|woff2)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }]
            },

            // CSS and Style loaders
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader",]
            },
        ]
    },
    // mode: 'development',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:7].css'
        }),
    ]
}