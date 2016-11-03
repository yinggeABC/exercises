/**
 * Created by weimin on 16-11-3.
 */
var CronJob = require("cron").CronJob;

var cron = new CronJob("*/5 * * * * *",function(){ //秒分时号月周  模5为0的秒执行一次
    console.log("每5秒钟执行一次")
})

var cron = new CronJob("1 */30 * * * *",function(){
    console.log("每半个小时执行一次")
})
cron.start();