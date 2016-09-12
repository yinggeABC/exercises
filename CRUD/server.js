/**
 * Created by MWei2 on 9/12/2016.
 */
var express = require("express")
var app = express()
var bodyParser = require("body-parser");
var fs = require("fs")
app.use(bodyParser.json());
app.post("/addUser",function(req,res){
    var user  = req.body;
    var users = fs.readFile("./user.json","utf8");
    users = JSON.parse(users);//转成JSON对象
    var exists = users.every(function(item){
        return (item.name!=user.name)&&(item.age!=user.age);
    })
    if(exists) users.push(user);
    fs.writeFile("user.json",users);
    res.send(JSON.stringify(users));//发送JSON类型字符串
})

app.listen(8080)