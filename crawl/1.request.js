/**
 * Created by weimin on 16-11-3.
 */
var request = require("request");
var cheerio = require("cheerio");
var iconv = require("iconv-lite");//实现GBK到UTF8的编码转换
request({url:'http://music.baidu.com/search?fr=ps&ie=utf-8&key=%E7%99%BE%E5%BA%A6',encoding:"utf8"},function(err,response,body) {
        // var result=iconv.decode(body,"gbk");
        var $ = cheerio.load(body);
         $(".song-title a").each(function(){
             console.log($(this).text());
         })
    }
    )
