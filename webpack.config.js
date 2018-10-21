const path = require('path')

module.exports = {

    mode: 'development',

    entry: {
        mainvue: './src/main.js'
    },

    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].js'
    },

    module: {
        rules: [
        ]
    },
    plugins: [
    ]
}