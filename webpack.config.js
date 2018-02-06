const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');


const plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
];

const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
    context: __dirname,

    devtool: "inline-sourcemap",

    entry: {
        core: path.resolve(__dirname, "assets/js/core.js"),
        home: path.resolve(__dirname, "assets/js/home.js"),
        careers: path.resolve(__dirname, "assets/js/careers.js")
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

    plugins: plugins.concat(debug ? [] : productionPlugins)
};