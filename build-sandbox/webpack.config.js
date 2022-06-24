const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [

            // Babel for JS files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
    ]
}