const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');


const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
    context: __dirname,

    devtool: "inline-sourcemap",

    entry: {
        core: path.resolve(__dirname, "assets/js/core.js")
    },

    output: {
        path: path.resolve(__dirname, "assets/dist"),
        filename: "[name].min.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: debug ? [] : productionPlugins
};