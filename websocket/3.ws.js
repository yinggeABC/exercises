/**
 * Created by MWei2 on 10/20/2016.
 */
var Server = require("ws").Server;
var server = new Server({port:3000})
server.on("connection",function(ws){
    ws.on("message",function(msg){
        console.log(msg)
        ws.send("from server")
    })
})