const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'assets', 'js', 'app.js'),
        auth: path.resolve(__dirname, 'assets', 'js', 'auth.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public', 'build'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
};