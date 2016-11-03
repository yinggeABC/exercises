/**
 * Created by weimin on 16-11-3.
 */
var cheerio = require("cheerio")
var $ = cheerio.load("<h class='red'>Hello world</h>");
$(".red").text("Hello you!");
$(".red").addClass("blue");
console.log($.html());