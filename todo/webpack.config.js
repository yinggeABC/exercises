/**
 * Created by weimin on 17-1-24.
 */
var path = require("path")
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:"babel",
                exclude:/node_modules/,
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"src/index.html"),
            port:8080
        })
    ]
}

