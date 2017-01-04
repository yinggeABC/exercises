/**
 * Created by weimin on 16-12-24.
 */
var p1=new Promise((resolve,reject)=>{
        setTimeout(reject(new Error("from p1")),3000);
    });
var p2 = new Promise((resolve,reject)=>{
        setTimeout(resolve(p1),1000);
    });
p2.then(function(data){
    console.log(data)
});
p2.catch(function(err){
    console.log(err)
})