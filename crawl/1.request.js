/**
 * Created by weimin on 16-11-3.
 */
var request = require("request");//向服务器发送请求
var cheerio = require("cheerio");//实现了简单的JQUERY
var iconv = require("iconv-lite");//实现GBK到UTF8的编码转换
request({url:'http://music.baidu.com/search?fr=ps&ie=utf-8&key=%E7%99%BE%E5%BA%A6',encoding:"utf8"},function(err,response,body) {
        // var result=iconv.decode(body,"gbk");
        var $ = cheerio.load(body);//将内容转化为DOM对象
         $(".song-title a").each(function(){
             console.log($(this).text());
         })
    }
    ) //request会默认的将请求得到的内容转化为utf8编码
