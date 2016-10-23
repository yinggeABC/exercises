/**
 * Created by MWei2 on 10/23/2016.
 */
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:1234});
wss.on("connection",function (ws){
    ws.on("message",function(msg){
        console.log("Received: %s",msg);
        ws.send("Hello, Client")
    })
})