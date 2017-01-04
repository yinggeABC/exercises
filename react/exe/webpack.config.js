var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"react 学习",
            template:path.resolve(__dirname,"./src/index.html")
        })
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:"style!css"
            }
        ]
    }
}