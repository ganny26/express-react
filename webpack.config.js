const webpack = require('webpack');

var config = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ],
        }]
    }
}

module.exports = config;