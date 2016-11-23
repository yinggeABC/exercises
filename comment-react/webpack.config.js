/**
 * Created by MWei2 on 11/22/2016.
 */
var path = require("path");
module.exports={
    entry:path.resolve(__dirname,"app/main.js"),//入口文件
    output:{//输出文件
        path:"build",//定义输出文件路径
        filename:"bundle.js"//指定打包文件名称
    },
    devServer:{
        inline:true,//
        contentBase:"build"//指定静态文件的根目录
    },
    resolve:{
        extensions:["",".js",".jsx",".css"]//指定被import的文件的后缀
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:"babel",
                exclude:/node_modules/,
                include:path.resolve(__dirname,"app")
            },
            {
                test:/\.css$/,
                loader:"style!css"
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:"url"
            }
        ]
    }
}