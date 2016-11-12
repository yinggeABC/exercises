/**
 * Created by MWei2 on 11/6/2016.
 */
var child_process = require("child_process")
var exec = child_process.exec;

var subprocess = exec("curl http://localhost:8080",function(err,stdout,stderr){
    "use strict";
    console.log(stdout)
})
