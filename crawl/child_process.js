/**
 * Created by MWei2 on 11/6/2016.
 */
//child_process是子进程，可以创建一个子进程，并且执行shell命令,是node自带的
var child_process = require("child_process")
var spawn = child_process.spawn;

var subprocess = spawn("curl",["http://localhost:8080"])
subprocess.stdout.on("data",function(data){
   console.log(data.toString());
})

subprocess.on("exit",function(data){
    "use strict";
    console.log("done")
})