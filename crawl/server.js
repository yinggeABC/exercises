/**
 * Created by MWei2 on 11/6/2016.
 */
var http = require("http")
http.createServer(function(req,res){
    "use strict";
    res.end("hello")
}).listen(8080)