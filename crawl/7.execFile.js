/**
 * Created by MWei2 on 11/6/2016.
 */
var child_process = require("child_process");
var execFile = child_process.execFile;
console.log(process.execPath);
execFile(process.execPath,["client.js"],function(err,stdout,stderr){//
    "use strict";
    console.log(stdout);
})