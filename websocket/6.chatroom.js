/**
 * Created by MWei2 on 10/23/2016.
 */
    var http = require("http")
var express = require("express")
var app = express();
var server = http.createServer(app);
var io = require("socket.io")(server);
server.listen(3000)
var room;

app.get("/",function(req,res){
    res.sendFile(__dirname+"/6.index.html")
})

io.of("/group1").on("connection",function(socket){
    socket.on("message",function(msg){
        console.log("room "+room)
        io.of("/group1").in(room).emit("message","group1: "+msg);
    })

    socket.on("room",function(msg){
        room = msg;
        socket.join(msg);
    })
})

io.of("/group2").on("connection",function(socket){
    socket.on("message",function(msg){
        console.log("group2")
        socket.emit("message","group2: "+msg)
    })
})
