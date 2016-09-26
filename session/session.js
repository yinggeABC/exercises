/**
 * Created by MWei2 on 9/14/2016.
 */
var http = require("http")
var fs=require("fs")
var url = require("url")
var queryString = require("querystring")
var sname = "SESSION_KEY";
var sessions={};
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if (pathname=="/") {
        var cookie = req.headers.cookie;
        var cookieObj = queryString.parse(cookie,";");
            var sessionId = cookieObj[sname];
         var sessionObj = sessions[sessionId];
            if (sessionObj){
                sessionObj.balance = sessionObj.balance-10;
                res.setHeader("Content-Type","text/html;charset=utf8")
                res.end("余额"+sessionObj.balance+"元");
            }else{
                var sid = Date.now()+Math.random();
                res.setHeader("Set-Cookie",sname+"="+sid+";");
                res.setHeader("Content-Type","text/html;charset=utf8");
                sessions[sid]={
                    balance:100
                }
                res.end("欢迎第一次光临，剩余"+sessions[sid].balance+"元");
            }
        }
}).listen(8080)