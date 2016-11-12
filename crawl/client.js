/**
 * Created by MWei2 on 11/6/2016.
 */
var i=0;
setInterval(function(){
    "use strict";
    i++;
    if(i>=10) process.exit();
    console.log(i)
},1000)