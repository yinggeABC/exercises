/**
 * Created by MWei2 on 10/20/2016.
 */
var express = require("express")
var path = require("path")
var app =  express()
app.get("/ajax",function(req,res){
    setTimeout(function(){
        res.send(new Date().toLocaleString());
    },5000)

})

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"2.longloop.html"));
})

app.listen(8080)