var path = require("path")
var webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin");
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var config = {
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"dist",
        inline:true,
        port:8080,
        stats:{
            colors:true
        }
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:/node_modules/
            },{
                test:/\.css$/,
                loader:"style!css",
                include:path.resolve(__dirname,"src")
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"build env config",
            template:"./src/index.html"
        }),
        new uglifyPlugin({
            compress:false
        }),
        new webpack.BannerPlugin("author:yingge\n date:today")
    ]
}

module.exports = config;