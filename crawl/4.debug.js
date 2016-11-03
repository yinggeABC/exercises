/**
 * Created by weimin on 16-11-4.
 */

var debug = require("debug")
var debugger1 = debug("dev")
debugger1("dev env")

var debugger2 = debug("test")
debugger2("test env")    //执行：先设置export DEBUG=dev/test, 然后node 4.debug.js

