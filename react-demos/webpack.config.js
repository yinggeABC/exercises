var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:/node_modules/,
            },
            {
                test:/\.css$/,
                loader:"style!css",
                exclude:/node_modules/,
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"react learning",
            template:path.resolve("./src/index.html")
        }),
    ]
}