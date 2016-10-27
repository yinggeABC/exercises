/**
 * Created by MWei2 on 10/20/2016.
 */
var ws = require("ws")
//建立客户端连接对象
var socket = new ws("ws://localhost:3000");
//监听与服务器端连接成功的事件
socket.on("open",function(){
    //向服务器发送消息
    socket.send("hello server");
})

socket.on("message",function(msg){
    console.log(msg)
})
