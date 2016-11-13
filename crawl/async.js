/**
 * Created by weimin on 16-11-4.
 */
 var async = require("async");
// series([function(cb){
//     setTimeout(cb,1000,1,"step1")
// },function(cb){
//     setTimeout(cb,1000,null,"step2");
// }],function(err,res){
//     if (err) console.error(err)
//      console.log(res)
// })
//
// function series (tasks,cb){
//     var res=[];
//     var index=0;
//     next();
//     function next(err,data){
//         if (err) return cb(err,res);
//         if (data) res.push(data);
//         var cur = tasks[index++];
//         if (index>tasks.length) return cb(null,res);
//         cur(next);
//
//     }
// }

/*parallel([function(cb){
    setTimeout(cb,1000,null,"step1")
},function(cb){
    setTimeout(cb,2000,null,"step2");
}],function(err,res){
    if (err) console.error(err)
     console.log(res)
})

function parallel(tasks,cb){
    var count=0;
    var res=[];
    for (let i=0;i<tasks.length;i++){
        tasks[i](next.bind(null,i));
    }

    function next(index,err,data){
        count++;
        if (err) return cb(err,res);
        if (data) res[index]=data;
        if (count>=tasks.length) return cb(null,res);
    }
}*/

/*function add(x,y,z){
    console.log(x,y,z)
}

var add1=add.bind(null,1)

var res= function(add1){
    add1(2,3);
}
res(add1)*/

/*var log = console.log;
var arr = [{name:'Jack', delay: 200},
    {name:'Mike', delay: 100},
    {name:'Freewind', delay: 300}];

async.forEachSeries(arr, function(item, callback) {
    log('1.1 enter: '+ item.name);
    setTimeout(function(){
        log('1.1 handle: ' + item.name);
        callback();
    }, item.delay);
}, function(err,data) {
    log('1.1 err: ' + err);
    log(data)
});*/

