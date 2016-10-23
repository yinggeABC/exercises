/**
 * Created by MWei2 on 10/21/2016.
 */
var express = require("express")
var path = require("path")
var app = express()
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/4.index.html"));
})

var server = require("http").createServer(app)
var io = require("socket.io")(server);

io.on("connection",function(socket){
        socket.on("message",function(msg){
            socket.send("server:"+msg);
        })

})
server.listen(8080)